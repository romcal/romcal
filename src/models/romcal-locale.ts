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

export type TRomcalLocale = Readonly<{
  advent?: Pick<RomcalLocaleKeys, 'feria' | 'season' | 'sunday'>;
  christmastide?: Pick<RomcalLocaleKeys, 'day' | 'octave' | 'season' | 'sunday'>;
  epiphany?: Pick<RomcalLocaleKeys, 'after' | 'before' | 'season'>;
  ordinaryTime?: Pick<RomcalLocaleKeys, 'feria' | 'season' | 'sunday'>;
  lent?: Pick<RomcalLocaleKeys, 'feria' | 'season' | 'sunday' | 'dayAfterAshWed'>;
  holyWeek?: Pick<RomcalLocaleKeys, 'feria' | 'season'>;
  eastertide?: Pick<RomcalLocaleKeys, 'feria' | 'octave' | 'season' | 'sunday'>;
  celebrations?: {
    [key: string]: string;
  };
  sactoral?: {
    [key: string]: string;
  };
}>;
