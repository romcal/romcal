export const getUtcDate = (year: number, month: number, date: number): Date => {
  return new Date(Date.UTC(year, month - 1, date, 0, 0, 0, 0));
};
