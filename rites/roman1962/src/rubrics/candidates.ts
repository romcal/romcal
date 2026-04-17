import type { Rank1962 } from '../constants/rank-1962';
import type { NameTranslator } from '../i18n/init';
import { LiturgicalDay1962, type LiturgicalDay1962Init, type Class1962 } from '../models/liturgical-day';
import type { ProperOfTimeEntry } from '../proper-of-time';
import { loadTempora, type MassFileEntry, type MassFileMap } from '../sanctoral/data';
import type { SanctoralEntry1962 } from '../sanctoral/types';

import { scorePrecedence } from './precedence';
import { classifyTempora } from './tempora-class';

const CLASS_TO_RANK: Record<Class1962, Rank1962> = {
  1: 'ClassI',
  2: 'ClassII',
  3: 'ClassIII',
  4: 'ClassIV',
};

const identityTranslator: NameTranslator = (_source, _key, fallback) => fallback;

function pickTemporaMass(temporaKey: string, tempora: MassFileMap): MassFileEntry | undefined {
  if (temporaKey in tempora) return tempora[temporaKey];
  // Some movable sunday keys have '-0a' variants (e.g. Epi1-0a) that M3 already emits verbatim.
  return undefined;
}

/**
 * Build a LiturgicalDay1962 from a Tempora entry. The Class is taken
 * from M5's rubric-based classifier (which encodes 1960 §§20-25),
 * not from the DO mass-file rank — those sometimes disagree for
 * privileged Lent ferias.
 *
 * `translateName` is consulted with `('tempora', key, latinFallback)` to
 * produce the localized `name`. Defaults to a pass-through (Latin) when
 * called from the functional API without a configured i18n instance.
 */
export function celebrationFromTempora(
  entry: ProperOfTimeEntry,
  date: string,
  translateName: NameTranslator = identityTranslator
): LiturgicalDay1962 {
  const tempora = loadTempora();
  const mass = pickTemporaMass(entry.temporaKey, tempora);
  const classOf1962 = classifyTempora(entry);

  const latin = mass?.officium ?? entry.temporaKey;
  const init: LiturgicalDay1962Init = {
    kind: 'tempora',
    key: entry.temporaKey,
    name: translateName('tempora', entry.temporaKey, latin),
    date,
    classOf1962,
    rank1962: CLASS_TO_RANK[classOf1962],
    numericRank: mass?.rank?.numericRank ?? 0,
    precedence: 0,
    properRef: { source: `tempora/${entry.temporaKey}` },
    rubrics: {
      gloria: mass?.rubrics.gloria ?? false,
      credo: mass?.rubrics.credo ?? false,
      preface: mass?.rubrics.preface,
      lastGospel: mass?.rubrics.lastGospel,
      ite: mass?.rubrics.ite,
    },
    colors: mass?.colors ?? [],
  };
  init.precedence = scorePrecedence(init);
  return new LiturgicalDay1962(init);
}

/**
 * Build a LiturgicalDay1962 from a Sanctoral entry. Uses the rank
 * already authoritatively resolved by M4 (`class1962`). The name is
 * resolved through `translateName(source, key, latinFallback)`; the
 * Latin fallback is the kalendarium's own `entry.name` (already
 * Latin), keeping the historical behavior when no i18n is wired in.
 */
export function celebrationFromSancti(
  entry: SanctoralEntry1962,
  date: string,
  translateName: NameTranslator = identityTranslator
): LiturgicalDay1962 {
  const classOf1962 = (entry.class1962 ?? 4) as Class1962;
  const init: LiturgicalDay1962Init = {
    kind: 'sancti',
    key: entry.fileKey,
    name: translateName(entry.source, entry.fileKey, entry.name),
    date,
    classOf1962,
    rank1962: entry.rank1962,
    numericRank: entry.numericRank,
    precedence: 0,
    properRef: {
      source: entry.properRef.source,
      communeSlug: entry.properRef.communeSlug,
    },
    rubrics: entry.rubrics,
    colors: entry.colors,
    ...(entry.octave ? { octave: entry.octave } : {}),
    ...(entry.vigil ? { vigil: entry.vigil } : {}),
    ...(entry.commemorations.length > 0 ? { inlineCommemorations: entry.commemorations } : {}),
  };
  init.precedence = scorePrecedence(init);
  return new LiturgicalDay1962(init);
}
