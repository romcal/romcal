import { ScreamingSnakeCase } from '../types/common';
import { toScreamingSnakeCase } from '../utils/string';

/**
 * Liturgical seasons are segments of time that when combined, form the liturgical year.
 * Liturgical seasons are distinguished by specific names that signify the character
 * of the season.
 */
export enum Seasons {
  Advent = 'ADVENT',
  ChristmasTime = 'CHRISTMAS_TIME',
  Lent = 'LENT',
  PaschalTriduum = 'PASCHAL_TRIDUUM',
  EasterTime = 'EASTER_TIME',
  OrdinaryTime = 'ORDINARY_TIME',
}

/**
 * A dynamically generated constant consisting of all the enum IDs in [[LITURGICAL_SEASONS]]
 */
export const SEASONS = Object.keys(Seasons)
  .filter((id) => typeof Seasons[id as keyof typeof Seasons] === 'string')
  .map((id) => toScreamingSnakeCase(id)) as ScreamingSnakeCase<keyof typeof Seasons>[];

export type Season = typeof SEASONS[number];
