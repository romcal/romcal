export const WEEKDAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'] as const;

export type Weekday = (typeof WEEKDAYS)[number];

export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;
