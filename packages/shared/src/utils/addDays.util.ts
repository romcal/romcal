export const addDays = (date: Date, days: number): Date => {
  return new Date(date.valueOf() + 864e5 * days); // 864e5 = 24 * 60 * 60 * 1000
};
