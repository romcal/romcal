import { LiturgicalColorKeys } from '@RomcalTypes/liturgical-colors.type';

export type RomcalLocaleKeys = {
  after: string;
  before: string;
  day: string;
  dayAfterAshWed: string;
  feria: string;
  octave: string;
  season: string;
  sunday: string;
};

/**
 * The contract that defines the properties of a Romcal compliant locale file.
 */
export interface RomcalLocale {
  readonly advent?: Pick<RomcalLocaleKeys, 'feria' | 'season' | 'sunday'>;
  readonly christmastide?: Pick<RomcalLocaleKeys, 'day' | 'octave' | 'season' | 'sunday'>;
  readonly epiphany?: Pick<RomcalLocaleKeys, 'after' | 'before' | 'season'>;
  readonly ordinaryTime?: Pick<RomcalLocaleKeys, 'feria' | 'season' | 'sunday'>;
  readonly lent?: Pick<RomcalLocaleKeys, 'feria' | 'season' | 'sunday' | 'dayAfterAshWed'>;
  readonly holyWeek?: Pick<RomcalLocaleKeys, 'feria' | 'season'>;
  readonly eastertide?: Pick<RomcalLocaleKeys, 'feria' | 'octave' | 'season' | 'sunday'>;
  readonly celebrations?: {
    readonly [key: string]: string;
  };
  readonly sactoral?: {
    readonly [key: string]: string;
  };
  readonly liturgicalColors?: {
    readonly [key in LiturgicalColorKeys]?: string;
  };
}
