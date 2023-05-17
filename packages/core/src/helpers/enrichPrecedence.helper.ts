import { assertLiturgicalDayHasPrecedence, Precedence } from '@romcal/shared';

import { LiturgicalDayParams } from '../LiturgicalDay';

export const enrichPrecedence = (params: LiturgicalDayParams): Precedence => {
  const { dayDefinition, baseData } = params;
  const precedence = dayDefinition.precedence ?? baseData?.precedence;
  assertLiturgicalDayHasPrecedence(precedence, dayDefinition.liturgicalDayId);
  return precedence;
};
