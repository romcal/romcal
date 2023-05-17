import { assertLiturgicalDayHasPrecedence, Rank, RanksFromPrecedence } from '@romcal/shared';

import { LiturgicalDayParams } from '../LiturgicalDay';

export const enrichRank = (params: LiturgicalDayParams): Rank => {
  const { dayDefinition, baseData } = params;
  const precedence = dayDefinition.precedence ?? baseData?.precedence;
  assertLiturgicalDayHasPrecedence(precedence, dayDefinition.liturgicalDayId);
  return RanksFromPrecedence[precedence];
};
