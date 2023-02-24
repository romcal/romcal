import { France_Fr } from 'romcal/dist/bundles/france';

import Romcal from '../../../../src';

describe('Testing localization functionality', () => {
  test('If the locale is set to "fr", romcal should output text in French', async () => {
    const date = await new Romcal({ localizedCalendar: France_Fr }).getOneLiturgicalDay('all_saints');
    expect(date?.name).toBe('Tous les Saints');
  });
});
