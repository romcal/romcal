export const utcDateToDateString = (date: Date): string => {
  return date.toISOString().substring(0, 10);
};
