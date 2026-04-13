import type { Rank1962 } from '../constants/rank-1962';
import type { ProperOfTimeEntry } from '../proper-of-time';
import { loadSancti, loadTempora, type MassFileEntry, type MassFileMap } from '../sanctoral/data';
import type { SanctoralEntry1962 } from '../sanctoral/types';

import { scorePrecedence } from './precedence';
import { classifyTempora } from './tempora-class';
import type { Celebration1962, Class1962 } from './types';

const CLASS_TO_RANK: Record<Class1962, Rank1962> = {
  1: 'ClassI',
  2: 'ClassII',
  3: 'ClassIII',
  4: 'ClassIV',
};

function pickTemporaMass(temporaKey: string, tempora: MassFileMap): MassFileEntry | undefined {
  if (temporaKey in tempora) return tempora[temporaKey];
  // Some movable sunday keys have '-0a' variants (e.g. Epi1-0a) that M3 already emits verbatim.
  return undefined;
}

/**
 * Build a Celebration1962 from a Tempora entry. The Class is taken
 * from M5's rubric-based classifier (which encodes 1960 §§20-25),
 * not from the DO mass-file rank — those sometimes disagree for
 * privileged Lent ferias.
 */
export function celebrationFromTempora(entry: ProperOfTimeEntry): Celebration1962 {
  const tempora = loadTempora();
  const mass = pickTemporaMass(entry.temporaKey, tempora);
  const classOf1962 = classifyTempora(entry);

  const celebration: Celebration1962 = {
    kind: 'tempora',
    key: entry.temporaKey,
    name: mass?.officium ?? entry.temporaKey,
    ...(mass?.names ? { names: mass.names } : {}),
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
  celebration.precedence = scorePrecedence(celebration);
  return celebration;
}

/**
 * Build a Celebration1962 from a Sanctoral entry. Uses the rank
 * already authoritatively resolved by M4 (`class1962`).
 */
export function celebrationFromSancti(entry: SanctoralEntry1962): Celebration1962 {
  const classOf1962 = (entry.class1962 ?? 4) as Class1962;
  const mass = entry.source === 'sancti' ? loadSancti()[entry.fileKey] : loadTempora()[entry.fileKey];
  const names = mass?.names;
  const celebration: Celebration1962 = {
    kind: 'sancti',
    key: entry.fileKey,
    name: entry.name,
    ...(names ? { names } : {}),
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
  celebration.precedence = scorePrecedence(celebration);
  return celebration;
}
