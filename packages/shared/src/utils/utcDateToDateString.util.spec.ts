import { utcDateToDateString } from './dateToDateString.util';

describe('dateToDateString', () => {
  it('returns a string in the format yyyy-mm-dd', () => {
    const date = new Date(Date.UTC(2022, 0, 1));
    const dateString = utcDateToDateString(date);
    expect(dateString).toEqual('2022-01-01');
  });
});
