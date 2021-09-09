import 'jest-extended';
import { France_Fr } from 'romcal/dist/bundles/france';
import Romcal from '../lib';

describe('Testing localization functionality', () => {
  test('If the locale is set to "fr", romcal should output text in French', async () => {
    const date = await new Romcal({ localizedCalendar: France_Fr }).getOneLiturgicalDay('all_saints');
    expect(date?.name).toBe('Tous les Saints');
  });

  // todo: will be fixed with the prebuild localised calendars

  // test('If the locale is set to "en-gb", romcal should output text in British English', async () => {
  //   const date = await new Romcal({ localizedCalendar: GeneralRoman_EnGb }).getOneLiturgicalDay(
  //     'pius_v_pope',
  //   );
  //   expect(date?.name).toBe('Saint Pius V, Pope and Religious');
  // });

  // test('If a string is missing in the "fr-xx" locale, romcal should fall back to base French', async () => {
  //   const date = await new Romcal({ locale: { key: 'fr-xx' } }).getOneLiturgicalDay('all_saints');
  //   expect(date?.name).toBe('Tous les Saints');
  // });
});
