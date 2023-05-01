import { CanonizationLevel, PatronTitle, Sex, Title } from '../constants';

/**
 * Martyrology item identifier.
 * @pattern ^[a-z\d]+(?:_[a-z\d]+)*$
 */
export type MartyrologyItemId = string;

export type MartyrologyMap = Record<MartyrologyItemId, MartyrologyItemDef>;

/**
 * A martyrology item definition.
 */
export type MartyrologyItem = {
  /**
   * Unique identifier of the martyrology item.
   */
  martyrologyId: MartyrologyItemId;

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
  titles?: RomcalTitle[];

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
   * Date of Death, as a Number (year), a String (in 'YYYY-MM' or 'YYYY-MM-DD' format),
   * or an object describing date range, multiple possible date, or a century.
   */
  dateOfDeath?: SaintDateDef;

  /**
   * Specify if an approximative indicator should be added, when the date is displayed.
   * For example in English: 'c. 201'.
   */
  dateOfDeathIsApproximative?: boolean;

  /**
   * Number of person that this definition represent.
   * It could be set as 'many' if the number is not defined.
   */
  count?: SaintCount;
};

export type MartyrologyItemDef = Omit<MartyrologyItem, 'martyrologyId'>;

export type SaintCount = number | 'many';

/**
 * Date string or integer, in the format of Y-M-D, or Y-M, or Y.
 * @pattern ^[1-9][0-9]{0,3}(-([1-9]|1[012])(-([1-9]|[12][0-9]|30|31))?)?$
 */
export type SaintDate = string | number;

export type SaintDateDef =
  | SaintDate
  | { between: [SaintDate, SaintDate] }
  | { or: SaintDate[] }
  | { century: number };

/**
 * The associated titles of a liturgical day.
 */
export type RomcalTitle = Title | PatronTitle;

export type TitlesDef =
  | RomcalTitle[]
  | {
      /**
       * Add title(s) to the end of the existing list of title(s).
       */
      append?: RomcalTitle[];

      /**
       * Add title(s) to the  beginning of the existing list of title(s).
       */
      prepend?: RomcalTitle[];
    };

/**
 * The associated martyrology item.
 */
export type MartyrologyItemPointer = MartyrologyItemId | MartyrologyItemRedefined;

/**
 * The associated martyrology item, with its overridden properties.
 */
export type MartyrologyItemRedefined = {
  /**
   * The ID of the martyrology item.
   */
  id: MartyrologyItemId;

  /**
   * The redefined titles of the martyrology item.
   */
  titles?: TitlesDef;

  /**
   * Specify if titles should not be displayed. This can occur when a title is already included in
   * the name of the martyrology item.
   * This does not apply to the titles defined in the `titles` property (only for localization purposes).
   */
  hideTitles?: boolean;

  /**
   * Specify the number of persons this martyrology item is representing.
   */
  count?: SaintCount;
};
