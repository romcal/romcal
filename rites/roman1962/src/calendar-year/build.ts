import { listDatesInYear } from '@internal/proper-of-time';

import type { CalendarOverlay1962 } from '../calendars/types';
import type { NameTranslator } from '../i18n/init';
import { buildProperOfTime1962, type ProperOfTimeEntry } from '../proper-of-time';
import {
  celebrationFromSancti,
  celebrationFromTempora,
  isTransferTarget,
  type PendingTransfer,
  type ResolvedYear1962,
  resolveOccurrence,
  selectCommemorations,
} from '../rubrics';
import type { Celebration1962 } from '../rubrics/types';
import { buildSanctoral1962, type SanctoralEntry1962 } from '../sanctoral';

export interface BuildLiturgicalYearOptions {
  translateName?: NameTranslator;
  overlay?: CalendarOverlay1962;
}

function withSeason(celebration: Celebration1962, temporaEntry: ProperOfTimeEntry | undefined): Celebration1962 {
  if (!temporaEntry) return celebration;
  return { ...celebration, season: temporaEntry.season };
}

function buildDay(
  temporaEntry: ProperOfTimeEntry | undefined,
  sanctiEntries: SanctoralEntry1962[],
  translateName: NameTranslator | undefined
): Celebration1962[] | undefined {
  const candidates: Celebration1962[] = [];
  if (temporaEntry) candidates.push(celebrationFromTempora(temporaEntry, translateName));
  for (const s of sanctiEntries) candidates.push(celebrationFromSancti(s, translateName));

  if (candidates.length === 0) return undefined;

  const { primary, losers } = resolveOccurrence(candidates);
  const commemorations = selectCommemorations(primary, losers);

  return [primary, ...commemorations].map((c) => withSeason(c, temporaEntry));
}

/**
 * Build the resolved liturgical year for `year` (civil). Merges M3
 * Proper of Time and M4 Proper of Saints, applies occurrence rules,
 * and forward-transfers impeded Class I sanctoral feasts.
 *
 * Return shape: `Record<date, Celebration1962[]>`. Index 0 of every
 * list is the primary celebration; subsequent entries are
 * commemorations in precedence order.
 */
export function buildLiturgicalYear1962(year: number, options: BuildLiturgicalYearOptions = {}): ResolvedYear1962 {
  const { translateName, overlay } = options;
  const tempora = buildProperOfTime1962(year);
  const sanctoral = buildSanctoral1962(year, { overlay });

  const firstPass: ResolvedYear1962 = {};
  const pending: PendingTransfer[] = [];

  for (const date of listDatesInYear(year)) {
    const t = tempora.get(date);
    const s = sanctoral.get(date) ?? [];
    const day = buildDay(t, s, translateName);
    if (!day) continue;

    for (const celebration of day.slice(1)) {
      if (celebration.kind === 'sancti' && celebration.classOf1962 === 1) {
        pending.push({ originalDate: date, feast: celebration });
      }
    }
    firstPass[date] = day;
  }

  if (pending.length === 0) return firstPass;

  const final: ResolvedYear1962 = { ...firstPass };
  for (const date of listDatesInYear(year)) {
    if (pending.length === 0) break;
    const day = final[date];
    if (!day) continue;
    const [primary, ...commems] = day;
    if (!isTransferTarget(primary)) continue;

    const transfer = pending.shift();
    if (!transfer) break;

    const transferred: Celebration1962 = {
      ...transfer.feast,
      isTransferredReplacement: true,
      transferredFromDate: transfer.originalDate,
      ...(primary.season ? { season: primary.season } : {}),
    };
    const displaced = primary;
    const newCommems = selectCommemorations(transferred, [displaced, ...commems.filter((c) => c !== transfer.feast)]);
    final[date] = [transferred, ...newCommems];
  }

  // Strip transferred feasts out of their original day's commemoration list.
  const transferredKeys = new Set<string>();
  const transferredNames = new Set<string>();
  for (const [date, celebrations] of Object.entries(final)) {
    const [primary] = celebrations;
    if (primary?.isTransferredReplacement && primary.transferredFromDate) {
      transferredKeys.add(`${primary.transferredFromDate}::${primary.key}`);
      transferredNames.add(primary.name);
      void date;
    }
  }
  if (transferredKeys.size > 0) {
    for (const [date, celebrations] of Object.entries(final)) {
      const [primary, ...commems] = celebrations;
      const filtered = commems.filter((c) => !transferredKeys.has(`${date}::${c.key}`));
      if (filtered.length !== commems.length) {
        final[date] = [primary, ...filtered];
      }
    }
  }

  // Vigil suppression (Rubricae 1960 §10): when a feast is transferred,
  // its vigil is omitted. Rebuild any day whose primary or
  // commemoration is a vigil of a transferred feast.
  if (transferredNames.size > 0) {
    for (const [date, celebrations] of Object.entries(final)) {
      const [primary, ...commems] = celebrations;
      const primaryHits = primary.vigil && transferredNames.has(primary.vigil.of);
      const commemHits = commems.some((c) => c.vigil && transferredNames.has(c.vigil.of));
      if (!primaryHits && !commemHits) continue;

      const t = tempora.get(date);
      const sancti = (sanctoral.get(date) ?? []).filter((s) => !s.vigil || !transferredNames.has(s.vigil.of));
      const rebuilt = buildDay(t, sancti, translateName);
      if (!rebuilt) continue;
      if (primary.isTransferredReplacement) {
        const [newPrimary, ...newCommems] = rebuilt;
        final[date] = [
          {
            ...newPrimary,
            isTransferredReplacement: true,
            transferredFromDate: primary.transferredFromDate,
          },
          ...newCommems,
        ];
      } else {
        final[date] = rebuilt;
      }
    }
  }

  return final;
}
