/**
 * Canonization level of a person.
 */
import * as timers from 'timers';

export enum CanonizationLevel {
  Blessed = 'BLESSED',
  Saint = 'SAINT',
}

/**
 * Titles of Saints and Blessed from the Martyrology catalog.
 */
export enum Titles {
  'Abbess' = 'ABBESS',
  'Abbot' = 'ABBOT',
  'Apostle' = 'APOSTLE',
  'Archangel' = 'ARCHANGEL',
  'Bishop' = 'BISHOP',
  'Deacon' = 'DEACON',
  'DoctorOfTheChurch' = 'DOCTOR_OF_THE_CHURCH',
  'Evangelist' = 'EVANGELIST',
  'Hermit' = 'HERMIT',
  'Martyr' = 'MARTYR',
  'Missionary' = 'MISSIONARY',
  'Monk' = 'MONK',
  'MotherAndQueenOfChile' = 'MOTHER_AND_QUEEN_OF_CHILE',
  'ParentsOfTheBlessedVirginMary' = 'PARENTS_OF_THE_BLESSED_VIRGIN_MARY',
  'Pope' = 'POPE',
  'Priest' = 'PRIEST',
  'Prophet' = 'PROPHET',
  'ProtoMartyrOfOceania' = 'PROTO_MARTYR_OF_OCEANIA',
  'QueenOfPoland' = 'QUEEN_OF_POLAND',
  'Religious' = 'RELIGIOUS',
  'SlavicMissionary' = 'SLAVIC_MISSIONARY',
  'SpouseOfTheBlessedVirginMary' = 'SPOUSE_OF_THE_BLESSED_VIRGIN_MARY',
  'TheFirstMartyr' = 'THE_FIRST_MARTYR',
  'Virgin' = 'VIRGIN',
}

/**
 * Return true if the provided title contain at least one Martyr title
 * @param titles
 */
export const isMartyr = (titles: (Titles | PatronTitles)[]): boolean => {
  return (
    titles.includes(Titles.Martyr) ||
    titles.includes(Titles.TheFirstMartyr) ||
    titles.includes(Titles.ProtoMartyrOfOceania)
  );
};

/**
 *  Patron Titles of Saints and Blessed from the Martyrology catalog.
 */
export enum PatronTitles {
  'CopatronOfEurope' = 'COPATRON_OF_EUROPE',
  'CopatronOfIreland' = 'COPATRON_OF_IRELAND',
  'CopatronsOfCanada' = 'COPATRON_OF_CANADA',
  'CopatronessOfEurope' = 'COPATRONESS_OF_EUROPE',
  'CopatronessOfFrance' = 'COPATRONESS_OF_FRANCE',
  'CopatronessOfIreland' = 'COPATRONESS_OF_IRELAND',
  'CopatronessOfItalyAndEurope' = 'COPATRONESS_OF_ITALY_AND_EUROPE',
  'CopatronessOfThePhilippines' = 'COPATRONESS_OF_THE_PHILIPPINES',
  'PatronOfCanada' = 'PATRON_OF_CANADA',
  'PatronOfEngland' = 'PATRON_OF_ENGLAND',
  'PatronOfEurope' = 'PATRON_OF_EUROPE',
  'PatronOfIreland' = 'PATRON_OF_IRELAND',
  'PatronOfItaly' = 'PATRON_OF_ITALY',
  'PatronOfOceania' = 'PATRON_OF_OCEANIA',
  'PatronOfPoland' = 'PATRON_OF_POLAND',
  'PatronOfRussia' = 'PATRON_OF_RUSSIA',
  'PatronOfScotland' = 'PATRON_OF_SCOTLAND',
  'PatronOfSpain' = 'PATRON_OF_SPAIN',
  'PatronOfTheCzechNation' = 'PATRON_OF_THE_CZECH_NATION',
  'PatronOfWales' = 'PATRON_OF_WALES',
  'PatronessOfArgentina' = 'PATRONESS_OF_ARGENTINA',
  'PatronessOfBrazil' = 'PATRONESS_OF_BRAZIL',
  'PatronessOfHungary' = 'PATRONESS_OF_HUNGARY',
  'PatronessOfPuertoRico' = 'PATRONESS_OF_PUERTO_RICO',
  'PatronessOfSlovakia' = 'PATRONESS_OF_SLOVAKIA',
  'PatronessOfTheAmericas' = 'PATRONESS_OF_THE_AMERICAS',
  'PatronessOfThePhilippines' = 'PATRONESS_OF_THE_PHILIPPINES',
  'PatronessOfTheProvinceOfQuebec' = 'PATRONESS_OF_THE_PROVINCE_OF_QUEBEC',
  'PatronessOfTheUSA' = 'PATRONESS_OF_THE_USA',
}

/**
 * Determine if a Saint or a Blessed is a male or a female.
 */
export enum Sex {
  Male = 'MALE',
  Female = 'FEMALE',
}
