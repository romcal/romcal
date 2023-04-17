import { MonthIndex } from '../constants';

export const isMonthIndex = (input: number): input is MonthIndex => {
  return Number.isInteger(input) && input >= 1 && input <= 12;
};
