import { Colors } from '../constants/colors';
import { ProperCycles } from '../constants/cycles';
import { GENERAL_ROMAN_ID, GENERAL_ROMAN_NAME, PROPER_OF_TIME_NAME } from '../constants/general-calendar-names';
import { Title } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';

import { registerRite } from './active-rite';
import { LiturgicalDayDef } from './liturgical-day-def';

// Loose local types keep the spec independent of the full Vocabulary generics.
type Loose = Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

const DATE_DEF = { month: 1, date: 1 };

const makeConfig = (extra: Loose = {}): Loose => ({
  liturgicalDayDef: {},
  elevatedMemorialIds: [],
  calendarName: 'Other',
  martyrologyCatalog: {},
  rubrics: { rankOf: jest.fn((precedence: string) => `RANK_${precedence}`) },
  i18next: { t: jest.fn((key: string) => `t(${key})`) },
  getSeasonNames: jest.fn(() => ['Season']),
  getLiturgicalColorNames: jest.fn(() => ['Colour']),
  ...extra,
});

const build = (id: string, input: Loose, fromCalendarId = GENERAL_ROMAN_ID, config: Loose = makeConfig()) =>
  new LiturgicalDayDef(id, input as never, fromCalendarId, config as never) as Loose;

const base = (extra: Loose = {}): Loose => ({
  dateDef: DATE_DEF,
  precedence: Precedences.GeneralMemorial_10,
  ...extra,
});

