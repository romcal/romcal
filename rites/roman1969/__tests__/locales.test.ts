import { Brazil_PtBr } from '@dist/rite-roman1969/bundles/brazil';
import { France_Fr } from '@dist/rite-roman1969/bundles/france';
import { GeneralRoman_En } from '@dist/rite-roman1969/bundles/general-roman';
import { Germany_De } from '@dist/rite-roman1969/bundles/germany';
import { Italy_It } from '@dist/rite-roman1969/bundles/italy';
import { Romcal } from '@src/rite-roman1969';

import { laOrdinalNumberGenderFixture } from './fixtures/la-ordinal-number-gender.fixture';
import { seasonalWeekNumberLocalisationFixture } from './fixtures/seasonal-week-number-localisation.fixture';

describe('Testing localization functionality', () => {
  describe('Test the French locale', () => {
    test('If the locale is set to "fr", romcal should output text in French', async () => {
      const date = await new Romcal({ localizedCalendar: France_Fr }).getOneLiturgicalDay('all_saints');
      expect(date?.name).toBe('Tous les Saints');
    });
  });

  describe('Test the Brazilian Portuguese locale', () => {
    test('If the locale is set to "pt-BR", romcal should output text in Portuguese', async () => {
      const date = await new Romcal({ localizedCalendar: Brazil_PtBr }).getOneLiturgicalDay('all_saints');
      expect(date?.name).toBe('Todos os Santos');
    });
  });

  describe('Test the German locale', () => {
    test('If the locale is set to "De", romcal should output text in German', async () => {
      const date = await new Romcal({ localizedCalendar: Germany_De }).generateCalendar(2024);
      expect(date['2024-12-02'][0].name).toBe('Montag der 1. Adventswoche');
    });
  });

  describe('Test the Latin locale', () => {
    describe('Testing whether Latin celebration names use correct gender for ordinal numbers', () => {
      laOrdinalNumberGenderFixture.forEach((i) => {
        const r = new Romcal({ localizedCalendar: i.calendar });

        i.tests.forEach((d) => {
          test(`- \`${i.calendar.i18n.id}\`: \`${d.key}\``, async () => {
            const day = await r.getOneLiturgicalDay(d.key);

            if (day) {
              expect(day?.name).toBe(d.value);
            }
          });
        });
      });
    });
  });
});

describe('Test the interpolation formats', () => {
  // These are registered with i18next's formatter service. Passing them as
  // `interpolation.format` instead left them silently unapplied: i18next overwrites
  // that option during init, so every name below rendered its raw value (#1226).
  test('`romanize` and `capitalize` are applied to an Italian weekday', async () => {
    const calendar = await new Romcal({ localizedCalendar: Italy_It }).generateCalendar(2024);
    expect(calendar['2024-12-02'][0].name).toBe('Lunedì della I settimana di Avvento');
  });

  test('`capitalize` is applied to an English ordinal', async () => {
    const calendar = await new Romcal({ localizedCalendar: GeneralRoman_En }).generateCalendar(2024);
    expect(calendar['2024-12-01'][0].name).toBe('First Sunday of Advent');
  });

  // No locale currently interpolates `uppercase` into a celebration name. The
  // nested weekday lookup is how the format is meant to be used.
  test('`uppercase` is applied to an Italian weekday lookup', () => {
    const config = new Romcal.RomcalConfig({ localizedCalendar: Italy_It });
    expect(
      config.i18next.t('interpolation_uppercase', {
        defaultValue: '$t(weekdays:{{dow}}, uppercase)',
        dow: 1,
      })
    ).toBe('LUNEDÌ');
  });
});

describe('Testing whether celebration names from `.names` object with seasonal week return the correct localized name', () => {
  seasonalWeekNumberLocalisationFixture.forEach((i) => {
    const r = new Romcal({ localizedCalendar: i.calendar });

    i.tests.forEach((d) => {
      test(`- ${`\`${i.calendar.i18n.id}\``.padEnd(8, ' ')}: \`${d.key}\``, async () => {
        expect((await r.getOneLiturgicalDay(d.key))?.name).toBe(d.value);
      });
    });
  });
});

describe('English Locale', () => {
  const English = Romcal.LOCALES.En;
  const NonEnglish = Object.values(Romcal.LOCALES).filter((locale) => locale.id !== 'en');
  test('Has all keys from all other locales', () => {
    const missing: Array<{ locale: string; key: string }> = [];
    NonEnglish.forEach((locale) => {
      Object.keys(locale.names!).forEach((key) => {
        if (!English.names!.hasOwnProperty(key)) {
          missing.push({ locale: locale.id, key });
        }
      });
    });
    if (missing.length > 0) {
      console.error(
        `The English locale is missing the following keys:\n${missing.map((m) => `- [${m.locale}]: ${m.key}`).join('\n')}`
      );
    }
    expect(missing.length).toEqual(0);
  });
});
