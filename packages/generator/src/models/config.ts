import i18next, { i18n } from 'i18next';

import { Color } from '../constants/colors';
import { Season } from '../constants/seasons';
import { Roman1969Rite } from '../default-rite';
import { ProperOfTime } from '../proper-of-time/proper-of-time';
import { RomcalBundleObject } from '../types/bundle';
import { CalendarDefInstance, LiturgicalDayDefinitions } from '../types/calendar-def';
import {
  CalendarScope,
  EasterCalculationType,
  IRomcalConfig,
  OutputOptions,
  RomcalConfigInput,
  RomcalConfigOutput,
  TemporalOverrides,
} from '../types/config';
import { BaseCyclesMetadata } from '../types/cycles-metadata';
import { DatesConstructor } from '../types/dates';
import { Locale } from '../types/locale';
import { MartyrologyCatalog } from '../types/martyrology';
import { Rite } from '../types/rite';
import { Rubrics } from '../types/rubrics';
import { toRomanNumber } from '../utils/numbers';
import { sanitizeLocaleId } from '../utils/string';
import { cloneTemporalOverrides, omitTemporalOverrideAnchor } from '../utils/temporal-overrides';

import { getBaseCalendar } from './base-calendar';
import { CalendarDef } from './calendar-def';

/**
 * Interpolation formats the locale files use: `{{week, romanize}}`, and `capitalize`
 * and `uppercase` applied to nested weekday, month and ordinal lookups.
 *
 * These were passed as `interpolation.format` until i18next 26, which reads that
 * option and then overwrites it with its own formatter service during init, silently
 * discarding them. Registering each one with the service is how a custom format is
 * declared now, and it is also addressable: an unknown `{{value, whatever}}` warns
 * instead of falling through a chain of comparisons.
 */
const addInterpolationFormats = (instance: i18n): void => {
  const { formatter } = instance.services;
  if (!formatter) return;

  // An empty value has nothing to romanize or capitalize, and `''[0]` is undefined.
  const whenPresent =
    (format: (value: string) => string) =>
      (value: unknown): string => {
        const text = String(value ?? '');
        return text === '' ? text : format(text);
      };

  formatter.add(
    'romanize',
    whenPresent((value) => toRomanNumber(parseInt(value, 10)))
  );
  formatter.add(
    'uppercase',
    whenPresent((value) => value.toUpperCase())
  );
  formatter.add(
    'capitalize',
    whenPresent((value) => value[0].toUpperCase() + value.slice(1))
  );
};

/**
 * The [[Config]] class encapsulates all options that can be sent to this library to adjust date output.
 */
export class RomcalConfig implements IRomcalConfig {
  readonly #input: RomcalConfigInput;

  readonly localizedCalendar?: RomcalBundleObject;

  readonly localeId: string;

  readonly calendarName: string;

  epiphanyOnSunday: boolean;

  corpusChristiOnSunday: boolean;

  ascensionOnSunday: boolean;

  temporalOverrides?: TemporalOverrides;

  elevatedMemorialIds: string[] = [];

  easterCalculationType: EasterCalculationType;

  readonly scope: CalendarScope;

  readonly i18next: i18n;

  /** The rite this calendar is generated under. */
  readonly rite: Rite;

  /**
   * The class the engine builds a year's dates from. Defaults to romcal's own, which
   * computes the 1969 calendar.
   */
  readonly dates: DatesConstructor;

  /**
   * The rules of precedence in force. Defaults to the 1969 norms, so a rite that has
   * no opinion behaves exactly as romcal always has.
   */
  readonly rubrics: Rubrics;

  readonly martyrologyCatalog: MartyrologyCatalog;

  readonly cyclesCache: Record<number, Pick<BaseCyclesMetadata, 'sundayCycle' | 'weekdayCycle'>> = {};

  readonly calendarsDef: InstanceType<CalendarDefInstance>[];

  liturgicalDayDef: LiturgicalDayDefinitions = {} as LiturgicalDayDefinitions;

  readonly outputOptions: OutputOptions;

  /**
   * Clone the RomcalConfig object
   */
  clone(): RomcalConfig {
    return new RomcalConfig(
      {
        ...this.#input,
        temporalOverrides: cloneTemporalOverrides(this.temporalOverrides),
      },
      undefined,
      undefined,
      undefined,
      this.rite
    );
  }

