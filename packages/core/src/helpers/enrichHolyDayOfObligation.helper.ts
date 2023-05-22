import { LiturgicalDayParams } from '../LiturgicalDay';

export const enrichHolyDayOfObligation = (params: LiturgicalDayParams): boolean => {
  const { dayDefinition, baseData, computedDate } = params;
  return (dayDefinition.dayOfWeek ?? computedDate.getUTCDay()) === 0
    ? true
    : !!(dayDefinition.isHolyDayOfObligation ?? baseData?.isHolyDayOfObligation);
};
