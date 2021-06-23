import { Locale } from '@romcal/types/locale';

export const locale: Locale = {
  key: 'en-gb',

  roman_rite: {
    seasons: {
      advent: {
        season: 'Advent',
      },

      christmas_time: {
        season: 'Christmastide',
        octave: '{{count}}º Day of Christmas Octave',
      },

      easter_time: {
        season: 'Eastertide',
      },
    },

    celebrations: {
      corpus_christi: 'Most Holy Body and Blood of the Lord',
      holy_thursday: 'Maundy Thursday',
    },
  },

  martyrology: {
    bernardine_of_siena_priest:
      'Saint Bernardine of Siena, Priest, Religious and Missionary', // TODO: This key should be removed after one can add titles within celebration definions
    louis_grignion_de_montfort_priest:
      'Saint Louis Marie Grignion de Montfort, Priest',
    paulina_of_the_agonizing_heart_of_jesus_visintainer_virgin:
      'Saint Paulina of the Agonising Heart of Jesus Visintainer, Virgin',
    pius_v_pope: 'Saint Pius V, Pope and Religious', // TODO: This key should be removed after one can add titles within celebration definions
    raymond_of_penyafort_priest: 'Saint Raymond of Peñafort, Priest',
    seven_holy_founders_of_the_servite_order:
      'Seven Founders of the Order of Servants of the Blessed Virgin Mary',
  },
};