  /**
   * Constructs a new [[Config]] object.
   * @param {RomcalConfigInput} config object representing all settings.
   * @param martyrologyCatalog
   * @param locale
   * @param ParticularCalendar
   * @param rite The dates and rubrics of the rite. Defaults to the Roman Rite of 1969.
   */
  constructor(
    config?: RomcalConfigInput,
    martyrologyCatalog?: MartyrologyCatalog,
    locale?: Locale,
    ParticularCalendar?: typeof CalendarDef,
    rite: Rite = Roman1969Rite
  ) {
    this.rite = rite;
    this.dates = rite.dates;
    this.rubrics = rite.rubrics;

    this.#input = config
      ? {
          ...config,
          temporalOverrides: cloneTemporalOverrides(config.temporalOverrides),
        }
      : {};

    if (config?.localizedCalendar) {
      this.localizedCalendar = config.localizedCalendar;
    }

    this.easterCalculationType = config?.easterCalculationType ?? 'gregorian';
    this.scope = config?.scope ?? 'gregorian';

    this.epiphanyOnSunday =
      config?.epiphanyOnSunday ?? this.localizedCalendar?.particularConfig.epiphanyOnSunday ?? false;
    this.corpusChristiOnSunday =
      config?.corpusChristiOnSunday ?? this.localizedCalendar?.particularConfig.corpusChristiOnSunday ?? true;
    this.ascensionOnSunday =
      config?.ascensionOnSunday ?? this.localizedCalendar?.particularConfig.ascensionOnSunday ?? false;
    if (config?.temporalOverrides !== undefined) {
      this.temporalOverrides = cloneTemporalOverrides(config.temporalOverrides);
    } else if (config?.epiphanyOnSunday !== undefined) {
      this.temporalOverrides = omitTemporalOverrideAnchor(
        this.localizedCalendar?.particularConfig.temporalOverrides,
        'epiphany'
      );
    } else {
      this.temporalOverrides = cloneTemporalOverrides(this.localizedCalendar?.particularConfig.temporalOverrides);
    }

    this.elevatedMemorialIds = config?.elevatedMemorialIds ?? [];

    const localeObj: Locale | undefined = this.localizedCalendar?.i18n ?? locale;
    this.localeId = localeObj?.id ? sanitizeLocaleId(localeObj.id) : 'dev';

    // Create an instance and set up the i18next library.
    this.i18next = i18next.createInstance(
      {
        fallbackLng: ['dev'],
        lng: this.localeId,
        initAsync: false,
        // contextSeparator: '__',
      },
      (err) => {
        if (err) throw new Error(err);
      }
    );

    addInterpolationFormats(this.i18next);

    // If another locale is specified, load associated resources in the
    // i18next library.
    if (localeObj) this.#addResourceBundles(localeObj);

    // Initiate the CalendarDef objects.
    this.calendarsDef = [];

    // Initiate the Martyrology Catalog object.
    this.martyrologyCatalog = this.localizedCalendar?.martyrology ?? martyrologyCatalog ?? ({} as MartyrologyCatalog);

    // In all cases, generate the ProperOfTime calendar
    this.calendarsDef.push(new ProperOfTime(this));

    // Then, import input definitions within a new CalendarDef object
    if (config?.localizedCalendar) {
      this.calendarsDef.push(new CalendarDef(this, config.localizedCalendar.inputs));

      // Otherwise, it's mean that the base calendar of the rite or a particular calendar must be
      // computed from scratch, probably by using the RomcalBuilder class helper, or Romcal without
      // a specific localizedCalendar.
    } else {
      const BaseCalendar = getBaseCalendar();
      this.calendarsDef.push(new BaseCalendar(this));
      if (ParticularCalendar) {
        this.calendarsDef.push(new ParticularCalendar(this));
      }
    }

    this.calendarName =
      config?.localizedCalendar?.calendarName ?? this.calendarsDef[this.calendarsDef.length - 1].calendarName;

    // Update the config by checking if a particularConfig is present in all CalendarDef objects.
    this.calendarsDef.map((cal) => cal.updateConfig(config));

    this.outputOptions = this.#input?.outputOptions ?? { calculateProperties: false };
  }

  /**
   * Add ressource bundles to the i18next library
   * @param locale
   * @private
   */
  #addResourceBundles(locale: Locale): void {
    this.i18next.addResourceBundle(locale.id, 'seasons', locale.seasons ?? {});
    this.i18next.addResourceBundle(locale.id, 'periods', locale.periods ?? {});
    this.i18next.addResourceBundle(locale.id, 'ranks', locale.ranks ?? {});
    this.i18next.addResourceBundle(locale.id, 'cycles', locale.cycles ?? {});
    this.i18next.addResourceBundle(locale.id, 'weekdays', locale.weekdays ?? {});
    this.i18next.addResourceBundle(locale.id, 'months', locale.months ?? {});
    this.i18next.addResourceBundle(locale.id, 'colors', locale.colors ?? {});
    this.i18next.addResourceBundle(locale.id, 'ordinals', locale.ordinals ?? {});
    this.i18next.addResourceBundle(locale.id, 'names', locale.names ?? {});
  }

  /**
   * Return localised liturgical colors from color IDs
   * @param colors
   */
  getLiturgicalColorNames(colors: Color[]): string[] {
    return colors.map((s) => {
      const id = `colors:${(s ?? '').toLowerCase()}`;
      return this.i18next.t(id) ?? id;
    });
  }

  /**
   * Return localised season names from season IDs
   * @param seasons
   */
  getSeasonNames(seasons: Season[]): string[] {
    return seasons.map((s) => {
      const id = `seasons:${(s ?? '').toLowerCase()}.season`;
      return this.i18next.t(id) ?? id;
    });
  }

  /**
   * Return the config settings as an Object.
   */
  toObject(): RomcalConfigOutput {
    return {
      epiphanyOnSunday: this.epiphanyOnSunday,
      corpusChristiOnSunday: this.corpusChristiOnSunday,
      ascensionOnSunday: this.ascensionOnSunday,
      ...(this.temporalOverrides ? { temporalOverrides: cloneTemporalOverrides(this.temporalOverrides) } : {}),
      elevatedMemorialIds: this.elevatedMemorialIds,
      localeId: this.localeId,
      calendarName: this.calendarName,
      easterCalculationType: this.easterCalculationType,
      scope: this.scope,
      outputOptions: this.outputOptions,
    };
  }
}
