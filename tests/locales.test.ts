/*
    The MIT License (MIT)

    Copyright (c) 2014 Pereira, Julian Matthew

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
*/

import Romcal from '@romcal/main';
import { France_Fr } from 'bundles/france.fr';
import 'jest-extended';

describe('Testing localization functionality', () => {
  test('If the locale is set to "fr", romcal should output text in French', async () => {
    const date = await new Romcal({ localizedCalendar: France_Fr }).getOneLiturgicalDay(
      'all_saints',
    );
    expect(date?.name).toBe('Tous les Saints');
  });

  // todo: will be fixed with the prebuild localised calendars

  // test('If the locale is set to "en-gb", romcal should output text in British English', async () => {
  //   const date = await new Romcal({ locale: EnGb }).getOneLiturgicalDay('pius_v_pope');
  //   expect(date?.name).toBe('Saint Pius V, Pope and Religious');
  // });

  // test('If a string is missing in the "fr-xx" locale, romcal should fall back to base French', async () => {
  //   const date = await new Romcal({ locale: { key: 'fr-xx' } }).getOneLiturgicalDay('all_saints');
  //   expect(date?.name).toBe('Tous les Saints');
  // });
});
