import { RomcalLocale } from '@romcal/models/romcal-locale';

export default {
  advent: {
    season: 'Advent',
    // feria: '{{day}} of the {{week}} week of Advent',
    // sunday: '{{week}} Sunday of Advent',  // us
  },
  christmastide: {
    season: 'Christmastide',
    // day: '{{day}} of Christmastide',
    octave: '{{count}} Day of Christmas Octave',
    // sunday: '{{count}} Sunday of Christmas',
  },
  lent: {
    season: 'Lent',
    // feria: '{{day}} of the {{week}} week of Lent',
    // sunday: '{{week}} Sunday of Lent',  // us
    // dayAfterAshWed: '{{day}} after Ash Wednesday',  // us
  },
  eastertide: {
    season: 'Eastertide',
    // feria: '{{day}} of the {{week}} week of Easter',
    // sunday: '{{week}} Sunday of Easter',  // us
    // octave: '{{day}} within the Octave of Easter',  // us; Was: `Easter {{day}}`
  },
  celebrations: {
    corpusChristi: 'Most Holy Body and Blood of the Lord',
    holyThursday: 'Maundy Thursday',
  },
  sanctoral: {
    saintRaymondOfPenyafortPriest: 'Saint Raymond of Peñafort, Priest',
    sevenHolyFoundersOfTheServiteOrder: 'Seven Founders of the Order of Servants of the Blessed Virgin Mary',
    saintLouisMarieGrignionDeMontfortPriest: 'Saint Louis Marie Grignion de Montfort, Priest',
    saintPiusVPope: 'Saint Pius V, Pope and Religious',  // This key should be removed after one can add titles within celebration definions
    saintPaulinaOfTheAgonizingHeartOfJesusVirgin: 'Saint Paulina of the Agonising Heart of Jesus, virgin',
    saintBernardineOfSienaPriest: 'Saint Bernardine of Siena, Priest, Religious and Missionary',  // This key should be removed after one can add titles within celebration definions
  },
} as RomcalLocale;
