import { France_Toulouse_Fr } from '@dist/rite-roman1969/bundles/france.toulouse';

import { generate } from './helpers/calendar';

// The Ordo of the ecclesiastical province of Toulouse keeps the proper memorial of Saint Aventin
// on 13 June and allows the general memorial of Saint Anthony of Padua to be celebrated instead
// (`allowSimilarRankItems` on the proper memorial). Neither memorial takes the place of a Sunday.
describe('A proper memorial allowing similar rank items and a general memorial on the same day', () => {
  test('Saint Aventin is celebrated on 13 June 2025, Saint Anthony of Padua may be celebrated instead', async () => {
    const calendar = await generate(France_Toulouse_Fr, 2025);
    expect(calendar['2025-06-13'].map((d) => d.id)).toEqual(['aventin_of_larboust_martyr', 'anthony_of_padua_priest']);
  });

  test('neither memorial is celebrated on Sunday 13 June 2021', async () => {
    const calendar = await generate(France_Toulouse_Fr, 2021);
    expect(calendar['2021-06-13'].map((d) => d.id)).toEqual(['ordinary_time_11_sunday']);
  });
});
