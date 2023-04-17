import { subtractsDays } from './subtractsDays.util';

export const startOfWeek = (date: Date): Date => {
  return subtractsDays(date, date.getUTCDay());
};
