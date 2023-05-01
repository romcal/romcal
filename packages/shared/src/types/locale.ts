/**
 * Locale code identifier.
 * @pattern ^[a-z]{2}(?:-[A-Z]{2})?$
 */
export type LocaleCode = string;

/**
 * Locale key to be localized.
 * @pattern ^[a-z\d]+(?:_[a-z\d]+)*$
 */
export type LocaleKey = string;

export interface Locale {
  /**
   * Unique identifier of the locale, in xx-XX format.
   */
  localeCode: LocaleCode;

  ordinals?: LocaleOrdinals;

  weekdays?: LocaleWeeks;

  months?: LocaleMonths;

  colors?: LocaleColors;

  /**
   * Liturgical seasons
   */
  seasons?: {
    /**
     * Advent
     */
    advent?: {
      season?: string;
      weekday?: string;
      sunday?: string;
      privileged_weekday?: string;
    };

    /**
     * Christmas
     */
    christmas_time?: {
      season?: string;
      day?: string;
      octave?: string;
      before_epiphany?: string;
      second_sunday_after_christmas?: string;
      after_epiphany?: string;
    };

    /**
     * Ordinary Time
     */
    ordinary_time?: {
      season?: string;
      weekday?: string;
      sunday?: string;
    };

    /**
     * Lent
     */
    lent?: {
      season?: string;
      weekday?: string;
      sunday?: string;
      day_after_ash_wed?: string;
      holy_week_day?: string;
    };

    /**
     * Paschal Triduum
     */

    paschal_triduum?: {
      season?: string;
    };

    /**
     * Easter Time
     */
    easter_time?: {
      season?: string;
      weekday?: string;
      sunday?: string;
      octave?: string;
    };
  };

  /**
   * Liturgical periods
   */
  periods?: {
    epiphany?: string;
    holy_week?: string;
  };

  /**
   * Liturgical ranks
   */
  ranks?: {
    solemnity?: string;
    sunday?: string;
    feast?: string;
    memorial?: string;
    weekday?: string;
  };

  /**
   * Liturgical cycles
   */
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

  /**
   * Liturgical day names that are not from the Proper of Time
   */
  names?: LocaleLiturgicalDayNames;
}

export type LocaleOrdinals = Record<LocaleKey, string>;

export type LocaleWeeks = Record<LocaleKey, string>;

export type LocaleMonths = Record<LocaleKey, string>;

export type LocaleColors = {
  black?: string;
  gold?: string;
  green?: string;
  purple?: string;
  red?: string;
  rose: string;
  white?: string;
};

/**
 * Locale keys to be localized.
 * @propertyNames { "pattern": "^[a-z\\d]+(?:_[a-z\\d]+)*$" }
 */
export type LocaleLiturgicalDayNames = Record<LocaleKey, string>;

/**
 * i18n definitions
 */
export type i18nDef = [string] | [string, { [key: string]: unknown } | string];