describe('LiturgicalDayDef', () => {
  describe('required properties', () => {
    it('throws when neither the input nor a previous definition has a dateDef', () => {
      expect(() => build('day', { precedence: Precedences.GeneralMemorial_10 })).toThrow(
        "In the 'general_roman' calendar, the property 'dateDef' for 'day' must be defined."
      );
    });

    it('throws when neither the input nor a previous definition has a precedence', () => {
      expect(() => build('day', { dateDef: DATE_DEF })).toThrow(
        "In the 'general_roman' calendar, the property 'precedence' for 'day' must be defined."
      );
    });
  });

  describe('a new definition with minimal input', () => {
    it('fills every property with its default and registers itself', () => {
      const config = makeConfig();
      const input = base();
      const def = build('day', input, GENERAL_ROMAN_ID, config);

      expect(config.liturgicalDayDef['day']).toBe(def);
      expect(def.id).toBe('day');
      expect(def.dateDef).toBe(DATE_DEF);
      expect(def.dateExceptions).toEqual([]);
      expect(def.alternativeTransferDateDefs).toEqual([]);
      expect(def.precedence).toBe(Precedences.GeneralMemorial_10);
      expect(def.rank).toBe(`RANK_${Precedences.GeneralMemorial_10}`);
      expect(config.rubrics.rankOf).toHaveBeenCalledWith(Precedences.GeneralMemorial_10, 'day');
      expect(def.allowSimilarRankItems).toBe(false);
      expect(def.commonsDef).toEqual([]);
      expect(def.isHolyDayOfObligation).toBe(false);
      expect(def.isOptional).toBe(false);
      expect(def.i18nDef).toEqual(['names:day']);
      expect(def.seasons).toEqual([]);
      expect(def.periods).toEqual([]);
      expect(def.calendarMetadata).toEqual({});
      expect(def.martyrology).toEqual([]);
      expect(def.titles).toEqual([]);
      expect(def.colors).toEqual([Colors.White]);
      expect(def.cycles).toEqual({ properCycle: ProperCycles.ProperOfSaints });
      expect(def.fromCalendarId).toBe(GENERAL_ROMAN_ID);
      expect(def.fromExtendedCalendars).toEqual([]);
      expect(def.input).toEqual([{ ...input, fromCalendarId: GENERAL_ROMAN_ID }]);
    });

    it('wraps single values and takes every explicit property from the input', () => {
      const def = build(
        'day',
        base({
          dateExceptions: { ifIsDayOfWeek: 1 },
          alternativeTransferDateDefs: { month: 2, date: 2 },
          allowSimilarRankItems: true,
          commonsDef: 'common',
          isHolyDayOfObligation: true,
          isOptional: true,
          customLocaleId: 'custom',
          colors: Colors.Red,
          properCycle: ProperCycles.ProperOfTime,
        })
      );

      expect(def.dateExceptions).toEqual([{ ifIsDayOfWeek: 1 }]);
      expect(def.alternativeTransferDateDefs).toEqual([{ month: 2, date: 2 }]);
      expect(def.allowSimilarRankItems).toBe(true);
      expect(def.commonsDef).toEqual(['common']);
      expect(def.isHolyDayOfObligation).toBe(true);
      expect(def.isOptional).toBe(true);
      expect(def.i18nDef).toEqual(['names:custom']);
      expect(def.colors).toEqual([Colors.Red]);
      expect(def.cycles.properCycle).toBe(ProperCycles.ProperOfTime);
    });

    it('treats an absent alternative transfer date definition as an empty list', () => {
      expect(build('day', base({ alternativeTransferDateDefs: undefined })).alternativeTransferDateDefs).toEqual([]);
    });
  });

  describe('elevated memorials', () => {
    const elevated = (precedence: string, fromCalendarId: string, ids = ['day']) =>
      build('day', base({ precedence }), fromCalendarId, makeConfig({ elevatedMemorialIds: ids })).precedence;

    it('raises an elevated optional memorial of the general calendar to a general memorial', () => {
      expect(elevated(Precedences.OptionalMemorial_12, GENERAL_ROMAN_ID)).toBe(Precedences.GeneralMemorial_10);
    });

    it('raises an elevated optional memorial of another calendar to a proper memorial', () => {
      expect(elevated(Precedences.OptionalMemorial_12, 'france')).toBe(Precedences.ProperMemorial_11b);
    });

    it('leaves an optional memorial that is not elevated unchanged', () => {
      expect(elevated(Precedences.OptionalMemorial_12, GENERAL_ROMAN_ID, [])).toBe(Precedences.OptionalMemorial_12);
    });

    it('leaves an elevated id with another precedence unchanged', () => {
      expect(elevated(Precedences.GeneralMemorial_10, GENERAL_ROMAN_ID)).toBe(Precedences.GeneralMemorial_10);
    });
  });

  describe('a proper of time input', () => {
    it('takes its i18n, seasons, periods and metadata from the input and ignores commons input', () => {
      const def = build(
        'sunday',
        base({
          periods: ['EARLY'],
          seasons: ['ADVENT'],
          i18nDef: ['key', { n: 1 }],
          calendarMetadata: { weekOfSeason: 1 },
          commonsDef: ['ignored'],
          alternativeTransferDateDefs: [{ month: 3, date: 3 }],
        }),
        PROPER_OF_TIME_NAME
      );

      expect(def.i18nDef).toEqual(['key', { n: 1 }]);
      expect(def.seasons).toEqual(['ADVENT']);
      expect(def.periods).toEqual(['EARLY']);
      expect(def.calendarMetadata).toEqual({ weekOfSeason: 1 });
      expect(def.commonsDef).toEqual([]);
      expect(def.alternativeTransferDateDefs).toEqual([]);
    });

    it('defaults absent seasons and periods to empty lists', () => {
      const def = build('sunday', base({ periods: undefined, i18nDef: ['key'], calendarMetadata: {} }));

      expect(def.seasons).toEqual([]);
      expect(def.periods).toEqual([]);
    });

    it('keeps the commons of a previous definition', () => {
      const config = makeConfig();
      build('sunday', base({ commonsDef: ['common'] }), GENERAL_ROMAN_ID, config);
      const def = build('sunday', base({ periods: [], i18nDef: ['key'] }), PROPER_OF_TIME_NAME, config);

      expect(def.commonsDef).toEqual(['common']);
    });
  });

  describe('inheriting from a previous definition', () => {
    const previousInput = (): Loose =>
      base({
        dateExceptions: [{ ifIsDayOfWeek: 1 }],
        alternativeTransferDateDefs: [{ month: 2, date: 2 }],
        allowSimilarRankItems: true,
        commonsDef: ['common'],
        isHolyDayOfObligation: true,
        isOptional: true,
        customLocaleId: 'custom',
        colors: [Colors.Red],
        properCycle: ProperCycles.ProperOfTime,
      });

    it('inherits every property that the new input leaves out, except the alternative transfer dates', () => {
      const config = makeConfig();
      const previous = build('day', previousInput(), 'france', config);
      const def = build('day', {}, 'spain', config);

      expect(def.dateDef).toBe(previous.dateDef);
      expect(def.dateExceptions).toBe(previous.dateExceptions);
      expect(def.precedence).toBe(previous.precedence);
      expect(def.allowSimilarRankItems).toBe(true);
      expect(def.commonsDef).toBe(previous.commonsDef);
      expect(def.isHolyDayOfObligation).toBe(true);
      expect(def.isOptional).toBe(true);
      expect(def.i18nDef).toBe(previous.i18nDef);
      expect(def.colors).toBe(previous.colors);
      expect(def.cycles.properCycle).toBe(ProperCycles.ProperOfTime);
      // The alternative transfer dates are never inherited, so leaving them out is the only recorded difference.
      expect(def.alternativeTransferDateDefs).toEqual([]);
      expect(previous.fromExtendedCalendars).toEqual([
        { alternativeTransferDateDefs: [{ month: 2, date: 2 }], fromCalendarId: 'france' },
      ]);
      expect(def.input).toHaveLength(2);
      expect(config.liturgicalDayDef['day']).toBe(def);
    });

    it('inherits the seasons and periods of the previous definition', () => {
      const config = makeConfig();
      build('day', base({ periods: ['EARLY'], seasons: ['ADVENT'], i18nDef: ['key'] }), PROPER_OF_TIME_NAME, config);
      const def = build('day', {}, GENERAL_ROMAN_ID, config);

      expect(def.seasons).toEqual(['ADVENT']);
      expect(def.periods).toEqual(['EARLY']);
    });

    it('records the previous values of every property that the new input changes', () => {
      const config = makeConfig({
        martyrologyCatalog: { a: { titles: [Title.Martyr] }, b: { titles: [Title.DoctorOfTheChurch] } },
        calendarName: 'Other',
      });
      const previous = build('day', previousInput(), 'france', config);
      const previousSnapshot = { ...previous };
      build(
        'day',
        {
          dateDef: { month: 5, date: 5 },
          dateExceptions: [],
          alternativeTransferDateDefs: [],
          precedence: Precedences.ProperMemorial_11b,
          commonsDef: ['other'],
          isHolyDayOfObligation: false,
          isOptional: false,
          customLocaleId: 'other',
          colors: [Colors.Green],
          properCycle: ProperCycles.ProperOfSaints,
          martyrology: ['a'],
        },
        'spain',
        config
      );

      const [diff] = previous.fromExtendedCalendars;
      expect(diff).toEqual({
        dateDef: previousSnapshot.dateDef,
        dateExceptions: previousSnapshot.dateExceptions,
        alternativeTransferDateDefs: previousSnapshot.alternativeTransferDateDefs,
        precedence: previousSnapshot.precedence,
        rank: previousSnapshot.rank,
        commonsDef: previousSnapshot.commonsDef,
        isHolyDayOfObligation: true,
        isOptional: true,
        i18nDef: previousSnapshot.i18nDef,
        colors: previousSnapshot.colors,
        titles: previousSnapshot.titles,
        cycles: { properCycle: ProperCycles.ProperOfTime },
        fromCalendarId: 'france',
      });
    });

    it('does not record a colour difference for the same colours in another order', () => {
      const config = makeConfig();
      build('day', base({ colors: [Colors.Red, Colors.White] }), 'france', config);
      const def = build('day', { colors: [Colors.White, Colors.Red] }, 'spain', config);

      expect(def.fromExtendedCalendars).toEqual([]);
    });
  });

  describe('martyrology', () => {
    const catalog = () => ({
      a: { titles: [Title.Martyr] },
      b: { titles: [Title.DoctorOfTheChurch] },
      c: {},
    });

    it('takes the definition id as the martyrology item when it is in the catalog', () => {
      const def = build('a', base(), GENERAL_ROMAN_ID, makeConfig({ martyrologyCatalog: catalog() }));

      expect(def.martyrology).toEqual([{ id: 'a', titles: [Title.Martyr] }]);
      expect(def.titles).toEqual([Title.Martyr]);
      expect(def.colors).toEqual([Colors.Red]);
    });

    it('adds no martyrology item when the id is not in the catalog', () => {
      expect(build('x', base(), GENERAL_ROMAN_ID, makeConfig({ martyrologyCatalog: catalog() })).martyrology).toEqual([]);
    });

    it('accepts ids and redefined pointers, and combines their overrides', () => {
      const def = build(
        'x',
        base({
          martyrology: [
            'b',
            { id: 'a', hideTitles: true, count: 3, titles: [Title.Bishop] },
            { id: 'c', count: 'many', hideTitles: false },
            { id: 'c', count: 'few' as never, hideTitles: 'yes' as never },
          ],
        }),
        GENERAL_ROMAN_ID,
        makeConfig({ martyrologyCatalog: catalog() })
      );

      expect(def.martyrology).toEqual([
        { id: 'b', titles: [Title.DoctorOfTheChurch] },
        { id: 'a', titles: [Title.Bishop], hideTitles: true, count: 3 },
        { id: 'c', count: 'many', hideTitles: false },
      ]);
    });

    it('does not add a martyrology item twice when a previous definition already has it', () => {
      const config = makeConfig({ martyrologyCatalog: catalog() });
      build('x', base({ martyrology: ['a'] }), 'france', config);
      const def = build('x', { martyrology: [{ id: 'a', count: 2 }] }, 'spain', config);

      expect(def.martyrology).toEqual([{ id: 'a', titles: [Title.Martyr], count: 2 }]);
    });

    it('rejects a badly referenced item in the general calendar once the catalog is loaded', () => {
      const config = makeConfig({ martyrologyCatalog: catalog(), calendarName: GENERAL_ROMAN_NAME });

      expect(() => build('x', base({ martyrology: ['nope'] }), GENERAL_ROMAN_ID, config)).toThrow(
        "In the 'general_roman' calendar, a LiturgicalDay with the ID 'nope', have a badly referenced martyrology item: 'nope'."
      );
    });

    it('ignores a badly referenced item in another calendar', () => {
      const config = makeConfig({ martyrologyCatalog: catalog() });

      expect(build('x', base({ martyrology: ['nope'] }), 'france', config).martyrology).toEqual([]);
    });

    it('ignores a badly referenced item when the catalog is empty', () => {
      const config = makeConfig({ calendarName: GENERAL_ROMAN_NAME });

      expect(build('x', base({ martyrology: ['nope'] }), GENERAL_ROMAN_ID, config).martyrology).toEqual([]);
    });
  });

  describe('titles', () => {
    const catalog = () => ({ a: { titles: [Title.Martyr, Title.DoctorOfTheChurch] }, c: {} });
    const withTitles = (titles: Loose, martyrology = ['a'], config = makeConfig({ martyrologyCatalog: catalog() })) =>
      build('x', base({ martyrology, titles }), GENERAL_ROMAN_ID, config);

    it('replaces the titles of every martyrology item with an array', () => {
      expect(withTitles([Title.Bishop]).titles).toEqual([Title.Bishop]);
    });

    it('prepends and appends to the catalog titles, without duplicates', () => {
      const def = withTitles({ prepend: [Title.Bishop], append: [Title.Bishop, Title.Pope] });

      expect(def.titles).toEqual([Title.Bishop, Title.Martyr, Title.DoctorOfTheChurch, Title.Pope]);
    });

    it('starts from an empty list when the catalog item has no titles', () => {
      expect(withTitles({ append: [Title.Pope] }, ['c']).titles).toEqual([Title.Pope]);
    });

    it('accepts an object with neither prepend nor append', () => {
      expect(withTitles({}).titles).toEqual([Title.Martyr, Title.DoctorOfTheChurch]);
    });

    it('combines onto the titles of a previous definition', () => {
      const config = makeConfig({ martyrologyCatalog: catalog() });
      withTitles([Title.Bishop], ['a'], config);
      const def = build('x', { titles: { append: [Title.Pope] } }, 'spain', config);

      expect(def.titles).toEqual([Title.Bishop, Title.Pope]);
    });

    it('combines the titles given on a pointer with the previous titles', () => {
      const config = makeConfig({ martyrologyCatalog: catalog() });
      build('x', base({ martyrology: ['a'] }), 'france', config);
      const def = build('x', { martyrology: [{ id: 'a', titles: { prepend: [Title.Pope] } }] }, 'spain', config);

      expect(def.titles).toEqual([Title.Pope, Title.Martyr, Title.DoctorOfTheChurch]);
    });

    it('refuses titles when there is no martyrology item to carry them', () => {
      expect(() => withTitles([Title.Bishop], [])).toThrow(
        "In the 'general_roman' calendar, in the LiturgicalDay with the ID 'x', you cannot add titles because there is no martyrology items associated."
      );
    });
  });

  describe('dropping a definition', () => {
    it('removes a previous definition and does not register the dropping one', () => {
      const config = makeConfig();
      build('day', base(), 'france', config);
      build('day', { drop: true }, 'spain', config);

      expect(config.liturgicalDayDef['day']).toBeUndefined();
    });

    it('refuses to drop a definition that does not exist', () => {
      expect(() => build('day', base({ drop: true }), 'spain')).toThrow(
        "In the 'spain' calendar, trying to drop a LiturgicalDay that doesn't exists: 'day'."
      );
    });

    it('refuses to drop a definition of the proper of time', () => {
      const config = makeConfig();
      build('day', base({ periods: [], i18nDef: ['key'] }), PROPER_OF_TIME_NAME, config);

      expect(() => build('day', { drop: true }, 'spain', config)).toThrow(
        "In the 'spain' calendar, you can't drop a LiturgicalDay from the Proper of Time: 'day'."
      );
      expect(config.liturgicalDayDef['day']).toBeDefined();
    });
  });

  describe('lazy names', () => {
    it('translates the name once, passing the i18n parameters', () => {
      const config = makeConfig();
      const def = build('day', base({ customLocaleId: 'custom' }), GENERAL_ROMAN_ID, config);

      expect(def.name).toBe('t(names:custom)');
      expect(def.name).toBe('t(names:custom)');
      expect(config.i18next.t).toHaveBeenCalledTimes(1);
    });

    it('translates the rank name once from the lower-cased rank', () => {
      const config = makeConfig();
      const def = build('day', base(), GENERAL_ROMAN_ID, config);
      const rankKey = `ranks:rank_${Precedences.GeneralMemorial_10}`.toLowerCase();

      expect(def.rankName).toBe(`t(${rankKey})`);
      expect(def.rankName).toBe(`t(${rankKey})`);
      expect(config.i18next.t).toHaveBeenCalledTimes(1);
    });

    it('falls back to the translation key when the rank name has no translation', () => {
      const config = makeConfig({
        rubrics: { rankOf: jest.fn(() => undefined) },
        i18next: { t: jest.fn(() => undefined) },
      });

      expect(build('day', base(), GENERAL_ROMAN_ID, config).rankName).toBe('ranks:');
    });

    it('asks the config once for the season names and once for the colour names', () => {
      const config = makeConfig();
      const def = build('day', base(), GENERAL_ROMAN_ID, config);

      expect(def.seasonNames).toEqual(['Season']);
      expect(def.seasonNames).toEqual(['Season']);
      expect(def.colorNames).toEqual(['Colour']);
      expect(def.colorNames).toEqual(['Colour']);
      expect(config.getSeasonNames).toHaveBeenCalledTimes(1);
      expect(config.getLiturgicalColorNames).toHaveBeenCalledTimes(1);
    });
  });

  describe('precedenceToRank', () => {
    it('asks the registered rite for the rank', () => {
      const rankOf = jest.fn(() => 'RANK');
      registerRite({ rubrics: { rankOf } } as never);

      expect(LiturgicalDayDef.precedenceToRank(Precedences.GeneralMemorial_10, 'day')).toBe('RANK');
      expect(rankOf).toHaveBeenCalledWith(Precedences.GeneralMemorial_10, 'day');
    });
  });
});
