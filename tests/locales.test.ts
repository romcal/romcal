import { Brazil_PtBr } from 'romcal/dist/bundles/brazil';
import { France_Fr } from 'romcal/dist/bundles/france';

import { locales } from './../lib/locales/index'

import Romcal from '../lib';

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

describe('Testing localization data', () => {
  const localeList = Object.keys(locales)
  const sourceLocaleName = 'En'

  const keyPerLocaleList: {[k: string]: string[]} = localeList
    .reduce((a, c) => ({
      ...a,
      [c]: Object.keys(locales[c].names).sort((a, b) => a === b ? 0 : a < b ? -1 : 1)
    }), {})

  for (const l of localeList.filter(i => i !== sourceLocaleName)) {
    test(`If \`${l}\` contain only keys from \`${sourceLocaleName}\` in \`names\``, async () => {
      expect(keyPerLocaleList[l].filter(x => !keyPerLocaleList[sourceLocaleName].includes(x))).toBeArrayOfSize(0)
    })
  }
});
