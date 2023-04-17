import { rangeOfDays } from './rangeOfDays.util';

describe('rangeOfDays', () => {
  test('returns correct range of dates', () => {
    const start = new Date('2023-04-01');
    const end = new Date('2023-04-07');
    const expected = [
      new Date('2023-04-01'),
      new Date('2023-04-02'),
      new Date('2023-04-03'),
      new Date('2023-04-04'),
      new Date('2023-04-05'),
      new Date('2023-04-06'),
      new Date('2023-04-07'),
    ];
    expect(rangeOfDays(start, end)).toEqual(expected);
  });

  test('returns an array of a single date if start and end are the same', () => {
    const start = new Date('2023-04-01');
    const end = new Date('2023-04-01');
    const expected = [new Date('2023-04-01')];
    expect(rangeOfDays(start, end)).toEqual(expected);
  });

  test('returns an array of dates in descending order if start is after end', () => {
    const start = new Date('2023-04-05');
    const end = new Date('2023-04-01');
    const expected = [
      new Date('2023-04-05'),
      new Date('2023-04-04'),
      new Date('2023-04-03'),
      new Date('2023-04-02'),
      new Date('2023-04-01'),
    ];

    expect(rangeOfDays(start, end)).toEqual(expected);
  });
});
