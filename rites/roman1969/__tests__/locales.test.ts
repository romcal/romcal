import { Brazil_PtBr } from '../dist/bundles/brazil';
import { France_Fr } from '../dist/bundles/france';

import { Romcal } from '../src';

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

  describe('Test the Latin locale', () => {
    describe('Testing whether Latin celebration names use correct gender for ordinal numbers', () => {
      laOrdinalNumberGenderFixture.forEach((i) => {
        const r = new Romcal({ localizedCalendar: i.calendar });

        i.tests.forEach((d) => {
          test(`- \`${i.calendar.i18n.id}\`: \`${d.key}\``, async () => {
            const day = await r.getOneLiturgicalDay(d.key);

            if (day) {
              /* eslint-disable-next-line jest/no-conditional-expect */
              expect(day?.name).toBe(d.value);
            } else {
              /* eslint-disable-next-line no-console */
              console.log(
                `\`${i.calendar.i18n.id}\`: \`${d.key}\` is not celebrated in ${new Date().getUTCFullYear()}`
              );
            }
          });
        });
      });
    });
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
