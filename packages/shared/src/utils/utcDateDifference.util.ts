export const dateDifference = (date1: Date, date2: Date, absolute = true): number => {
  const diff = Math.floor((date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24));
  return absolute ? Math.abs(diff) : diff;
};
