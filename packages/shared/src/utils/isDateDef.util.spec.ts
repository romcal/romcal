import {
  assertIsDateDef,
  isDateDef,
  isDateDefFn,
  isDateDefMonthDate,
  isDateDefMonthDowNthWeekInMonth,
  isDateDefMonthLastDowInMonth,
  isFirstSundayOfAdventDateFn,
} from './isDateDef.util';

describe('isDateDef', () => {
  it('should return true for a valid date definition', () => {
    const dateDef = {
      month: 4,
      day: 1,
    };
    const result = isDateDef(dateDef);
    expect(result).toBe(true);
  });

  it('should return false for an invalid date definition', () => {
    const dateDef = {
      month: 13,
      day: 32,
    };
    const result = isDateDef(dateDef);
    expect(result).toBe(false);
  });

  it('should return false for a date definition with missing properties', () => {
    const dateDef = {
      month: 4,
    };
    const result = isDateDef(dateDef);
    expect(result).toBe(false);
  });

  it('should return false for a date definition with invalid property types', () => {
    const dateDef = {
      month: 'April',
      day: '1',
    };
    const result = isDateDef(dateDef);
    expect(result).toBe(false);
  });
});

describe('assertIsDateDef', () => {
  it('should not throw an error for a valid date definition', () => {
    const dateDef = {
      month: 4,
      day: 1,
    };
    expect(() => assertIsDateDef(dateDef)).not.toThrow();
  });

  it('should throw an error for an invalid date definition', () => {
    const dateDef = {
      month: 13,
      day: 32,
    };
    expect(() => assertIsDateDef(dateDef)).toThrow();
  });
});

describe('isDateDefMonthDate', () => {
  it('should return true for a valid month date definition', () => {
    const dateDef = {
      month: 4,
      date: 1,
    };
    const result = isDateDefMonthDate(dateDef);
    expect(result).toBe(true);
  });

  it('should return false for an invalid month date definition', () => {
    const dateDef = {
      month: 13,
      date: 32,
    };
    const result = isDateDefMonthDate(dateDef);
    expect(result).toBe(false);
  });
});

describe('isDateDefFn', () => {
  it('should return true for a valid function date definition', () => {
    const dateDef = {
      yearOffset: 1,
      dayOffset: -1,
      properOfTime: 'properOfTime',
    };
    const properOfTimeDates = { properOfTime: {} };
    const result = isDateDefFn(dateDef, properOfTimeDates);
    expect(result).toBe(true);
  });

  it('should return false for an invalid function date definition', () => {
    const dateDef = {
      yearOffset: '1',
      dayOffset: -1,
      properOfTime: 'properOfTime',
    };
    const properOfTimeDates = { properOfTime: {} };
    const result = isDateDefFn(dateDef, properOfTimeDates);
    expect(result).toBe(false);
  });
});

describe('isDateDefMonthDowNthWeekInMonth', () => {
  it('should return true for a valid month dow nth week in month date definition', () => {
    const dateDef = {
      month: 4,
      dayOfWeek: 1,
      nthWeekInMonth: 1,
    };
    const result = isDateDefMonthDowNthWeekInMonth(dateDef);
    expect(result).toBe(true);
  });

  it('should return false for an invalid month dow nth week in month date definition', () => {
    const dateDef = {
      month: 13,
      dayOfWeek: 1,
      nthWeekInMonth: 1,
    };
    const result = isDateDefMonthDowNthWeekInMonth(dateDef);
    expect(result).toBe(false);
  });
});

describe('isDateDefMonthLastDowInMonth', () => {
  it('should return true for a valid month last dow in month date definition', () => {
    const dateDef = {
      month: 4,
      lastDayOfWeekInMonth: 1,
    };
    const result = isDateDefMonthLastDowInMonth(dateDef);
    expect(result).toBe(true);
  });

  it('should return false for an invalid month last dow in month date definition', () => {
    const dateDef = {
      month: 13,
      lastDayOfWeekInMonth: 1,
    };
    const result = isDateDefMonthLastDowInMonth(dateDef);
    expect(result).toBe(false);
  });
});

describe('isFirstSundayOfAdventDateFn', () => {
  it('should return true for a valid first Sunday of Advent date definition', () => {
    const dateDef = {
      firstSundayOfAdvent: true,
    };
    const result = isFirstSundayOfAdventDateFn(dateDef);
    expect(result).toBe(true);
  });

  it('should return false for an invalid first Sunday of Advent date definition', () => {
    const dateDef = {
      firstSundayOfAdvent: false,
    };
    const result = isFirstSundayOfAdventDateFn(dateDef);
    expect(result).toBe(false);
  });
});
