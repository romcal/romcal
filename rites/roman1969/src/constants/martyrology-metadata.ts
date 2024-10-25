import { ScreamingSnakeCase } from '../types/common';
import { RomcalTitles } from '../types/liturgical-day';
import { toScreamingSnakeCase } from '../utils/string';

/**
 * Canonization level of a person.
 */

export enum CanonizationLevels {
  Blessed = 'BLESSED',
  Saint = 'SAINT',
}

export const CANONIZATION_LEVEL = Object.keys(CanonizationLevels)
  .filter((key) => typeof CanonizationLevels[key as keyof typeof CanonizationLevels] === 'string')
  .map((key) => toScreamingSnakeCase(key)) as ScreamingSnakeCase<keyof typeof CanonizationLevels>[];

export type CanonizationLevel = (typeof CANONIZATION_LEVEL)[number];

/**
 * Titles of Saints and Blessed from the Martyrology catalog.
 */
export enum Title {
  Abbess = 'ABBESS',
  Abbot = 'ABBOT',
  Apostle = 'APOSTLE',
  Archangel = 'ARCHANGEL',
  Bishop = 'BISHOP',
  Deacon = 'DEACON',
  DoctorOfTheChurch = 'DOCTOR_OF_THE_CHURCH',
  Empress = 'EMPRESS',
  Evangelist = 'EVANGELIST',
  FirstBishop = 'FIRST_BISHOP',
  Hermit = 'HERMIT',
  King = 'KING',
  Martyr = 'MARTYR',
  Missionary = 'MISSIONARY',
  Monk = 'MONK',
  MotherAndQueenOfChile = 'MOTHER_AND_QUEEN_OF_CHILE',
  ParentsOfTheBlessedVirginMary = 'PARENTS_OF_THE_BLESSED_VIRGIN_MARY',
  Pope = 'POPE',
  Patriarch = 'PATRIARCH',
  Pilgrim = 'PILGRIM',
  Priest = 'PRIEST',
  Prophet = 'PROPHET',
  ProtoMartyrOfOceania = 'PROTO_MARTYR_OF_OCEANIA',
  Queen = 'QUEEN',
  QueenOfPoland = 'QUEEN_OF_POLAND',
  Religious = 'RELIGIOUS',
  SlavicMissionary = 'SLAVIC_MISSIONARY',
  SpouseOfTheBlessedVirginMary = 'SPOUSE_OF_THE_BLESSED_VIRGIN_MARY',
  TheFirstMartyr = 'THE_FIRST_MARTYR',
  Virgin = 'VIRGIN',
}

export const TITLES = Object.keys(Title)
  .filter((key) => typeof Title[key as keyof typeof Title] === 'string')
  .map((key) => toScreamingSnakeCase(key)) as ScreamingSnakeCase<keyof typeof Title>[];

/**
 * Return true if the provided title contain at least one Martyr title
 * @param titles
 */
export const isMartyr = (titles: RomcalTitles): boolean => {
  return (
    titles.includes(Title.Martyr) ||
    titles.includes(Title.TheFirstMartyr) ||
    titles.includes(Title.ProtoMartyrOfOceania)
  );
};

/**
 *  Patron Titles of Saints and Blessed from the Martyrology catalog.
 */
export enum PatronTitle {
  CopatronOfEurope = 'COPATRON_OF_EUROPE',
  CopatronOfIreland = 'COPATRON_OF_IRELAND',
  CopatronOfCanada = 'COPATRON_OF_CANADA',
  CopatronessOfEurope = 'COPATRONESS_OF_EUROPE',
  CopatronessOfFrance = 'COPATRONESS_OF_FRANCE',
  CopatronessOfIreland = 'COPATRONESS_OF_IRELAND',
  CopatronessOfItalyAndEurope = 'COPATRONESS_OF_ITALY_AND_EUROPE',
  CopatronessOfThePhilippines = 'COPATRONESS_OF_THE_PHILIPPINES',
  PatronOfCanada = 'PATRON_OF_CANADA',
  PatronOfEngland = 'PATRON_OF_ENGLAND',
  PatronOfEurope = 'PATRON_OF_EUROPE',
  PatronOfFrance = 'PATRON_OF_FRANCE',
  PatronOfIreland = 'PATRON_OF_IRELAND',
  PatronOfItaly = 'PATRON_OF_ITALY',
  PatronOfOceania = 'PATRON_OF_OCEANIA',
  PatronOfPoland = 'PATRON_OF_POLAND',
  PatronOfRussia = 'PATRON_OF_RUSSIA',
  PatronOfScotland = 'PATRON_OF_SCOTLAND',
  PatronOfSpain = 'PATRON_OF_SPAIN',
  PatronOfTheCzechNation = 'PATRON_OF_THE_CZECH_NATION',
  PatronOfTheDiocese = 'PATRON_OF_THE_DIOCESE',
  PatronOfWales = 'PATRON_OF_WALES',
  PatronessOfAlsace = 'PATRONESS_OF_ALSACE',
  PatronessOfArgentina = 'PATRONESS_OF_ARGENTINA',
  PatronessOfBrazil = 'PATRONESS_OF_BRAZIL',
  PatronessOfHungary = 'PATRONESS_OF_HUNGARY',
  PatronessOfPuertoRico = 'PATRONESS_OF_PUERTO_RICO',
  PatronessOfSlovakia = 'PATRONESS_OF_SLOVAKIA',
  PatronessOfTheAmericas = 'PATRONESS_OF_THE_AMERICAS',
  PatronessOfThePhilippines = 'PATRONESS_OF_THE_PHILIPPINES',
  PatronessOfTheProvinceOfQuebec = 'PATRONESS_OF_THE_PROVINCE_OF_QUEBEC',
  PatronessOfTheUSA = 'PATRONESS_OF_THE_U_S_A',
  PatronOfTheClergyOfTheArchdioceseOfLyon = 'PATRON_OF_THE_CLERGY_OF_THE_ARCHDIOCESE_OF_LYON',
  PatronOfTheCityOfLyon = 'PATRON_OF_THE_CITY_OF_LYON',
  PatronessOfCostaRica = 'PATRONESS_OF_COSTA_RICA',
}

export const PATRON_TITLES = Object.keys(PatronTitle)
  .filter((key) => typeof PatronTitle[key as keyof typeof PatronTitle] === 'string')
  .map((key) => toScreamingSnakeCase(key)) as ScreamingSnakeCase<keyof typeof PatronTitle>[];

/**
 * Determine if a Saint or a Blessed is a male or a female.
 */
export enum Sexes {
  Male = 'MALE',
  Female = 'FEMALE',
}

export const SEXES = Object.keys(Sexes)
  .filter((key) => typeof Sexes[key as keyof typeof Sexes] === 'string')
  .map((key) => toScreamingSnakeCase(key)) as ScreamingSnakeCase<keyof typeof Sexes>[];

export type Sex = (typeof SEXES)[number];
