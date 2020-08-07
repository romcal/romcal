// TODO: Continue with May 2020: http://www.liturgyoffice.org.uk/Calendar/2020/May.shtml
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
    // octave: '{{count}} Day within the Octave of the Nativity of the Lord',  // us; Was `{{count}} day in the Octave of Christmas`
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
    saintPiusVPope: 'Saint Pius V, Pope and Religious',
    saintPaulinaOfTheAgonizingHeartOfJesusVirgin: 'Saint Paulina of the Agonising Heart of Jesus, virgin',
  },
} as RomcalLocale;
