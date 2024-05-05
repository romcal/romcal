import {
  GeneralRoman_Cs,
  GeneralRoman_En,
  GeneralRoman_EnGb,
  GeneralRoman_EnIe,
  GeneralRoman_Es,
  GeneralRoman_Fr,
  GeneralRoman_It,
  GeneralRoman_La,
  GeneralRoman_Pl,
  GeneralRoman_PtBr,
  GeneralRoman_Sk,
} from '../../dist/bundles/general-roman';

import { Fixture } from '../type/fixture.type';

export const seasonalWeekNumberLocalisationFixture: Fixture = [
  {
    calendar: GeneralRoman_Cs,
    tests: [
      {
        key: 'divine_mercy_sunday',
        value: '2. neděle velikonoční nebo Neděle Božího milosrdenství',
      },
      { key: 'sunday_of_the_word_of_god', value: '3. neděle v mezidobí, nebo Neděle Božího slova' },
    ],
  },
  {
    calendar: GeneralRoman_En,
    tests: [
      {
        key: 'divine_mercy_sunday',
        value: 'Second Sunday of Easter or Sunday of Divine Mercy',
      },
      { key: 'sunday_of_the_word_of_god', value: 'Third Sunday in Ordinary Time, or Sunday of the Word of God' },
    ],
  },
  {
    calendar: GeneralRoman_EnGb,
    tests: [
      {
        key: 'divine_mercy_sunday',
        value: 'Second Sunday of Easter or Sunday of Divine Mercy',
      },
      { key: 'sunday_of_the_word_of_god', value: 'Third Sunday in Ordinary Time, or Sunday of the Word of God' },
    ],
  },
  {
    calendar: GeneralRoman_EnIe,
    tests: [
      {
        key: 'divine_mercy_sunday',
        value: 'Second Sunday of Easter or Sunday of Divine Mercy',
      },
      { key: 'sunday_of_the_word_of_god', value: 'Third Sunday in Ordinary Time, or Sunday of the Word of God' },
    ],
  },
  {
    calendar: GeneralRoman_Es,
    tests: [
      {
        key: 'divine_mercy_sunday',
        value: '2º domingo de Pascua o Domingo de la Divina Misericordia',
      },
      { key: 'sunday_of_the_word_of_god', value: '3º domingo del Tiempo Ordinario, o domingo de la Palabra de Dios' },
    ],
  },
  {
    calendar: GeneralRoman_Fr,
    tests: [
      {
        key: 'divine_mercy_sunday',
        value: 'Deuxième dimanche de Pâques ou de la Divine Miséricorde',
      },
      {
        key: 'sunday_of_the_word_of_god',
        value: 'Troisième dimanche du Temps Ordinaire, ou Dimanche de la Parole de Dieu',
      },
    ],
  },
  {
    calendar: GeneralRoman_It,
    tests: [
      {
        key: 'divine_mercy_sunday',
        value: 'II domenica di Pasqua o Domenica della Divina Misericordia',
      },
      { key: 'sunday_of_the_word_of_god', value: 'III domenica del Tempo Ordinario, o Domenica della Parola di Dio' },
    ],
  },
  {
    calendar: GeneralRoman_La,
    tests: [
      {
        key: 'divine_mercy_sunday',
        value: 'Dominica in octava Paschæ seu Dominica de Divina Misericordia',
      },
      { key: 'sunday_of_the_word_of_god', value: 'Dominica tertia per annum, seu Dominica Verbi Dei' },
    ],
  },
  {
    calendar: GeneralRoman_Pl,
    tests: [
      {
        key: 'divine_mercy_sunday',
        value: '2 Niedziela Wielkanocna czyli Niedziela Miłosierdzia Bożego',
      },
      { key: 'sunday_of_the_word_of_god', value: '3 Niedziela zwykła, czyli Niedziela Słowa Bożego' },
    ],
  },
  {
    calendar: GeneralRoman_PtBr,
    tests: [
      {
        key: 'divine_mercy_sunday',
        value: '2º Domingo do Tempo Pascal ou Domingo da Misericórdia',
      },
      { key: 'sunday_of_the_word_of_god', value: '3º Domingo do Tempo Comum, ou Domingo da Palavra de Deus' },
    ],
  },
  {
    calendar: GeneralRoman_Sk,
    tests: [
      {
        key: 'divine_mercy_sunday',
        value: '2. veľkonočná nedeľa alebo Nedeľa Božieho milosrdenstva',
      },
      { key: 'sunday_of_the_word_of_god', value: '3. nedeľa v Cezročnom období, alebo Nedeľa Božieho slova' },
    ],
  },
];
