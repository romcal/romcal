import {
  ashWednesday,
  christmas,
  easterSunday,
  firstSundayOfAdvent,
  lunarNewYear,
  pentecostSunday,
  sundayOnOrAfterLunarNewYear,
} from './anchors';

const iso = (date: Date): string => date.toISOString().slice(0, 10);

describe('easterSunday', () => {
  it('computes the Gregorian date by default', () => {
    expect(iso(easterSunday(2024))).toEqual('2024-03-31');
    expect(iso(easterSunday(2025))).toEqual('2025-04-20');
  });

  it('computes the Julian date, expressed in the Gregorian calendar', () => {
    expect(iso(easterSunday(2024, 'julian'))).toEqual('2024-05-05');
  });

  it('returns a copy, so mutating the date does not poison later lookups', () => {
    const first = easterSunday(2024);
    first.setUTCDate(1);
    expect(iso(easterSunday(2024))).toEqual('2024-03-31');
  });
});

describe('anchors derived from Easter', () => {
  it('places Ash Wednesday 46 days before Easter', () => {
    expect(iso(ashWednesday(2025))).toEqual('2025-03-05');
  });

  it('places Pentecost 49 days after Easter', () => {
    expect(iso(pentecostSunday(2025))).toEqual('2025-06-08');
  });

  it('follows the calculation type it is given, rather than assuming Gregorian', () => {
    expect(iso(ashWednesday(2024, 'gregorian'))).toEqual('2024-02-14');
    expect(iso(ashWednesday(2024, 'julian'))).toEqual('2024-03-20');
  });
});

describe('firstSundayOfAdvent', () => {
  it('depends on the weekday Christmas falls on', () => {
    // Christmas 2022 was a Sunday, the earliest possible start.
    expect(iso(firstSundayOfAdvent(2022))).toEqual('2022-11-27');
    expect(iso(firstSundayOfAdvent(2025))).toEqual('2025-11-30');
  });
});

describe('christmas', () => {
  it('is always December 25', () => {
    expect(iso(christmas(2025))).toEqual('2025-12-25');
  });
});

describe('lunar new year', () => {
  it('locates the new year for the given UTC offset', () => {
    expect(iso(lunarNewYear(8, 2025))).toEqual('2025-01-29');
  });

  it('finds the Sunday on or after it', () => {
    expect(iso(sundayOnOrAfterLunarNewYear(8, 2025))).toEqual('2025-02-02');
  });
});
