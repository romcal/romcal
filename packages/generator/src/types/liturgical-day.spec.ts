import { isLiturgicalDayProperOfTimeInput } from './liturgical-day';

describe('isLiturgicalDayProperOfTimeInput', () => {
  it('accepts an object that has its own periods property', () => {
    expect(isLiturgicalDayProperOfTimeInput({ periods: [] })).toBe(true);
    expect(isLiturgicalDayProperOfTimeInput({ periods: undefined })).toBe(true);
  });

  it('rejects an object without a periods property', () => {
    expect(isLiturgicalDayProperOfTimeInput({})).toBe(false);
    expect(isLiturgicalDayProperOfTimeInput({ colors: [] })).toBe(false);
  });

  it('rejects a periods property that is only inherited', () => {
    expect(isLiturgicalDayProperOfTimeInput(Object.create({ periods: [] }))).toBe(false);
  });

  it('rejects null without throwing', () => {
    expect(isLiturgicalDayProperOfTimeInput(null)).toBe(false);
  });

  it('rejects anything that is not an object', () => {
    expect(isLiturgicalDayProperOfTimeInput(undefined)).toBe(false);
    expect(isLiturgicalDayProperOfTimeInput('periods')).toBe(false);
    expect(isLiturgicalDayProperOfTimeInput(1)).toBe(false);
    expect(isLiturgicalDayProperOfTimeInput(true)).toBe(false);
  });
});
