// Inline to avoid pulling on `sanctoral/` or `liturgical-day-1962`,
// both of which delete in the B2e cutover.
type Color = 'White' | 'Red' | 'Green' | 'Violet' | 'Black' | 'Rose' | string;

export type LocaleId = string;

export type LocaleNames = Record<string, string>;

export type LocaleColors = Partial<Record<Color, string>>;

export type LocaleRanks = {
  ClassI?: string;
  ClassII?: string;
  ClassIII?: string;
  ClassIV?: string;
  Ferial?: string;
};

export type LocaleSeasons = {
  Advent?: string;
  ChristmasTide?: string;
  EpiphanyTide?: string;
  Septuagesima?: string;
  Lent?: string;
  Passiontide?: string;
  HolyWeek?: string;
  EasterWeek?: string;
  Paschaltide?: string;
  AscensionTide?: string;
  TimeAfterPentecost?: string;
};

export type LocaleMonths = Partial<Record<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11, string>>;

export type LocaleWeekdays = Partial<Record<0 | 1 | 2 | 3 | 4 | 5 | 6, string>>;

export interface Locale1962 {
  id: LocaleId;
  names: LocaleNames;
  colors?: LocaleColors;
  ranks?: LocaleRanks;
  seasons?: LocaleSeasons;
  months?: LocaleMonths;
  weekdays?: LocaleWeekdays;
}
