import { PROPER_OF_TIME_IDS, ProperOfTimeId } from '../constants';

export const isProperOfTimeId = (id: unknown): id is ProperOfTimeId => {
  return typeof id === 'string' && PROPER_OF_TIME_IDS.includes(id as ProperOfTimeId);
};
