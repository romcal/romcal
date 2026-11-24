import { Colors } from '../constants/colors';
import { ProperCycles } from '../constants/cycles';
import { PROPER_OF_TIME_NAME } from '../constants/general-calendar-names';
import { Precedences } from '../constants/precedences';
import { Season } from '../constants/seasons';

import { ProperOfTime } from './proper-of-time';

// Loose local types keep the spec independent of the full Vocabulary generics.
type Loose = Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

// The Proper of Time builds real `LiturgicalDayDef` objects, so the fake config only has to answer
// what that class asks of it.
const makeConfig = (scope: string, extra: Loose = {}): Loose => ({
  scope,
  dates: { stub: true },
  liturgicalDayDef: {},
  elevatedMemorialIds: [],
  calendarName: 'Other',
  martyrologyCatalog: {},
  rubrics: { rankOf: jest.fn((precedence: string) => `RANK_${precedence}`) },
  ...extra,
});

const properOfTime = (config: Loose) => new ProperOfTime(config as never);

const defsOf = (config: Loose): Record<string, Loose> => config.liturgicalDayDef;

const ids = (config: Loose): string[] => Object.keys(defsOf(config));

const buildWith = (scope: string, method: (proper: ProperOfTime) => void): Loose => {
  const config = makeConfig(scope);
  method(properOfTime(config));
  return config;
};

