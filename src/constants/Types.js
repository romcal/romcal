/**
 * Extend Array to provide the rank types as properties (syntactic sugar)
 * Types[0] == Types.SOLEMNITY and so on
 * @extends Array
 */
class Types extends Array {
  constructor(...items) {
    // Initialize Array
    super(...items);

    // Iterate over all types and create dynamic read-only properties
    for (let key of this) {
      Object.defineProperty(this, key, {
        value: key,
        writable: false
      });
    }
  }
}

// Rank types of celebrations.
// Order is important:
// Higher rank first, lower rank at the end.
const TYPES = new Types(

  /**
   * @name Types#SOLEMNITY
   * @type string
   */
  "SOLEMNITY",

  /**
   * @name Types#SUNDAY
   * @type string
   */
  "SUNDAY",

  /**
   * @name Types#TRIDUUM
   * @type string
   */
  "TRIDUUM",

  /**
   * @name Types#HOLY_WEEK
   * @type string
   */
  "HOLY_WEEK",

  /**
   * @name Types#FEAST
   * @type string
   */
  "FEAST",

  /**
   * @name Types#MEMORIAL
   * @type string
   */
  "MEMORIAL",

  /**
   * @name Types#OPT_MEMORIAL
   * @type string
   */
  "OPT_MEMORIAL",

  /**
   * @name Types#COMMEMORATION
   * @type string
   */
  "COMMEMORATION",

  /**
   * @name Types#FERIA
   * @type string
   */
  "FERIA"
);

export default TYPES;
