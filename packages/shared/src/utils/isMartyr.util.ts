import { MARTYR_TITLES, MartyrTitle } from '../constants';

export const isMartyr = (maybeTitle: unknown): maybeTitle is MartyrTitle => {
  return typeof maybeTitle === 'string' && MARTYR_TITLES.includes(maybeTitle as MartyrTitle);
};