describe('ProperOfTime', () => {
  it('is named after the Proper of Time', () => {
    expect(properOfTime(makeConfig('liturgical')).calendarName).toBe(PROPER_OF_TIME_NAME);
  });

  describe('buildAllDefinitions', () => {
    it('builds the whole liturgical year, from Advent, when the scope is liturgical', () => {
      const config = makeConfig('liturgical');
      properOfTime(config).buildAllDefinitions();

      expect(ids(config)).toHaveLength(392);
      expect(defsOf(config)['advent_1_sunday'].dateDef.yearOffset).toBe(-1);
      expect(defsOf(config)['nativity_of_the_lord'].dateDef.yearOffset).toBe(-1);
      expect(defsOf(config)['mary_mother_of_god'].dateDef.yearOffset).toBe(0);
    });

    it('builds the whole Gregorian year, from the late Christmas Time, when the scope is gregorian', () => {
      const config = makeConfig('gregorian');
      properOfTime(config).buildAllDefinitions();

      expect(ids(config)).toHaveLength(392);
      expect(defsOf(config)['advent_1_sunday'].dateDef.yearOffset).toBe(0);
      expect(defsOf(config)['nativity_of_the_lord'].dateDef.yearOffset).toBe(0);
      expect(defsOf(config)['mary_mother_of_god'].dateDef.yearOffset).toBe(0);
    });

    it('does nothing when definitions already exist', () => {
      const existing = { stub: true };
      const config = makeConfig('liturgical', { liturgicalDayDef: { existing } });
      properOfTime(config).buildAllDefinitions();

      expect(defsOf(config)).toEqual({ existing });
    });

    it('registers every definition under the Proper of Time with the Proper of Time cycle', () => {
      const config = makeConfig('liturgical');
      properOfTime(config).buildAllDefinitions();

      for (const def of Object.values(defsOf(config))) {
        expect(def.fromCalendarId).toBe(PROPER_OF_TIME_NAME);
        expect(def.cycles.properCycle).toBe(ProperCycles.ProperOfTime);
      }
    });
  });

  describe('advent', () => {
    it('defines the Sundays, weekdays and privileged weekdays of Advent', () => {
      const config = buildWith('liturgical', (p) => p.advent());
      const defs = defsOf(config);

      expect(ids(config)).toHaveLength(29);
      expect(defs['advent_1_sunday'].precedence).toBe(Precedences.PrivilegedSunday_2);
      expect(defs['advent_1_sunday'].isHolyDayOfObligation).toBe(true);
      expect(defs['advent_1_sunday'].dateDef).toEqual({ dateFn: 'sundayOfAdvent', dateArgs: [1], yearOffset: -1 });
      expect(defs['advent_1_sunday'].colors).toEqual([Colors.Purple]);
      expect(defs['advent_1_sunday'].seasons).toEqual([Season.Advent]);
      expect(defs['advent_1_sunday'].i18nDef).toEqual(['seasons:advent.sunday', { week: 1 }]);
      expect(defs['advent_3_sunday'].colors).toEqual([Colors.Rose, Colors.Purple]);
      expect(defs['advent_4_sunday'].dateDef.dateArgs).toEqual([4]);
      expect(defs['advent_4_sunday'].colors).toEqual([Colors.Purple]);
      expect(defs['advent_2_monday'].precedence).toBe(Precedences.Weekday_13);
      expect(defs['advent_2_monday'].isHolyDayOfObligation).toBe(false);
      expect(defs['advent_2_monday'].dateDef.dateFn).toBe('unprivilegedWeekdayOfAdvent');
      expect(defs['advent_2_monday'].i18nDef).toEqual(['seasons:advent.weekday', { week: 2, dow: 1 }]);
      expect(ids(config).filter((id) => /^advent_[a-z]+_\d+$/.test(id))).toHaveLength(8);
      expect(defs['advent_december_17'].precedence).toBe(Precedences.PrivilegedWeekday_9);
      expect(defs['advent_december_24'].i18nDef).toEqual(['seasons:advent.privileged_weekday', { day: 24 }]);
    });

    it('shifts every date by the liturgical year offset', () => {
      const config = buildWith('liturgical', (p) => p.advent(+1));

      expect(defsOf(config)['advent_1_sunday'].dateDef.yearOffset).toBe(0);
      expect(defsOf(config)['advent_december_17'].dateDef.yearOffset).toBe(0);
    });
  });

  describe('Christmas Time', () => {
    it('defines the early part: the Nativity, its octave and the Holy Family', () => {
      const config = buildWith('liturgical', (p) => p.earlyChristmasTime());
      const defs = defsOf(config);

      expect(ids(config)).toHaveLength(8);
      expect(defs['nativity_of_the_lord'].precedence).toBe(Precedences.ProperOfTimeSolemnity_2);
      expect(defs['christmas_octave_day_2'].dateDef.dateArgs).toEqual([2]);
      expect(defs['christmas_octave_day_7']).toBeDefined();
      expect(defs['holy_family_of_jesus_mary_and_joseph'].precedence).toBe(Precedences.GeneralLordFeast_5);
    });

    it('defines the late part: Mary Mother of God to the Baptism of the Lord', () => {
      const config = buildWith('liturgical', (p) => p.lateChristmasTime());
      const defs = defsOf(config);

      expect(ids(config)).toHaveLength(17);
      expect(defs['mary_mother_of_god'].isHolyDayOfObligation).toBe(true);
      expect(defs['second_sunday_after_christmas'].precedence).toBe(Precedences.UnprivilegedSunday_6);
      expect(ids(config).filter((id) => /^christmas_time_[a-z]+_\d+$/.test(id))).toHaveLength(7);
      expect(defs['epiphany_of_the_lord'].precedence).toBe(Precedences.ProperOfTimeSolemnity_2);
      expect(ids(config).filter((id) => id.endsWith('_after_epiphany'))).toHaveLength(6);
      expect(defs['baptism_of_the_lord'].precedence).toBe(Precedences.GeneralLordFeast_5);
    });

    it('defines both parts together', () => {
      const config = buildWith('liturgical', (p) => p.christmasTime());

      expect(ids(config)).toHaveLength(25);
    });
  });

  describe('lent', () => {
    it('defines Ash Wednesday, its days, the weeks of Lent, Palm Sunday and Holy Week', () => {
      const config = buildWith('liturgical', (p) => p.lent());
      const defs = defsOf(config);

      expect(ids(config)).toHaveLength(44);
      expect(defs['ash_wednesday'].precedence).toBe(Precedences.AshWednesday_2);
      expect(ids(config).filter((id) => id.endsWith('_after_ash_wednesday'))).toHaveLength(3);
      expect(defs['lent_1_sunday'].isHolyDayOfObligation).toBe(true);
      expect(defs['lent_1_sunday'].i18nDef).toEqual(['seasons:lent.sunday', { week: 1 }]);
      expect(defs['lent_4_sunday'].colors).toEqual([Colors.Rose, Colors.Purple]);
      expect(defs['lent_5_saturday'].precedence).toBe(Precedences.PrivilegedWeekday_9);
      expect(defs['lent_5_saturday'].i18nDef).toEqual(['seasons:lent.weekday', { week: 5, dow: 6 }]);
      expect(defs['palm_sunday_of_the_passion_of_the_lord'].colors).toEqual([Colors.Red]);
      expect(defs['holy_monday'].precedence).toBe(Precedences.WeekdayOfHolyWeek_2);
      expect(defs['holy_thursday'].dateDef).toEqual({ dateFn: 'palmSunday', addDay: 4, yearOffset: 0 });
    });
  });

  describe('paschalTriduum', () => {
    it('defines the three days of the Triduum and Easter Sunday', () => {
      const config = buildWith('liturgical', (p) => p.paschalTriduum());
      const defs = defsOf(config);

      expect(ids(config)).toEqual([
        'thursday_of_the_lords_supper',
        'friday_of_the_passion_of_the_lord',
        'holy_saturday',
        'easter_sunday',
      ]);
      expect(defs['holy_saturday'].precedence).toBe(Precedences.Triduum_1);
      expect(defs['easter_sunday'].seasons).toEqual([Season.PaschalTriduum, Season.EasterTime]);
    });
  });

  describe('easterTime', () => {
    it('defines the octave, Divine Mercy Sunday, the weeks, the Ascension and Pentecost', () => {
      const config = buildWith('liturgical', (p) => p.easterTime());
      const defs = defsOf(config);

      expect(ids(config)).toHaveLength(50);
      expect(defs['easter_monday'].precedence).toBe(Precedences.WeekdayOfEasterOctave_2);
      expect(defs['divine_mercy_sunday'].precedence).toBe(Precedences.PrivilegedSunday_2);
      // Day 7 is Divine Mercy Sunday, so the loop's first Sunday is the one that opens the third week.
      expect(defs['easter_time_3_sunday'].isHolyDayOfObligation).toBe(true);
      expect(defs['easter_time_3_sunday'].i18nDef).toEqual(['seasons:easter_time.sunday', { week: 3 }]);
      expect(defs['easter_time_2_monday'].precedence).toBe(Precedences.Weekday_13);
      expect(defs['easter_time_2_monday'].i18nDef).toEqual(['seasons:easter_time.weekday', { week: 2, dow: 1 }]);
      expect(defs['ascension_of_the_lord'].precedence).toBe(Precedences.ProperOfTimeSolemnity_2);
      expect(defs['ascension_of_the_lord'].dateDef).toEqual({ dateFn: 'ascension', yearOffset: 0 });
      expect(defs['easter_time_6_thursday'].precedence).toBe(Precedences.Weekday_13);
      expect(defs['pentecost_sunday'].colors).toEqual([Colors.Red]);
    });
  });

  describe('ordinaryTime', () => {
    it('defines the Sunday solemnities, the weeks and the two named Sundays', () => {
      const config = buildWith('liturgical', (p) => p.ordinaryTime());
      const defs = defsOf(config);

      expect(ids(config)).toHaveLength(240);
      expect(defs['most_holy_trinity'].precedence).toBe(Precedences.GeneralSolemnity_3);
      expect(defs['most_holy_body_and_blood_of_christ'].isHolyDayOfObligation).toBe(true);
      expect(defs['most_sacred_heart_of_jesus'].isHolyDayOfObligation).toBe(false);
      expect(defs['ordinary_time_1_monday'].colors).toEqual([Colors.Green]);
      expect(defs['ordinary_time_2_sunday'].precedence).toBe(Precedences.UnprivilegedSunday_6);
      expect(defs['ordinary_time_2_sunday'].i18nDef).toEqual(['seasons:ordinary_time.sunday', { week: 2 }]);
      expect(defs['ordinary_time_2_tuesday'].i18nDef).toEqual(['seasons:ordinary_time.weekday', { week: 2, dow: 2 }]);
      expect(defs['sunday_of_the_word_of_god'].i18nDef).toEqual(['names:sunday_of_the_word_of_god']);
      expect(defs['ordinary_time_3_sunday']).toBeUndefined();
      expect(defs['our_lord_jesus_christ_king_of_the_universe'].precedence).toBe(Precedences.GeneralSolemnity_3);
      expect(defs['our_lord_jesus_christ_king_of_the_universe'].colors).toEqual([Colors.White]);
      expect(defs['ordinary_time_34_sunday']).toBeUndefined();
    });
  });
});
