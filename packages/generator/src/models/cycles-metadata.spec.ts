import { PSALTER_WEEKS, ProperCycles, SUNDAY_CYCLES, WEEKDAY_CYCLES } from '../constants/cycles';
import { Season } from '../constants/seasons';
import { RomcalCalendarMetadata } from '../types/liturgical-day';

import { RomcalConfig } from './config';
import { CyclesMetadata } from './cycles-metadata';

type Cache = Record<number, { sundayCycle: string; weekdayCycle: string }>;

const makeConfig = (cyclesCache: Cache = {}) => {
  const t = jest.fn((key: string) => `t(${key})`);
  const config = { cyclesCache, i18next: { t } } as unknown as RomcalConfig;
  return { config, t };
};

const makeCalendar = (startOfLiturgicalYear: string, weekOfSeason: number, seasons: Season[] = [Season.OrdinaryTime]) =>
  ({ startOfLiturgicalYear, weekOfSeason, seasons }) as unknown as RomcalCalendarMetadata;

describe('cycles-metadata.ts', () => {
  describe('Sunday and weekday cycles', () => {
    it('uses the next cycles on or after the first Sunday of Advent', () => {
      const { config } = makeConfig();
      const meta = new CyclesMetadata(
        new Date('2023-12-03T00:00:00.000Z'),
        makeCalendar('2023-12-03', 1),
        ProperCycles.ProperOfTime,
        config
      );

      expect(meta.sundayCycle).toBe(SUNDAY_CYCLES[(2023 + 3) % 3]);
      expect(meta.weekdayCycle).toBe(WEEKDAY_CYCLES[2023 % 2]);
    });

    it('uses the current cycles before the first Sunday of Advent', () => {
      const { config } = makeConfig();
      const meta = new CyclesMetadata(
        new Date('2023-12-02T00:00:00.000Z'),
        makeCalendar('2023-12-03', 1),
        ProperCycles.ProperOfTime,
        config
      );

      expect(meta.sundayCycle).toBe(SUNDAY_CYCLES[(2023 + 2) % 3]);
      expect(meta.weekdayCycle).toBe(WEEKDAY_CYCLES[(2023 + 1) % 2]);
    });

    it('computes the cycles once per liturgical year and reuses the cache', () => {
      const cache: Cache = { 2023: { sundayCycle: SUNDAY_CYCLES[0], weekdayCycle: WEEKDAY_CYCLES[0] } };
      const { config } = makeConfig(cache);
      const meta = new CyclesMetadata(
        new Date('2023-12-10T00:00:00.000Z'),
        makeCalendar('2023-12-03', 1),
        ProperCycles.ProperOfTime,
        config
      );

      expect(meta.sundayCycle).toBe(SUNDAY_CYCLES[0]);
      expect(meta.weekdayCycle).toBe(WEEKDAY_CYCLES[0]);
    });

    it('stores the computed cycles in the cache', () => {
      const cache: Cache = {};
      const { config } = makeConfig(cache);
      const meta = new CyclesMetadata(
        new Date('2023-12-10T00:00:00.000Z'),
        makeCalendar('2023-12-03', 1),
        ProperCycles.ProperOfTime,
        config
      );

      expect(cache[2023]).toEqual({ sundayCycle: meta.sundayCycle, weekdayCycle: meta.weekdayCycle });
    });
  });

  describe('psalter week', () => {
    const psalter = (weekOfSeason: number, seasons: Season[], year = '2023') =>
      new CyclesMetadata(
        new Date(`${year}-12-10T00:00:00.000Z`),
        makeCalendar(`${year}-12-03`, weekOfSeason, seasons),
        ProperCycles.ProperOfTime,
        makeConfig().config
      ).psalterWeek;

    it('follows the week of the season outside Christmas Time', () => {
      expect(psalter(1, [Season.Advent])).toBe(PSALTER_WEEKS[0]);
      expect(psalter(4, [Season.Advent])).toBe(PSALTER_WEEKS[3]);
      expect(psalter(5, [Season.OrdinaryTime])).toBe(PSALTER_WEEKS[0]);
    });

    it('shifts the cycle in Christmas Time when December 25 is not a Sunday', () => {
      // 2023-12-25 is a Monday.
      expect(psalter(1, [Season.ChristmasTime])).toBe(PSALTER_WEEKS[3]);
      expect(psalter(2, [Season.ChristmasTime])).toBe(PSALTER_WEEKS[0]);
    });

    it('does not shift the cycle in Christmas Time when December 25 is a Sunday', () => {
      // 2022-12-25 is a Sunday.
      expect(psalter(1, [Season.ChristmasTime], '2022')).toBe(PSALTER_WEEKS[0]);
    });
  });

  describe('names', () => {
    const build = () => {
      const { config, t } = makeConfig();
      const meta = new CyclesMetadata(
        new Date('2023-12-10T00:00:00.000Z'),
        makeCalendar('2023-12-03', 1),
        ProperCycles.ProperOfTime,
        config
      );
      return { meta, t };
    };

    it('translates each cycle name lazily and only once', () => {
      const { meta, t } = build();

      expect(t).not.toHaveBeenCalled();
      expect(meta.properCycleName).toBe(`t(cycles:${meta.properCycle.toLowerCase()})`);
      expect(meta.properCycleName).toBe(`t(cycles:${meta.properCycle.toLowerCase()})`);
      expect(meta.sundayCycleName).toBe(`t(cycles:sunday_${meta.sundayCycle.toLowerCase()})`);
      expect(meta.sundayCycleName).toBe(`t(cycles:sunday_${meta.sundayCycle.toLowerCase()})`);
      expect(meta.weekdayCycleName).toBe(`t(cycles:weekday_${meta.weekdayCycle.toLowerCase()})`);
      expect(meta.weekdayCycleName).toBe(`t(cycles:weekday_${meta.weekdayCycle.toLowerCase()})`);
      expect(meta.psalterWeekName).toBe(`t(cycles:psalter_${meta.psalterWeek.toLowerCase()})`);
      expect(meta.psalterWeekName).toBe(`t(cycles:psalter_${meta.psalterWeek.toLowerCase()})`);
      expect(t).toHaveBeenCalledTimes(4);
    });

    it('serialises the cycles and their names with toObject', () => {
      const { meta } = build();

      expect(meta.toObject()).toEqual({
        properCycle: meta.properCycle,
        properCycleName: meta.properCycleName,
        sundayCycle: meta.sundayCycle,
        sundayCycleName: meta.sundayCycleName,
        weekdayCycle: meta.weekdayCycle,
        weekdayCycleName: meta.weekdayCycleName,
        psalterWeek: meta.psalterWeek,
        psalterWeekName: meta.psalterWeekName,
      });
    });
  });
});
