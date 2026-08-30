import { Id } from './common';

export interface Locale {
  id: Id;
  ordinals?: LocaleOrdinals;
  weekdays?: LocaleWeeks;
  months?: LocaleMonths;
  colors?: LocaleColors;
  seasons?: {
    advent?: {
      season?: string;
      weekday?: string;
      sunday?: string;
      privileged_weekday?: string;
    };
    christmas_time?: {
      season?: string;
      day?: string;
      octave?: string;
      before_epiphany?: string;
      second_sunday_after_christmas?: string;
      after_epiphany?: string;
    };
    ordinary_time?: {
      season?: string;
      weekday?: string;
      sunday?: string;
    };
    lent?: {
      season?: string;
      weekday?: string;
      sunday?: string;
      day_after_ash_wed?: string;
      holy_week_day?: string;
    };
    paschal_triduum?: {
      season?: string;
    };
    easter_time?: {
      season?: string;
      weekday?: string;
      sunday?: string;
      octave?: string;
    };
  };
  periods?: {
    epiphany?: string;
    holy_week?: string;
  };
  ranks?: {
    solemnity?: string;
    sunday?: string;
    feast?: string;
    memorial?: string;
    optional_memorial?: string;
    weekday?: string;
  };
  cycles?: {
    proper_of_time?: string;
    proper_of_saints?: string;
    sunday_year_a?: string;
    sunday_year_b?: string;
    sunday_year_c?: string;
    weekday_year_1?: string;
    weekday_year_2?: string;
    psalter_week_1?: string;
    psalter_week_2?: string;
    psalter_week_3?: string;
    psalter_week_4?: string;
  };
  names?: LocaleLiturgicalDayNames;
}

// export type LocaleOrdinals = Record<string, string | ((n: number) => string)>;
export type LocaleOrdinals = Record<string, string>;

export type LocaleWeeks = Record<string, string>;

export type LocaleMonths = Record<string, string>;

export type LocaleColors = {
  black?: string;
  gold?: string;
  green?: string;
  purple?: string;
  red?: string;
  rose: string;
  white?: string;
};

export type LocaleLiturgicalDayNames = Record<string, string>;
