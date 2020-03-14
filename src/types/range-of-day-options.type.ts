import dayjs from 'dayjs';

export type RangeOfDaysOptions = {
  step?: number;
  exclude?: Array<dayjs.Dayjs>;
};
