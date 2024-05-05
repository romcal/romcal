import { GeneralRoman_La } from '../../dist/bundles/general-roman';

import { Fixture } from '../type/fixture.type';

export const laOrdinalNumberGenderFixture: Fixture = [
  {
    calendar: GeneralRoman_La,
    tests: [
      { key: 'advent_1_sunday', value: 'Dominica prima Adventus' },
      { key: 'advent_2_sunday', value: 'Dominica secunda Adventus' },
      { key: 'advent_3_sunday', value: 'Dominica tertia Adventus' },
      { key: 'advent_4_sunday', value: 'Dominica quarta Adventus' },
      { key: 'lent_1_sunday', value: 'Dominica prima Quadragesimæ' },
      { key: 'lent_2_sunday', value: 'Dominica secunda Quadragesimæ' },
      { key: 'lent_3_sunday', value: 'Dominica tertia Quadragesimæ' },
      { key: 'lent_4_sunday', value: 'Dominica quarta Quadragesimæ' },
      { key: 'lent_5_sunday', value: 'Dominica quinta Quadragesimæ' },
      // Note: `easter_sunday` is used instead of `easter_time_1_sunday`.
      // Note: `divine_mercy_sunday` is used instead of `easter_time_2_sunday`.
      { key: 'easter_time_3_sunday', value: 'Dominica tertia Paschæ' },
      { key: 'easter_time_4_sunday', value: 'Dominica quarta Paschæ' },
      { key: 'easter_time_5_sunday', value: 'Dominica quinta Paschæ' },
      { key: 'easter_time_6_sunday', value: 'Dominica sexta Paschæ' },
      { key: 'easter_time_7_sunday', value: 'Dominica septima Paschæ' },
      // Note: There is no `ordinary_time_1_sunday`, as the first week of Ordinary Time starts on Monday.
      { key: 'ordinary_time_2_sunday', value: 'Dominica secunda per annum' },
      {
        key: 'sunday_of_the_word_of_god',
        value: 'Dominica tertia per annum, seu Dominica Verbi Dei',
      },
      { key: 'ordinary_time_4_sunday', value: 'Dominica quarta per annum' },
      { key: 'ordinary_time_5_sunday', value: 'Dominica quinta per annum' },
      { key: 'ordinary_time_6_sunday', value: 'Dominica sexta per annum' },
      { key: 'ordinary_time_7_sunday', value: 'Dominica septima per annum' },
      { key: 'ordinary_time_8_sunday', value: 'Dominica octava per annum' },
      { key: 'ordinary_time_9_sunday', value: 'Dominica nona per annum' },
      { key: 'ordinary_time_10_sunday', value: 'Dominica decima per annum' },
      { key: 'ordinary_time_11_sunday', value: 'Dominica undecima per annum' },
      { key: 'ordinary_time_12_sunday', value: 'Dominica duodecima per annum' },
      {
        key: 'ordinary_time_13_sunday',
        value: 'Dominica decima tertia per annum',
      },
      {
        key: 'ordinary_time_14_sunday',
        value: 'Dominica decima quarta per annum',
      },
      {
        key: 'ordinary_time_15_sunday',
        value: 'Dominica decima quinta per annum',
      },
      {
        key: 'ordinary_time_16_sunday',
        value: 'Dominica decima sexta per annum',
      },
      {
        key: 'ordinary_time_17_sunday',
        value: 'Dominica decima septima per annum',
      },
      {
        key: 'ordinary_time_18_sunday',
        value: 'Dominica decima octava per annum',
      },
      { key: 'ordinary_time_19_sunday', value: 'Dominica decima nona per annum' },
      { key: 'ordinary_time_20_sunday', value: 'Dominica vigesima per annum' },
      {
        key: 'ordinary_time_21_sunday',
        value: 'Dominica vigesima prima per annum',
      },
      {
        key: 'ordinary_time_22_sunday',
        value: 'Dominica vigesima secunda per annum',
      },
      {
        key: 'ordinary_time_23_sunday',
        value: 'Dominica vigesima tertia per annum',
      },
      {
        key: 'ordinary_time_24_sunday',
        value: 'Dominica vigesima quarta per annum',
      },
      {
        key: 'ordinary_time_25_sunday',
        value: 'Dominica vigesima quinta per annum',
      },
      {
        key: 'ordinary_time_26_sunday',
        value: 'Dominica vigesima sexta per annum',
      },
      {
        key: 'ordinary_time_27_sunday',
        value: 'Dominica vigesima septima per annum',
      },
      {
        key: 'ordinary_time_28_sunday',
        value: 'Dominica vigesima octava per annum',
      },
      {
        key: 'ordinary_time_29_sunday',
        value: 'Dominica vigesima nona per annum',
      },
      { key: 'ordinary_time_30_sunday', value: 'Dominica trigesima per annum' },
      {
        key: 'ordinary_time_31_sunday',
        value: 'Dominica trigesima prima per annum',
      },
      {
        key: 'ordinary_time_32_sunday',
        value: 'Dominica trigesima secunda per annum',
      },
      {
        key: 'ordinary_time_33_sunday',
        value: 'Dominica trigesima tertia per annum',
      },
      // Note: `our_lord_jesus_christ_king_of_the_universe` is used instead of `ordinary_time_34_sunday`.
    ],
  },
];
