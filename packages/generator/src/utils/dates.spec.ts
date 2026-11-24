import * as anchors from '@internal/calendar-dates';

import { Season } from '../constants/seasons';

import * as datesModule from './dates';
import { Dates, daysInMonth } from './dates';

// Loose local types keep the spec independent of the full Vocabulary generics.
type Loose = Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

const makeConfig = (extra: Loose = {}): Loose => ({
  ascensionOnSunday: false,
  corpusChristiOnSunday: false,
  easterCalculationType: 'gregorian',
  epiphanyOnSunday: true,
  scope: 'gregorian',
  temporalOverrides: undefined,
  ...extra,
});

const datesOf = (year: number, config: Loose = makeConfig()): Dates => new Dates(config as never, year);

const iso = (date: Date | null): string | null => (date ? date.toISOString().slice(0, 10) : null);

const isos = (dates: Date[]): string[] => dates.map((d) => iso(d) as string);

const YEARS = Array.from({ length: 31 }, (_, i) => 2010 + i);

describe('daysInMonth', () => {
  it('returns the correct number of days in the month of a given date', () => {
    expect(daysInMonth(new Date('2023-02-15T00:00:00Z'))).toBe(28);
    expect(daysInMonth(new Date('2024-02-15T00:00:00Z'))).toBe(29);
    expect(daysInMonth(new Date('2023-05-15T00:00:00Z'))).toBe(31);
    expect(daysInMonth(new Date('2023-06-15T00:00:00Z'))).toBe(30);
  });
});

describe('re-exports of the calendar dates package', () => {
  it('re-exports the date arithmetic that the rite imports from this path', () => {
    for (const name of [
      'addDays',
      'dateDifference',
      'daysInMonth',
      'getUtcDate',
      'getUtcDateFromString',
      'getWeekNumber',
      'isSameDate',
      'isValidDate',
      'rangeContainsDate',
      'rangeOfDays',
      'startOfWeek',
      'subtractsDays',
    ]) {
      expect(datesModule[name as keyof typeof datesModule]).toBe(anchors[name as keyof typeof anchors]);
    }
  });

  it('exposes the anchors that do not depend on a configuration as static members', () => {
    expect(Dates.firstSundayOfAdvent).toBe(anchors.firstSundayOfAdvent);
    expect(Dates.christmas).toBe(anchors.christmas);
    expect(Dates.lunarNewYear).toBe(anchors.lunarNewYear);
    expect(Dates.sundayOnOrAfterLunarNewYear).toBe(anchors.sundayOnOrAfterLunarNewYear);
  });
});

