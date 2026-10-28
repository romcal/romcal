import { Locale } from '@internal/generator';

export const locale: Locale = {
  id: 'en-ie',

  // src: National Proper for Ireland (Prot. N. 816/07/L, 10 July 2007),
  // https://www.catholicbishops.ie/wp-content/uploads/2024/09/National-Proper-for-Ireland-web.pdf
  names: {
    all_saints_of_ireland: 'All the Saints of Ireland',
    brigid_of_kildare_virgin_copatroness_of_ireland: 'Saint Brigid, Abbess, Copatroness of Ireland',
    columban_of_luxeuil_abbot: 'Saint Columban, Abbot and Missionary', // TODO: This property should be removed after one can add titles within celebration definions.
    eoghan_of_ardstraw_bishop: 'Saint Eugene, Bishop',
    finnian_of_clonard_bishop: 'Saint Finnian, Bishop',
    irish_martyrs: 'The Irish Martyrs',
    // src: https://www.vatican.va/content/paul-vi/en/homilies/1975/documents/hf_p-vi_hom_19751012.html
    oliver_plunket_bishop: 'Saint Oliver Plunkett, Bishop and Martyr',
    virgilius_of_salzburg_bishop: 'Saint Fergal, Bishop and Missionary',
    willibrord_of_utrecht_bishop: 'Saint Willibrord, Bishop and Missionary', // TODO: This property should be removed after one can add titles within celebration definions.
  },
};
