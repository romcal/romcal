export const isSameDate = (date1: Date, date2: Date): boolean => {
  return !!(
    date1 &&
    date2 &&
    date1.getUTCFullYear() === date2.getUTCFullYear() &&
    date1.getUTCMonth() === date2.getUTCMonth() &&
    date1.getUTCDate() === date2.getUTCDate()
  );
};
