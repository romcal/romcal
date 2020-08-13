import { Titles } from '@romcal/constants/titles/titles.enum';

/**
 * A dynamically generated constant consisting of all the enum keys in [[RANKS]]
 */
export const TITLES = Object.keys(Titles).filter(
  (key) => typeof Titles[key as keyof typeof Titles] === 'string',
) as Array<keyof typeof Titles>;
