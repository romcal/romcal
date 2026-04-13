import { buildProperOfTime1962, type ProperOfTimeEntry } from '../proper-of-time';
import {
  celebrationFromSancti,
  celebrationFromTempora,
  isTransferTarget,
  type PendingTransfer,
  type ResolvedDay1962,
  type ResolvedYear1962,
  resolveOccurrence,
  selectCommemorations,
} from '../rubrics';
import type { Celebration1962 } from '../rubrics/types';
import { buildSanctoral1962, type SanctoralEntry1962 } from '../sanctoral';

function listDatesInYear(year: number): string[] {
  const out: string[] = [];
  const start = new Date(Date.UTC(year, 0, 1));
  const end = new Date(Date.UTC(year + 1, 0, 1));
  for (let d = start; d < end; d = new Date(d.getTime() + 86_400_000)) {
    out.push(d.toISOString().slice(0, 10));
  }
  return out;
}

function dayOfWeekUTC(isoDate: string): 0 | 1 | 2 | 3 | 4 | 5 | 6 {
  return new Date(`${isoDate}T00:00:00Z`).getUTCDay() as 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

function buildDay(
  date: string,
  temporaEntry: ProperOfTimeEntry | undefined,
  sanctiEntries: SanctoralEntry1962[]
): ResolvedDay1962 | undefined {
  const candidates: Celebration1962[] = [];
  if (temporaEntry) candidates.push(celebrationFromTempora(temporaEntry));
  for (const s of sanctiEntries) candidates.push(celebrationFromSancti(s));

  if (candidates.length === 0) return undefined;

  const { primary, losers } = resolveOccurrence(candidates);
  const commemorations = selectCommemorations(primary, losers);

  return {
    date,
    dayOfWeek: dayOfWeekUTC(date),
    ...(temporaEntry ? { season: temporaEntry.season } : {}),
    primary,
    commemorations,
  };
}

/**
 * Build the resolved liturgical year for `year` (civil). Merges M3
 * Proper of Time and M4 Proper of Saints, applies occurrence rules,
 * and forward-transfers impeded Class I sanctoral feasts.
 */
export function buildLiturgicalYear1962(year: number): ResolvedYear1962 {
  const tempora = buildProperOfTime1962(year);
  const sanctoral = buildSanctoral1962(year);

  const firstPass: ResolvedYear1962 = new Map();
  const pending: PendingTransfer[] = [];

  for (const date of listDatesInYear(year)) {
    const t = tempora.get(date);
    const s = sanctoral.get(date) ?? [];
    const day = buildDay(date, t, s);
    if (!day) continue;

    // Capture Class I sancti losers for transfer.
    for (const loser of day.commemorations) {
      if (loser.kind === 'sancti' && loser.classOf1962 === 1) {
        pending.push({ originalDate: date, feast: loser });
      }
    }
    firstPass.set(date, day);
  }

  if (pending.length === 0) return firstPass;

  const final: ResolvedYear1962 = new Map(firstPass);
  for (const date of listDatesInYear(year)) {
    if (pending.length === 0) break;
    const day = final.get(date);
    if (!day) continue;
    if (!isTransferTarget(day.primary)) continue;

    const transfer = pending.shift();
    if (!transfer) break;

    const displaced = day.primary;
    const feast = transfer.feast;
    const newCommems = selectCommemorations(feast, [displaced, ...day.commemorations.filter((c) => c !== feast)]);

    final.set(date, {
      ...day,
      primary: feast,
      commemorations: newCommems,
      transferredFrom: transfer.originalDate,
    });
  }

  // Strip transferred feasts out of their original day's commemoration list.
  const transferredKeys = new Set<string>();
  const transferredNames = new Set<string>();
  for (const day of final.values()) {
    if (day.transferredFrom) {
      transferredKeys.add(`${day.transferredFrom}::${day.primary.key}`);
      transferredNames.add(day.primary.name);
    }
  }
  if (transferredKeys.size > 0) {
    for (const [date, day] of final) {
      const filtered = day.commemorations.filter((c) => !transferredKeys.has(`${date}::${c.key}`));
      if (filtered.length !== day.commemorations.length) {
        final.set(date, { ...day, commemorations: filtered });
      }
    }
  }

  // Vigil suppression (Rubricae 1960 §10): when a feast is transferred,
  // its vigil is omitted. Rebuild any day whose primary or
  // commemoration is a vigil of a transferred feast.
  if (transferredNames.size > 0) {
    for (const [date, day] of final) {
      const primaryHits = day.primary.vigil && transferredNames.has(day.primary.vigil.of);
      const commemHits = day.commemorations.some((c) => c.vigil && transferredNames.has(c.vigil.of));
      if (!primaryHits && !commemHits) continue;

      const t = tempora.get(date);
      const sancti = (sanctoral.get(date) ?? []).filter((s) => !s.vigil || !transferredNames.has(s.vigil.of));
      const rebuilt = buildDay(date, t, sancti);
      if (rebuilt) final.set(date, { ...rebuilt, transferredFrom: day.transferredFrom });
    }
  }

  return final;
}