describe('Dates', () => {
  describe('the movable dates of 2025', () => {
    const dates = datesOf(2025);

    it('computes Lent, Holy Week and the Triduum', () => {
      expect(iso(dates.ashWednesday())).toBe('2025-03-05');
      expect(isos(dates.allSundaysOfLent())).toEqual([
        '2025-03-09',
        '2025-03-16',
        '2025-03-23',
        '2025-03-30',
        '2025-04-06',
        '2025-04-13',
      ]);
      expect(iso(dates.allDatesOfLent()[0])).toBe('2025-03-05');
      expect(iso(dates.allDatesOfLent().at(-1) as Date)).toBe('2025-04-17');
      expect(iso(dates.palmSunday())).toBe('2025-04-13');
      expect(iso(dates.holyThursday())).toBe('2025-04-17');
      expect(iso(dates.goodFriday())).toBe('2025-04-18');
      expect(iso(dates.holySaturday())).toBe('2025-04-19');
      expect(isos(dates.allDatesOfHolyWeek())).toEqual([
        '2025-04-13',
        '2025-04-14',
        '2025-04-15',
        '2025-04-16',
        '2025-04-17',
        '2025-04-18',
        '2025-04-19',
      ]);
      expect(isos(dates.allDatesOfPaschalTriduum())).toEqual(['2025-04-17', '2025-04-18', '2025-04-19', '2025-04-20']);
    });

    it('computes Easter Time', () => {
      expect(iso(dates.easterSunday())).toBe('2025-04-20');
      expect(iso(dates.divineMercySunday())).toBe('2025-04-27');
      expect(isos(dates.allDatesInOctaveOfEaster())).toHaveLength(8);
      expect(isos(dates.allSundaysOfEaster())).toEqual([
        '2025-04-20',
        '2025-04-27',
        '2025-05-04',
        '2025-05-11',
        '2025-05-18',
        '2025-05-25',
        '2025-06-01',
        '2025-06-08',
      ]);
      expect(iso(dates.pentecostSunday())).toBe('2025-06-08');
      expect(iso(dates.allDatesOfEasterTime()[0])).toBe('2025-04-20');
      expect(iso(dates.allDatesOfEasterTime().at(-1) as Date)).toBe('2025-06-08');
    });

    it('computes the solemnities and feasts that follow Easter', () => {
      expect(iso(dates.ascension())).toBe('2025-05-29');
      expect(iso(dates.ascension(2025, true))).toBe('2025-06-01');
      expect(iso(dates.maryMotherOfTheChurch())).toBe('2025-06-09');
      expect(iso(dates.trinitySunday())).toBe('2025-06-15');
      expect(iso(dates.corpusChristi())).toBe('2025-06-19');
      expect(iso(dates.corpusChristi(2025, true))).toBe('2025-06-22');
      expect(iso(dates.mostSacredHeartOfJesus())).toBe('2025-06-27');
      expect(iso(dates.immaculateHeartOfMary())).toBe('2025-06-28');
    });

    it('takes the Ascension and Corpus Christi days from the configuration', () => {
      const onSunday = datesOf(2025, makeConfig({ ascensionOnSunday: true, corpusChristiOnSunday: true }));

      expect(iso(onSunday.ascension())).toBe('2025-06-01');
      expect(iso(onSunday.corpusChristi())).toBe('2025-06-22');
      expect(iso(onSunday.ascension(2025, false))).toBe('2025-05-29');
      expect(iso(onSunday.corpusChristi(2025, false))).toBe('2025-06-19');
    });

    it('computes Advent and Christmas Time', () => {
      expect(iso(dates.firstSundayOfAdvent())).toBe('2025-11-30');
      expect(iso(dates.christTheKingSunday())).toBe('2025-11-23');
      expect(iso(dates.christmas())).toBe('2025-12-25');
      expect(iso(dates.holyFamily())).toBe('2025-12-28');
      expect(iso(dates.maryMotherOfGod())).toBe('2025-01-01');
      expect(iso(datesOf(2022).holyFamily())).toBe('2022-12-30');
    });

    it('computes the seasons boundaries', () => {
      const start = dates.startOfSeasons();
      const end = dates.endOfSeasons();

      expect(iso(start[Season.Advent])).toBe('2024-12-01');
      expect(iso(start[Season.ChristmasTime])).toBe('2024-12-25');
      expect(iso(start[Season.OrdinaryTime])).toBe('2025-01-13');
      expect(iso(start[Season.Lent])).toBe('2025-03-05');
      expect(iso(start[Season.PaschalTriduum])).toBe('2025-04-17');
      expect(iso(start[Season.EasterTime])).toBe('2025-04-20');
      expect(iso(end[Season.Advent])).toBe('2024-12-24');
      expect(iso(end[Season.ChristmasTime])).toBe('2025-01-12');
      expect(iso(end[Season.Lent])).toBe('2025-04-17');
      expect(iso(end[Season.PaschalTriduum])).toBe('2025-04-20');
      expect(iso(end[Season.EasterTime])).toBe('2025-06-08');
      expect(iso(end[Season.OrdinaryTime])).toBe('2025-11-29');
    });

    it('computes the lunar new year anchors through the instance', () => {
      expect(dates.lunarNewYear(8)).toEqual(Dates.lunarNewYear(8, 2025));
      expect(dates.lunarNewYear(8, 2024)).toEqual(Dates.lunarNewYear(8, 2024));
      expect(dates.sundayOnOrAfterLunarNewYear(8)).toEqual(Dates.sundayOnOrAfterLunarNewYear(8, 2025));
      expect(dates.sundayOnOrAfterLunarNewYear(9, 2024)).toEqual(Dates.sundayOnOrAfterLunarNewYear(9, 2024));
    });

    it('uses the configured Easter calculation, unless one is given', () => {
      const julian = datesOf(2024, makeConfig({ easterCalculationType: 'julian' }));
      const gregorian = datesOf(2024);

      expect(julian.easterSunday()).toEqual(gregorian.easterSunday(2024, 'julian'));
      expect(julian.easterSunday()).not.toEqual(gregorian.easterSunday());
      expect(julian.easterSunday(2024, 'gregorian')).toEqual(gregorian.easterSunday());
      expect(julian.ashWednesday()).not.toEqual(gregorian.ashWednesday());
    });
  });

  describe('caching', () => {
    it('returns the very same value on a second call, for every cached date', () => {
      const dates = datesOf(2025);
      const calls: Array<() => unknown> = [
        () => dates.allDatesOfAdvent(),
        () => dates.allSundaysOfAdvent(),
        () => dates.firstSundayOfAdvent(),
        () => dates.unprivilegedWeekdayOfAdvent(1, 1),
        () => dates.privilegedWeekdayOfAdvent(18),
        () => dates.sundayOfAdvent(2),
        () => dates.christmas(),
        () => dates.allDatesInOctaveOfChristmas(),
        () => dates.weekdayWithinOctaveOfChristmas(2),
        () => dates.allDatesOfChristmasTime(),
        () => dates.secondSundayAfterChristmas(),
        () => dates.allDatesBeforeEpiphany(),
        () => dates.weekdayBeforeEpiphany(2),
        () => dates.epiphany(),
        () => dates.allDatesAfterEpiphany(),
        () => dates.weekdayAfterEpiphany(2),
        () => dates.ashWednesday(),
        () => dates.allSundaysOfLent(),
        () => dates.allDatesOfLent(),
        () => dates.palmSunday(),
        () => dates.holyThursday(),
        () => dates.goodFriday(),
        () => dates.holySaturday(),
        () => dates.allDatesOfHolyWeek(),
        () => dates.allDatesOfPaschalTriduum(),
        () => dates.allDatesInOctaveOfEaster(),
        () => dates.allSundaysOfEaster(),
        () => dates.weekdayOrSundayOfEasterTime(1, 2),
        () => dates.allDatesOfEasterTime(),
        () => dates.divineMercySunday(),
        () => dates.pentecostSunday(),
        () => dates.allDatesOfOrdinaryTime(),
        () => dates.allDatesOfEarlyOrdinaryTime(),
        () => dates.sundaysOfEarlyOrdinaryTime(),
        () => dates.allDatesOfLateOrdinaryTime(),
        () => dates.allSundaysOfLateOrdinaryTime(),
        () => dates.christTheKingSunday(),
        () => dates.dateOfOrdinaryTime(1, 2),
        () => dates.maryMotherOfGod(),
        () => dates.ascension(),
        () => dates.maryMotherOfTheChurch(),
        () => dates.trinitySunday(),
        () => dates.corpusChristi(),
        () => dates.mostSacredHeartOfJesus(),
        () => dates.immaculateHeartOfMary(),
        () => dates.holyFamily(),
        () => dates.baptismOfTheLord(),
        () => dates.lunarNewYear(8),
        () => dates.sundayOnOrAfterLunarNewYear(8),
        () => dates.startOfSeasons(),
        () => dates.endOfSeasons(),
      ];

      for (const call of calls) {
        const first = call();
        expect(first).toBeDefined();
        expect(call()).toBe(first);
      }
    });

    it('caches a null result as well', () => {
      const dates = datesOf(2025);

      expect(dates.sundayOfAdvent(9)).toBeNull();
      expect(dates.sundayOfAdvent(9)).toBeNull();
      expect(dates.privilegedWeekdayOfAdvent(30)).toBeNull();
      expect(dates.privilegedWeekdayOfAdvent(30)).toBeNull();
    });
  });

  describe('default years', () => {
    const noArgument: Array<keyof Dates> = [
      'allDatesOfAdvent',
      'allSundaysOfAdvent',
      'firstSundayOfAdvent',
      'christmas',
      'allDatesInOctaveOfChristmas',
      'allDatesOfChristmasTime',
      'holyFamily',
    ];

    it('looks at the previous Gregorian year in the liturgical scope for the days that open the year', () => {
      const liturgical = datesOf(2026, makeConfig({ scope: 'liturgical' }));
      const reference = datesOf(2026);

      for (const name of noArgument) {
        const method = (d: Dates) => (d[name] as (year?: number) => unknown).bind(d);
        expect(method(liturgical)()).toEqual(method(reference)(2025));
      }
      expect(liturgical.unprivilegedWeekdayOfAdvent(1, 1)).toEqual(reference.unprivilegedWeekdayOfAdvent(1, 1, 2025));
      expect(liturgical.privilegedWeekdayOfAdvent(18)).toEqual(reference.privilegedWeekdayOfAdvent(18, 2025));
      expect(liturgical.sundayOfAdvent(2)).toEqual(reference.sundayOfAdvent(2, 2025));
      expect(liturgical.weekdayWithinOctaveOfChristmas(2)).toEqual(reference.weekdayWithinOctaveOfChristmas(2, 2025));
    });

    it('looks at the same Gregorian year in the Gregorian scope', () => {
      const dates = datesOf(2026);

      for (const name of noArgument) {
        const method = (dates[name] as (year?: number) => unknown).bind(dates);
        expect(method()).toEqual(method(2026));
      }
      expect(dates.unprivilegedWeekdayOfAdvent(1, 1)).toEqual(dates.unprivilegedWeekdayOfAdvent(1, 1, 2026));
      expect(dates.privilegedWeekdayOfAdvent(18)).toEqual(dates.privilegedWeekdayOfAdvent(18, 2026));
      expect(dates.sundayOfAdvent(2)).toEqual(dates.sundayOfAdvent(2, 2026));
      expect(dates.weekdayWithinOctaveOfChristmas(2)).toEqual(dates.weekdayWithinOctaveOfChristmas(2, 2026));
    });

    it('uses the year of the instance for every other date', () => {
      const dates = datesOf(2026);
      const other = datesOf(2026);
      const names: Array<keyof Dates> = [
        'secondSundayAfterChristmas',
        'allDatesBeforeEpiphany',
        'epiphany',
        'allDatesAfterEpiphany',
        'ashWednesday',
        'allSundaysOfLent',
        'allDatesOfLent',
        'palmSunday',
        'holyThursday',
        'goodFriday',
        'holySaturday',
        'allDatesOfHolyWeek',
        'allDatesOfPaschalTriduum',
        'easterSunday',
        'allDatesInOctaveOfEaster',
        'allSundaysOfEaster',
        'allDatesOfEasterTime',
        'divineMercySunday',
        'pentecostSunday',
        'allDatesOfOrdinaryTime',
        'allDatesOfEarlyOrdinaryTime',
        'sundaysOfEarlyOrdinaryTime',
        'allDatesOfLateOrdinaryTime',
        'allSundaysOfLateOrdinaryTime',
        'christTheKingSunday',
        'maryMotherOfGod',
        'ascension',
        'maryMotherOfTheChurch',
        'trinitySunday',
        'corpusChristi',
        'mostSacredHeartOfJesus',
        'immaculateHeartOfMary',
        'baptismOfTheLord',
        'startOfSeasons',
        'endOfSeasons',
      ];

      for (const name of names) {
        expect((dates[name] as () => unknown)()).toEqual((other[name] as (year: number) => unknown)(2026));
      }
      expect(dates.weekdayBeforeEpiphany(3)).toEqual(other.weekdayBeforeEpiphany(3, 2026));
      expect(dates.weekdayAfterEpiphany(3)).toEqual(other.weekdayAfterEpiphany(3, 2026));
      expect(dates.weekdayOrSundayOfEasterTime(1, 2)).toEqual(other.weekdayOrSundayOfEasterTime(1, 2, 2026));
      expect(dates.dateOfOrdinaryTime(1, 2)).toEqual(other.dateOfOrdinaryTime(1, 2, 2026));
    });
  });

  describe('Advent', () => {
    it.each(YEARS)('spans from the first Sunday of Advent to 24 December in %i', (year) => {
      const dates = datesOf(year);
      const all = dates.allDatesOfAdvent(year);

      expect(all[0].getUTCDay()).toBe(0);
      expect(iso(all.at(-1) as Date)).toBe(`${year}-12-24`);
      expect(all.length).toBeGreaterThanOrEqual(22);
      expect(all.length).toBeLessThanOrEqual(28);
      expect(dates.allSundaysOfAdvent(year).map((d) => d.getUTCDay())).toEqual([0, 0, 0, 0]);
      expect(dates.allSundaysOfAdvent(year)[0]).toEqual(all[0]);
    });

    it('defines the Sundays of Advent from 1 to 4 only', () => {
      const dates = datesOf(2025);

      expect(iso(dates.sundayOfAdvent(1, 2025))).toBe('2025-11-30');
      expect(iso(dates.sundayOfAdvent(4, 2025))).toBe('2025-12-21');
      expect(dates.sundayOfAdvent(0, 2025)).toBeNull();
      expect(dates.sundayOfAdvent(5, 2025)).toBeNull();
    });

    it('defines the unprivileged weekdays until 16 December only', () => {
      const dates = datesOf(2025);

      expect(iso(dates.unprivilegedWeekdayOfAdvent(1, 1, 2025))).toBe('2025-12-01');
      expect(iso(dates.unprivilegedWeekdayOfAdvent(6, 2, 2025))).toBe('2025-12-13');
      expect(iso(dates.unprivilegedWeekdayOfAdvent(2, 3, 2025))).toBe('2025-12-16');
      expect(dates.unprivilegedWeekdayOfAdvent(3, 3, 2025)).toBeNull();
      expect(dates.unprivilegedWeekdayOfAdvent(1, 4, 2025)).toBeNull();
      expect(dates.unprivilegedWeekdayOfAdvent(0, 1, 2025)).toBeNull();
      expect(dates.unprivilegedWeekdayOfAdvent(7, 1, 2025)).toBeNull();
      expect(dates.unprivilegedWeekdayOfAdvent(1, 0, 2025)).toBeNull();
      expect(dates.unprivilegedWeekdayOfAdvent(1, 5, 2025)).toBeNull();
    });

    it('defines the privileged weekdays from 17 to 24 December, Sundays excluded', () => {
      const dates = datesOf(2025);

      expect(iso(dates.privilegedWeekdayOfAdvent(17, 2025))).toBe('2025-12-17');
      expect(dates.privilegedWeekdayOfAdvent(21, 2025)).toBeNull();
      expect(iso(dates.privilegedWeekdayOfAdvent(24, 2025))).toBe('2025-12-24');
      expect(dates.privilegedWeekdayOfAdvent(16, 2025)).toBeNull();
      expect(dates.privilegedWeekdayOfAdvent(25, 2025)).toBeNull();
    });
  });

  describe('the octave of Christmas', () => {
    it.each(YEARS)('runs from Christmas to Mary Mother of God in %i', (year) => {
      const dates = datesOf(year);
      const octave = dates.allDatesInOctaveOfChristmas(year);

      expect(octave).toHaveLength(8);
      expect(iso(octave[0])).toBe(`${year}-12-25`);
      expect(iso(octave[7])).toBe(`${year + 1}-01-01`);
    });

    it('excludes the Holy Family from the weekdays of the octave', () => {
      const dates = datesOf(2025);

      expect(iso(dates.weekdayWithinOctaveOfChristmas(1, 2025))).toBe('2025-12-25');
      expect(dates.weekdayWithinOctaveOfChristmas(4, 2025)).toBeNull();
      expect(iso(dates.weekdayWithinOctaveOfChristmas(8, 2025))).toBe('2026-01-01');
      expect(dates.weekdayWithinOctaveOfChristmas(0, 2025)).toBeNull();
      expect(dates.weekdayWithinOctaveOfChristmas(9, 2025)).toBeNull();
    });

    it.each(YEARS)('ends Christmas Time with the Baptism of the Lord in %i', (year) => {
      const dates = datesOf(year);
      const christmasTime = dates.allDatesOfChristmasTime(year);

      expect(iso(christmasTime[0])).toBe(`${year}-12-25`);
      expect(christmasTime.at(-1)).toEqual(dates.baptismOfTheLord(year + 1));
      expect(dates.allDatesOfChristmasTime(year, false).at(-1)).toEqual(dates.baptismOfTheLord(year + 1, false));
    });
  });

  describe('Epiphany', () => {
    it.each([
      [2022, '2022-01-02', '2022-01-09'],
      [2023, '2023-01-08', '2023-01-09'],
      [2024, '2024-01-07', '2024-01-08'],
      [2025, '2025-01-05', '2025-01-12'],
      [2026, '2026-01-04', '2026-01-11'],
    ])('falls on the Sunday between 2 and 8 January in %i when it follows the Sunday rule', (year, epiphany, baptism) => {
      const dates = datesOf(year);

      expect(iso(dates.epiphany(year, true))).toBe(epiphany);
      expect(iso(dates.baptismOfTheLord(year, true))).toBe(baptism);
      expect(iso(dates.epiphany())).toBe(epiphany);
    });

    it.each(YEARS)('falls on 6 January in %i when it does not follow the Sunday rule', (year) => {
      const dates = datesOf(year, makeConfig({ epiphanyOnSunday: false }));
      const baptism = dates.baptismOfTheLord(year);

      expect(iso(dates.epiphany())).toBe(`${year}-01-06`);
      expect(baptism.getUTCDay()).toBe(0);
      expect(baptism.getTime()).toBeGreaterThan(dates.epiphany().getTime());
      expect(dates.epiphany(year, true).getUTCDay()).toBe(0);
    });

    it('lists the days before and after Epiphany, which are empty when Epiphany is adjacent', () => {
      const sunday = datesOf(2025);

      expect(isos(sunday.allDatesBeforeEpiphany(2025, true))).toEqual(['2025-01-02', '2025-01-03', '2025-01-04']);
      expect(isos(sunday.allDatesAfterEpiphany(2025, true))).toEqual([
        '2025-01-06',
        '2025-01-07',
        '2025-01-08',
        '2025-01-09',
        '2025-01-10',
        '2025-01-11',
      ]);
      expect(isos(sunday.allDatesBeforeEpiphany(2025, false))).toEqual([
        '2025-01-02',
        '2025-01-03',
        '2025-01-04',
        '2025-01-05',
      ]);
      expect(isos(sunday.allDatesAfterEpiphany(2025, false))).toEqual([
        '2025-01-07',
        '2025-01-08',
        '2025-01-09',
        '2025-01-10',
        '2025-01-11',
      ]);
      expect(datesOf(2023).allDatesAfterEpiphany(2023, true)).toEqual([]);
      expect(datesOf(2023).allDatesBeforeEpiphany(2023, true)).toHaveLength(6);
      expect(datesOf(2023).weekdayAfterEpiphany(2, 2023, true)).toBeNull();
      expect(datesOf(2022).allDatesBeforeEpiphany(2022, true)).toEqual([]);
    });

    it('locates a weekday before or after Epiphany, or reports none', () => {
      const dates = datesOf(2025);

      expect(iso(dates.weekdayBeforeEpiphany(2, 2025, false))).toBe('2025-01-02');
      expect(dates.weekdayBeforeEpiphany(6, 2025, false)).toBeNull();
      expect(dates.weekdayBeforeEpiphany(1, 2025, false)).toBeNull();
      expect(dates.weekdayBeforeEpiphany(9, 2025, false)).toBeNull();
      expect(iso(dates.weekdayAfterEpiphany(2, 2025, false))).toBe('2025-01-07');
      expect(dates.weekdayAfterEpiphany(0, 2025, false)).toBeNull();
      expect(dates.weekdayAfterEpiphany(7, 2025, false)).toBeNull();
      expect(iso(datesOf(2025, makeConfig({ epiphanyOnSunday: false })).weekdayAfterEpiphany(2, 2025))).toBe(
        '2025-01-07'
      );
    });

    it('has a second Sunday after Christmas only when Epiphany is on 6 January', () => {
      const dates = datesOf(2025);

      expect(dates.secondSundayAfterChristmas(2025, true)).toBeNull();
      expect(dates.secondSundayAfterChristmas()).toBeNull();
      expect(iso(dates.secondSundayAfterChristmas(2025, false))).toBe('2025-01-05');
      expect(iso(datesOf(2022).secondSundayAfterChristmas(2022, false))).toBe('2022-01-02');
      expect(datesOf(2023).secondSundayAfterChristmas(2023, false)).toBeNull();
      expect(datesOf(2024).secondSundayAfterChristmas(2024, false)).toBeNull();
      expect(datesOf(2019).secondSundayAfterChristmas(2019, false)).toBeNull();
    });

    it('keeps its cache apart for each Epiphany mode', () => {
      const dates = datesOf(2025);

      expect(iso(dates.epiphany(2025, true))).toBe('2025-01-05');
      expect(iso(dates.epiphany(2025, false))).toBe('2025-01-06');
      expect(iso(dates.epiphany(2025))).toBe('2025-01-05');
    });
  });

  describe('anchor exceptions', () => {
    const override = (...exceptions: Loose[]) => ({ anchorExceptions: { epiphany: exceptions } });
    const monday = { then: { transferTo: 'sunday' }, when: { dayOfWeek: 'monday' } };
    const thursday = { then: { transferTo: 'sunday' }, when: { dayOfWeek: 'thursday' } };
    const withOverrides = (year: number, temporalOverrides: unknown) =>
      datesOf(year, makeConfig({ epiphanyOnSunday: false, temporalOverrides }));

    it('moves Epiphany back to the previous Sunday when that Sunday is nearer', () => {
      // 6 January 2025 is a Monday.
      expect(iso(withOverrides(2025, override(monday)).epiphany())).toBe('2025-01-05');
    });

    it('moves Epiphany forward to the next Sunday when that Sunday is nearer', () => {
      // 6 January 2028 is a Thursday.
      expect(iso(withOverrides(2028, override(thursday)).epiphany())).toBe('2028-01-09');
    });

    it('leaves Epiphany alone when no exception matches its weekday', () => {
      expect(iso(withOverrides(2025, override(thursday)).epiphany())).toBe('2025-01-06');
    });

    it('leaves Epiphany alone when the overrides define no Epiphany exception', () => {
      expect(iso(withOverrides(2025, { anchorExceptions: {} }).epiphany())).toBe('2025-01-06');
      expect(iso(withOverrides(2025, undefined).epiphany())).toBe('2025-01-06');
    });

    it('ignores a transfer target it does not know', () => {
      const unknown = { then: { transferTo: 'saturday' }, when: { dayOfWeek: 'monday' } };

      expect(iso(withOverrides(2025, override(unknown)).epiphany())).toBe('2025-01-06');
    });

    it('does not apply exceptions when the Epiphany mode is given explicitly', () => {
      expect(iso(withOverrides(2025, override(monday)).epiphany(2025, false))).toBe('2025-01-06');
    });

    it('moves the Baptism of the Lord along with Epiphany', () => {
      expect(iso(withOverrides(2025, override(monday)).baptismOfTheLord())).toBe('2025-01-12');
    });
  });

  describe('Easter Time', () => {
    it('places a weekday or Sunday of Easter Time, leaving out the Ascension', () => {
      const dates = datesOf(2025);

      expect(iso(dates.weekdayOrSundayOfEasterTime(0, 2, 2025))).toBe('2025-04-27');
      expect(iso(dates.weekdayOrSundayOfEasterTime(1, 2, 2025))).toBe('2025-04-28');
      expect(dates.weekdayOrSundayOfEasterTime(4, 6, 2025)).toBeNull();
      expect(iso(dates.weekdayOrSundayOfEasterTime(4, 6, 2025, true))).toBe('2025-05-29');
      expect(dates.weekdayOrSundayOfEasterTime(0, 7, 2025, true)).toBeNull();
      expect(iso(dates.weekdayOrSundayOfEasterTime(0, 7, 2025, false))).toBe('2025-06-01');
    });

    it('rejects a week or a day of the week out of range', () => {
      const dates = datesOf(2025);

      expect(dates.weekdayOrSundayOfEasterTime(1, 0, 2025)).toBeNull();
      expect(dates.weekdayOrSundayOfEasterTime(1, 8, 2025)).toBeNull();
      expect(dates.weekdayOrSundayOfEasterTime(-1, 2, 2025)).toBeNull();
      expect(dates.weekdayOrSundayOfEasterTime(7, 2, 2025)).toBeNull();
    });
  });

  describe('Ordinary Time', () => {
    it.each(YEARS)('fills the year between the seasons without gap or overlap in %i', (year) => {
      const dates = datesOf(year);
      const early = dates.allDatesOfEarlyOrdinaryTime(year);
      const late = dates.allDatesOfLateOrdinaryTime(year);

      expect(early[0]).toEqual(dates.startOfSeasons(year)[Season.OrdinaryTime]);
      expect(dates.allDatesOfOrdinaryTime(year)).toEqual([...early, ...late]);
      expect(early.at(-1)?.getTime()).toBe(dates.ashWednesday(year).getTime() - 24 * 3600 * 1000);
      expect(late[0].getTime()).toBe(dates.pentecostSunday(year).getTime() + 24 * 3600 * 1000);
      expect(dates.sundaysOfEarlyOrdinaryTime(year).every((d) => d.getUTCDay() === 0)).toBe(true);
      expect(dates.allSundaysOfLateOrdinaryTime(year).every((d) => d.getUTCDay() === 0)).toBe(true);
    });

    it('numbers the weeks of the early part of the year', () => {
      const dates = datesOf(2025);

      expect(iso(dates.dateOfOrdinaryTime(1, 1, 2025, true))).toBe('2025-01-13');
      expect(iso(dates.dateOfOrdinaryTime(0, 2, 2025, true))).toBe('2025-01-19');
      expect(iso(dates.dateOfOrdinaryTime(1, 2, 2025, true))).toBe('2025-01-20');
    });

    it('starts on the Tuesday when the Baptism of the Lord is on a Monday', () => {
      const dates = datesOf(2024);

      expect(dates.dateOfOrdinaryTime(1, 1, 2024, true)).toBeNull();
      expect(iso(dates.dateOfOrdinaryTime(2, 1, 2024, true))).toBe('2024-01-09');
      expect(iso(dates.dateOfOrdinaryTime(0, 2, 2024, true))).toBe('2024-01-14');
      expect(iso(dates.dateOfOrdinaryTime(1, 2, 2024, true))).toBe('2024-01-15');
    });

    it('numbers the weeks of the late part of the year, backwards from Christ the King', () => {
      const dates = datesOf(2025);

      expect(iso(dates.dateOfOrdinaryTime(1, 10, 2025, true))).toBe('2025-06-09');
      expect(iso(dates.dateOfOrdinaryTime(0, 12, 2025, true))).toBe('2025-06-22');
      expect(iso(dates.dateOfOrdinaryTime(0, 34, 2025, true))).toBe('2025-11-23');
      expect(iso(dates.dateOfOrdinaryTime(6, 33, 2025, true))).toBe('2025-11-22');
    });

    it('leaves out the days that are taken by a solemnity after Pentecost', () => {
      const dates = datesOf(2025);

      expect(dates.dateOfOrdinaryTime(0, 11, 2025, true)).toBeNull();
      expect(dates.dateOfOrdinaryTime(4, 11, 2025, true)).toBeNull();
      expect(dates.dateOfOrdinaryTime(5, 12, 2025, true)).toBeNull();
      expect(iso(dates.dateOfOrdinaryTime(3, 11, 2025, true))).toBe('2025-06-18');
    });

    it('reports no date for a week or a day that does not exist', () => {
      const dates = datesOf(2025);

      expect(dates.dateOfOrdinaryTime(1, 0, 2025, true)).toBeNull();
      expect(dates.dateOfOrdinaryTime(1, 35, 2025, true)).toBeNull();
    });
  });
});
