import { Color, isMartyr, Precedence, Rank } from '@romcal/shared';

import { LiturgicalDayParams } from '../LiturgicalDay';

/**
 * A cycle metadata object, based on the contextual liturgical day & year
 */
export const enrichColors = (params: LiturgicalDayParams): Color[] => {
  const { dayDefinition, weekday } = params;
  let colors: Color[] = dayDefinition.colors ?? [];

  // When no liturgical color is defined, check if the liturgical day definition contains a title of
  // a martyr.
  // If so, the liturgical color is red, otherwise, we apply the default color, which is white.
  if (colors.length === 0) {
    colors = dayDefinition.titles?.some((t) => isMartyr(t)) ? [Color.Red] : [Color.White];
  }

  /**
   * UNLY #16. Privileged weekdays takes precedences over memorials.
   * In this situation, we still can refer to the memorial, but the celebrated
   * mass must be the mass of the weekday, not the memorial.
   * In romcal, the liturgical colors are thus not indicated.
   *
   * UNLY #16 a.
   * Ash Wednesday and the weekdays of Holy Week, from Monday up to and including
   * Thursday, take precedence over all other celebrations.
   *
   * UNLY #16 b.
   * The weekdays of Advent from 17 December up to and including 24 December
   * and all the weekdays of Lent have precedence over Obligatory Memorials.
   */
  if (
    weekday?.precedence === Precedence.PrivilegedWeekday_9 &&
    dayDefinition.rank === Rank.Memorial
  ) {
    colors = [];
  }

  return colors;
};
