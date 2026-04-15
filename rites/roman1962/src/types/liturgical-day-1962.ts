import type { Common1962 } from '../constants/common-1962';
import type { OctaveDayKind, OctaveDayNumber, OctaveId, OctaveRank } from '../constants/octaves';
import type { PrefaceId } from '../constants/prefaces';
import type { Rank1962 } from '../constants/rank-1962';

export type LocaleId = string;
export type LocalizedText = Record<LocaleId, string>;

export type TextRole = 'verse' | 'antiphon' | 'body';

export type PropersBlockItem =
  | { type: 'text'; lang: LocaleId; value: string; role?: TextRole }
  | { type: 'scriptureRef'; ref: string }
  | { type: 'directive'; value: string }
  | { type: 'ref'; target: string }
  | { type: 'rubric'; note: string }
  | { type: 'separator' };

export type PropersBlock = PropersBlockItem[];

export type MassSectionField =
  | 'introit'
  | 'collect'
  | 'epistle'
  | 'gradual'
  | 'alleluia'
  | 'tract'
  | 'sequence'
  | 'gospel'
  | 'offertory'
  | 'secret'
  | 'preface'
  | 'communion'
  | 'postcommunion';

export type MassPropers = Partial<Record<MassSectionField, LocalizedText>>;

export type MassPropersBlocks = Partial<Record<MassSectionField, PropersBlock>>;

export interface OctaveInfo {
  id: OctaveId;
  parentFeastId: string;
  day: OctaveDayNumber;
  kind: OctaveDayKind;
  rank: OctaveRank;
}

export interface RubricFlags1962 {
  gloria: boolean;
  credo: boolean;
  preface?: PrefaceId;
  lastGospel?: 'ultimum' | 'proper' | 'none';
  ite?: 'ite' | 'benedicamus' | 'requiescant';
}

export interface Commemoration1962 {
  id: string;
  source: 'tempora' | 'sancti' | 'commune';
}

export interface ProperRef1962 {
  source: string;
  commune?: Common1962;
}

export interface LiturgicalDay1962Extensions {
  rank1962?: Rank1962;
  class1962?: 1 | 2 | 3 | 4;
  rubrics?: RubricFlags1962;
  octave?: OctaveInfo;
  vigil?: { of: string };
  commemorations?: Commemoration1962[];
  properRef?: ProperRef1962;
  propers?: MassPropers;
}
