import { Brazil_PtBr } from 'romcal/dist/bundles/brazil';
import { France_Fr } from 'romcal/dist/bundles/france';

import { Romcal } from '../lib';

import { seasonalWeekNumberLocalisationFixture } from './fixtures/seasonal-week-number-localisation.fixture';

describe('Testing localization functionality', () => {
  test('If the locale is set to "fr", romcal should output text in French', async () => {
    const date = await new Romcal({ localizedCalendar: France_Fr }).getOneLiturgicalDay('all_saints');
    expect(date?.name).toBe('Tous les Saints');
  });

  test('If the locale is set to "pt-BR", romcal should output text in Portuguese', async () => {
    const date = await new Romcal({ localizedCalendar: Brazil_PtBr }).getOneLiturgicalDay('all_saints');
    expect(date?.name).toBe('Todos os Santos');
  });
});

describe('Testing whether celebration names from `.names` object with seasonal week return the correct localized name', () => {
  seasonalWeekNumberLocalisationFixture.forEach((i) => {
    const r = new Romcal({ localizedCalendar: i.calendar });

    i.tests.forEach((d) => {
      test(`- ${`\`${i.calendar.i18n.id}\``.padEnd(8, ' ')}: \`${d.k}\``, async () => {
        expect((await r.getOneLiturgicalDay(d.key))?.name).toBe(d.value);
      });
    });
  });
});
