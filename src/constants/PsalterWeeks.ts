import { ElementType } from '../utils/helpers';

const PsalterWeeks = ['Week I', 'Week II', 'Week III', 'Week IV', 'Easter'] as const;

export type TPsalterWeeks = ElementType<typeof PsalterWeeks>;

export type TPsalterWeek = {
  key: number;
  value: TPsalterWeeks;
};

export default PsalterWeeks;
