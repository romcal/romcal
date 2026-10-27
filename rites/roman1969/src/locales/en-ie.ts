import { Locale } from '@internal/generator';

export const locale: Locale = {
  id: 'en-ie',

  // src: National Proper for Ireland (Prot. N. 816/07/L, 10 July 2007),
  // https://www.catholicbishops.ie/wp-content/uploads/2024/09/National-Proper-for-Ireland-web.pdf
  names: {
    columban_of_luxeuil_abbot: 'Saint Columban, Abbot and Missionary', // TODO: This property should be removed after one can add titles within celebration definions.
    virgilius_of_salzburg_bishop: 'Saint Fergal, Bishop and Missionary',
    willibrord_of_utrecht_bishop: 'Saint Willibrord, Bishop and Missionary', // TODO: This property should be removed after one can add titles within celebration definions.
  },
};
