export type YearOptionalProp = {
  /**
   * A specific and optional gregorian year a date is computed for.
   * Should be used only to compute a date of a liturgical day of the Proper of Time
   * (should not be used in any proper calendar definition).
   */
  year?: number;
};

export type YearProp = {
  /**
   * A specific gregorian year a date is computed for.
   */
  year: number;
};

export type DayOfWeekIndexProp = {
  /**
   * The day of the week.
   * @example
   * 0 = Sunday
   * 1 = Monday
   * ...
   * 6 = Saturday
   * @pattern ^[0-6]$
   */
  dayOfWeek: number;
};

export type WeekOfSeasonProp = {
  /**
   * The week of the season.
   * @example
   * 1 = first week of the season
   * 2 = second week of the season
   * ...
   * 34 = thirty-fourth week of the season
   * @pattern ^([1-9]|[12][0-9]|3[0-4])$
   */
  weekOfSeason: number;
};

export type DayOfMonthProp = {
  /**
   * The day of the month.
   * @example
   * 1 = first day of the month
   * 2 = second day of the month
   * ...
   * 31 = thirty-first day of the month
   * @pattern ^([1-9]|[12][0-9]|3[01])$
   */
  dayOfMonth: number;
};

export type DayOfOctaveProp = {
  /**
   * The day of the octave (from 2 to 7).
   * @example
   * 2 = second day of the octave
   * 3 = third day of the octave
   * ...
   * 7 = seventh day of the octave
   * @pattern ^[2-7]$
   */
  dayOfOctave: number;
};

export type EpiphanyOnSundayOptionalProp = {
  /**
   * Whether Epiphany is celebrated on a Sunday.
   * @example
   * true = Epiphany is celebrated on a Sunday
   * false = Epiphany is celebrated January 6th
   */
  epiphanyOnSunday?: boolean;
};

export type AscensionOnSundayOptionalProp = {
  /**
   * Whether Ascension is celebrated on a Sunday.
   * @example
   * true = Ascension is celebrated on a Sunday
   * false = Ascension is celebrated on a Thursday
   */
  ascensionOnSunday?: boolean;
};

export type CorpusChristiOnSundayOptionalProp = {
  /**
   * Whether Corpus Christi is celebrated on a Sunday.
   * @example
   * true = Corpus Christi is celebrated on a Sunday
   * false = Corpus Christi is celebrated on a Thursday
   */
  corpusChristiOnSunday?: boolean;
};

export type FirstSundayOfAdventDateFn = {
  /**
   * The first Sunday of Advent.
   */
  firstSundayOfAdvent: YearOptionalProp | null;
};

export type UnprivilegedWeekdayOfAdventDateFn = {
  /**
   * An unprivileged weekday of Advent.
   */
  unprivilegedWeekdayOfAdvent: DayOfWeekIndexProp & WeekOfSeasonProp & YearOptionalProp;
};

export type PrivilegedWeekdayOfAdventDateFn = {
  /**
   * A privileged weekday of Advent.
   */
  privilegedWeekdayOfAdvent: DayOfMonthProp & YearOptionalProp;
};

export type SundayOfAdventDateFn = {
  /**
   * A Sunday of Advent.
   */
  sundayOfAdvent: WeekOfSeasonProp & YearOptionalProp;
};

export type NativityOfTheLordDateFn = {
  /**
   * The Nativity of the Lord.
   */
  nativityOfTheLord: YearOptionalProp | null;
};

export type HolyFamilyDateFn = {
  /**
   * The Holy Family.
   */
  holyFamily: YearOptionalProp | null;
};

export type WeekdayWithinOctaveOfChristmasDateFn = {
  /**
   * A weekday within the Christmas octave (from December 26 to December 31).
   */
  weekdayWithinOctaveOfChristmas: DayOfOctaveProp & YearOptionalProp;
};

export type MaryMotherOfGodDateFn = {
  /**
   * Mary, Mother of God.
   */
  maryMotherOfGod: YearOptionalProp | null;
};

export type SecondSundayAfterChristmasDateFn = {
  /**
   * The second Sunday after Christmas.
   */
  secondSundayAfterChristmas: (EpiphanyOnSundayOptionalProp & YearOptionalProp) | null;
};

export type WeekdayBeforeEpiphanyDateFn = {
  /**
   * A weekday before Epiphany.
   */
  weekdayBeforeEpiphany: DayOfMonthProp & EpiphanyOnSundayOptionalProp & YearOptionalProp;
};

export type EpiphanyDateFn = {
  /**
   * Epiphany.
   */
  epiphany: (EpiphanyOnSundayOptionalProp & YearOptionalProp) | null;
};

