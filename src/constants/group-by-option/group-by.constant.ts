/**
 * All the possible grouping variants that can be supported by romcal.
 */
export const GROUP_BY = [
  'date',
  'day',
  'month',
  'dayByMonth',
  'weekByMonth',
  'sundayCycle',
  'weekdayCycle',
  'rank',
  'liturgicalSeason',
  'liturgicalColor',
  'psalterWeek',
] as const;
