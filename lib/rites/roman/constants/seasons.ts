/**
 * Liturgical seasons are segments of time that when combined, form the liturgical year.
 * Liturgical seasons are distinguished by specific names that signify the character
 * of the season.
 */
export enum LiturgicalSeasons {
  ADVENT = 'ADVENT',
  CHRISTMAS_TIME = 'CHRISTMAS_TIME',
  LENT = 'LENT',
  PASCHAL_TRIDUUM = 'PASCHAL_TRIDUUM',
  EASTER_TIME = 'EASTER_TIME',
  ORDINARY_TIME = 'ORDINARY_TIME',
}

/**
 * A dynamically generated constant consisting of all the enum keys in [[LITURGICAL_SEASONS]]
 */
export const LITURGICAL_SEASONS = Object.keys(LiturgicalSeasons).filter(
  (key) =>
    typeof LiturgicalSeasons[key as keyof typeof LiturgicalSeasons] ===
    'string',
) as Array<keyof typeof LiturgicalSeasons>;

export type LiturgicalSeason = typeof LITURGICAL_SEASONS[number];
