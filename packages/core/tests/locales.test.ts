import { Brazil_PtBr } from 'romcal/dist/bundles/brazil';
import { France_Fr } from 'romcal/dist/bundles/france';

import Romcal from '../lib';

describe('Testing localization functionality', () => {
  test('If the locale is set to "fr", romcal should output text in French', async () => {
    const date = await new Romcal({ localizedCalendar: France_Fr }).getOneLiturgicalDay(
      'all_saints',
    );
    expect(date?.name).toBe('Tous les Saints');
  });

  test('If the locale is set to "pt-BR", romcal should output text in Portuguese', async () => {
    const date = await new Romcal({ localizedCalendar: Brazil_PtBr }).getOneLiturgicalDay(
      'all_saints',
    );
    expect(date?.name).toBe('Todos os Santos');
  });
});
