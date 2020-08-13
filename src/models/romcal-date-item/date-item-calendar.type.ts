export type RomcalDateItemCalendar = {
  totalWeeksInGregorianYear: number;
  totalWeeksInLiturgicalYear: number;
  weekOfGregorianYear: number;
  weekOfLiturgicalYear: number;
  weekOfSeason: number;
  dayOfGregorianYear: number;
  dayOfLiturgicalYear: number;
  dayOfSeason: number;
  dayOfWeek: number; // 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 is Sunday, 6 is Saturday
  dayOfWeekCountInMonth: number;
  startOfLiturgicalYear: Date | string;
  endOfLiturgicalYear: Date | string;
  easter: Date | string;
};
