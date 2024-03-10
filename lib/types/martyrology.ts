import { CanonizationLevel, Sex } from '../constants/martyrology-metadata';

import { RomcalTitles } from './liturgical-day';

export type MartyrologyDef = {
  /**
   * The canonization level of a person.
   */
  canonizationLevel?: CanonizationLevel;

  /**
   * Specify if the canonization level should not be displayed.
   * It's generally the case when the canonization are already included in the name.
   */
  hideCanonizationLevel?: boolean;

  /**
   * Temporarily property.
   * The content of this property will be move to the corresponding locale file.
   * @deprecated
   */
  name?: string;

  /**
   * Titles of the Saint or the Blessed
   */
  titles?: RomcalTitles;

  /**
   * Determine if the Saint or the Blessed is a male or a female.
   */
  sex?: Sex;

  /**
   * Specify if the titles should not be displayed.
   * It's generally the case when titles are already included in the name.
   */
  hideTitles?: boolean;

  /**
   * Date of Birth, as a Number (year), a String (in 'YYYY-MM' or 'YYYY-MM-DD' format),
   * or an object describing date range, multiple possible date, or a century.
   */
  dateOfBirth?: SaintDateDef;

  /**
   * Specify whether an approximate indicator should be added, when the date is displayed.
   * For example in English: 'c. 201'.
   */
  dateOfBirthIsApproximative?: boolean;

  /**
   * Date of Death, as a Number (year), a String (in 'YYYY-MM' or 'YYYY-MM-DD' format),
   * or an object describing date range, multiple possible date, or a century.
   */
  dateOfDeath?: SaintDateDef;

  /**
   * Specify whether an approximate indicator should be added, when the date is displayed.
   * For example in English: 'c. 201'.
   */
  dateOfDeathIsApproximative?: boolean;

  /**
   * Number of person that this definition represent.
   * It could be set as 'many' if the number is not defined.
   */
  count?: SaintCount;
};

export type SaintCount = number | 'many';
export type SaintDate = number | string;
export type SaintDateDef = SaintDate | { between: [SaintDate, SaintDate] } | { or: SaintDate[] } | { century: number };
export type MartyrologyCatalog = Record<string, MartyrologyDef>;
export type MartyrologyItem = { id: string } & MartyrologyDef;