export type WeekdayAfterEpiphanyDateFn = {
  /**
   * A weekday after Epiphany.
   */
  weekdayAfterEpiphany: DayOfWeekIndexProp & EpiphanyOnSundayOptionalProp & YearOptionalProp;
};

export type BaptismOfTheLordDateFn = {
  /**
   * The Baptism of the Lord.
   */
  baptismOfTheLord: (EpiphanyOnSundayOptionalProp & YearOptionalProp) | null;
};

export type AshWednesdayDateFn = {
  /**
   * Ash Wednesday.
   */
  ashWednesday: YearOptionalProp | null;
};

export type PalmSundayDateFn = {
  /**
   * Palm Sunday.
   */
  palmSunday: YearOptionalProp | null;
};

export type HolyThursdayDateFn = {
  /**
   * Holy Thursday.
   */
  holyThursday: YearOptionalProp | null;
};

export type GoodFridayDateFn = {
  /**
   * Good Friday (Holy Friday).
   */
  goodFriday: YearOptionalProp | null;
};

export type HolySaturdayDateFn = {
  /**
   * Holy Saturday.
   */
  holySaturday: YearOptionalProp | null;
};

export type EasterSundayDateFn = {
  /**
   * Easter Sunday.
   */
  easterSunday: YearOptionalProp | null;
};

export type WeekdayOrSundayOfEasterTimeDateFn = {
  /**
   * A weekday or a Sunday of Easter time.
   */
  weekdayOrSundayOfEasterTime: DayOfWeekIndexProp &
    WeekOfSeasonProp &
    AscensionOnSundayOptionalProp &
    YearOptionalProp;
};

export type DivineMercySundayDateFn = {
  /**
   * Divine Mercy Sunday.
   */
  divineMercySunday: YearOptionalProp | null;
};

export type AscensionDateFn = {
  /**
   * Ascension.
   */
  ascension: (AscensionOnSundayOptionalProp & YearOptionalProp) | null;
};

export type PentecostSundayDateFn = {
  /**
   * Pentecost Sunday.
   */
  pentecostSunday: YearOptionalProp | null;
};

export type WeekdayOrSundayOfOrdinaryTimeDateFn = {
  /**
   * A weekday or a Sunday of Ordinary Time.
   */
  weekdayOrSundayOfOrdinaryTime: DayOfWeekIndexProp &
    WeekOfSeasonProp &
    EpiphanyOnSundayOptionalProp &
    CorpusChristiOnSundayOptionalProp &
    YearOptionalProp;
};

export type TrinitySundayDateFn = {
  /**
   * Trinity Sunday.
   */
  trinitySunday: YearOptionalProp | null;
};

export type CorpusChristiDateFn = {
  /**
   * Corpus Christi.
   */
  corpusChristi: (CorpusChristiOnSundayOptionalProp & YearOptionalProp) | null;
};

export type MostSacredHeartOfJesusDateFn = {
  /**
   * The Most Sacred Heart of Jesus.
   */
  mostSacredHeartOfJesus: YearOptionalProp | null;
};

export type ChristTheKingSundayDateFn = {
  /**
   * Christ the King (last Sunday of Ordinary Time).
   */
  christTheKingSunday: YearOptionalProp | null;
};

export type OneOfDatesFn =
  | FirstSundayOfAdventDateFn
  | UnprivilegedWeekdayOfAdventDateFn
  | PrivilegedWeekdayOfAdventDateFn
  | SundayOfAdventDateFn
  | NativityOfTheLordDateFn
  | HolyFamilyDateFn
  | WeekdayWithinOctaveOfChristmasDateFn
  | MaryMotherOfGodDateFn
  | SecondSundayAfterChristmasDateFn
  | WeekdayBeforeEpiphanyDateFn
  | EpiphanyDateFn
  | WeekdayAfterEpiphanyDateFn
  | BaptismOfTheLordDateFn
  | AshWednesdayDateFn
  | PalmSundayDateFn
  | HolyThursdayDateFn
  | GoodFridayDateFn
  | HolySaturdayDateFn
  | EasterSundayDateFn
  | WeekdayOrSundayOfEasterTimeDateFn
  | DivineMercySundayDateFn
  | AscensionDateFn
  | PentecostSundayDateFn
  | WeekdayOrSundayOfOrdinaryTimeDateFn
  | TrinitySundayDateFn
  | CorpusChristiDateFn
  | MostSacredHeartOfJesusDateFn
  | ChristTheKingSundayDateFn;
