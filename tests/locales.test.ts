import { Brazil_PtBr } from 'romcal/dist/bundles/brazil';
import { France_Fr } from 'romcal/dist/bundles/france';

import { Romcal } from '../lib';
import { fixture as nameFixtures } from './fixtures/names.fixture';

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
  for (const i of nameFixtures) {
    const r = new Romcal({ localizedCalendar: i.c });

    for (const d of i.t) {
      test(`- ${`\`${i.c.i18n.id}\``.padEnd(8, ' ')}: \`${d.k}\``, async () => {
        expect((await r.getOneLiturgicalDay(d.k))?.name).toBe(d.v);
      });
    }
  }
});
