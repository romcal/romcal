import { listDatesInYear } from '@internal/rite-roman1969';

import type { CalendarOverlay1962 } from '../calendars/types';
import type { NameTranslator } from '../i18n/init';
import type { LiturgicalDay1962, LiturgicalCalendar1962 } from '../models/liturgical-day';
import { buildProperOfTime1962, type ProperOfTimeEntry } from '../proper-of-time';
import {
  celebrationFromSancti,
  celebrationFromTempora,
  isTransferTarget,
  type PendingTransfer,
  resolveOccurrence,
  selectCommemorations,
} from '../rubrics';
import { buildSanctoral1962, type SanctoralEntry1962 } from '../sanctoral';

export interface BuildLiturgicalYearOptions {
  translateName?: NameTranslator;
  overlay?: CalendarOverlay1962;
}

function withSeason(celebration: LiturgicalDay1962, temporaEntry: ProperOfTimeEntry | undefined): LiturgicalDay1962 {
  if (!temporaEntry) return celebration;
  return { ...celebration, season: temporaEntry.season };
}

function buildDay(
  date: string,
  temporaEntry: ProperOfTimeEntry | undefined,
  sanctiEntries: SanctoralEntry1962[],
  translateName: NameTranslator | undefined
): LiturgicalDay1962[] | undefined {
  const candidates: LiturgicalDay1962[] = [];
  if (temporaEntry) candidates.push(celebrationFromTempora(temporaEntry, date, translateName));
  for (const s of sanctiEntries) candidates.push(celebrationFromSancti(s, date, translateName));

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
 * Return shape: `Record<date, LiturgicalDay1962[]>`. Index 0 of every
 * list is the primary celebration; subsequent entries are
 * commemorations in precedence order.
 */
export function buildLiturgicalYear1962(
  year: number,
  options: BuildLiturgicalYearOptions = {}
): LiturgicalCalendar1962 {
  const { translateName, overlay } = options;
  const tempora = buildProperOfTime1962(year);
  const sanctoral = buildSanctoral1962(year, { overlay });

  const firstPass: LiturgicalCalendar1962 = {};
  const pending: PendingTransfer[] = [];

  for (const date of listDatesInYear(year)) {
    const t = tempora.get(date);
    const s = sanctoral.get(date) ?? [];
    const day = buildDay(date, t, s, translateName);
    if (!day) continue;

    for (const celebration of day.slice(1)) {
      if (celebration.kind === 'sancti' && celebration.classOf1962 === 1) {
        pending.push({ originalDate: date, feast: celebration });
      }
    }
    firstPass[date] = day;
  }

  if (pending.length === 0) return firstPass;

  // Rubricae 1960 §50: an impeded Class I feast is transferred to
  // the next open day *after* its original date. Scan forward per
  // pending transfer, starting one day past the impediment. `pending`
  // is already in impediment-date order (emitted from the
  // date-ascending first pass), so earlier impediments claim their
  // landing slot first; later transfers skip over anything the
  // earlier one landed on (it's no longer a transfer target).
  const final: LiturgicalCalendar1962 = { ...firstPass };
  const allDates = listDatesInYear(year);
  for (const transfer of pending) {
    const startIdx = allDates.indexOf(transfer.originalDate);
    if (startIdx < 0) continue;
    for (let i = startIdx + 1; i < allDates.length; i++) {
      const landingDate = allDates[i];
      const day = final[landingDate];
      if (!day) continue;
      const [primary, ...commems] = day;
      if (!isTransferTarget(primary)) continue;

      const transferred: LiturgicalDay1962 = {
        ...transfer.feast,
        date: landingDate,
        isTransferredReplacement: true,
        transferredFromDate: transfer.originalDate,
        ...(primary.season ? { season: primary.season } : {}),
      };
      const displaced = primary;
      const newCommems = selectCommemorations(transferred, [displaced, ...commems.filter((c) => c !== transfer.feast)]);
      final[landingDate] = [transferred, ...newCommems];
      break;
    }
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
      const rebuilt = buildDay(date, t, sancti, translateName);
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
