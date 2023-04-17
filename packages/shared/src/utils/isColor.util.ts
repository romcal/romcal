import { Color } from '../constants';

export const isColor = (maybeColor: unknown): maybeColor is Color => {
  return typeof maybeColor === 'string' && Object.values(Color).includes(maybeColor as Color);
};
