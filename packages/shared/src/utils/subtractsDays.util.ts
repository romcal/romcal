export const subtractsDays = (date: Date, days: number): Date => {
  return new Date(date.valueOf() - 864e5 * days);
};
