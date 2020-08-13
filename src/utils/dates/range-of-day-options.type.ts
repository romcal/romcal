import dayjs from 'dayjs';

export type RomcalRangeOfDaysOptions = {
  step?: number;
  exclude?: Array<dayjs.Dayjs>;
};
