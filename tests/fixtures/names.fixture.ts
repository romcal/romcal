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
} from 'romcal/dist/bundles/general-roman';

import { BaseRomcalBundle } from '../../lib/types/bundle'

type Fixture = ({
  /** Base romcal bundle instance */
  c: BaseRomcalBundle,
  /** Localization tests definition */
  t: ({
    /** Liturgical celebration localization key name */
    k: string,
    /** Expected value of a localized liturgical celebration name */
    v: string,
  })[]
})[]

export const fixture: Fixture = [
  {
    c: GeneralRoman_Cs,
    t: [
      {
        k: 'divine_mercy_sunday',
        v: '2. neděle velikonoční nebo Neděle Božího milosrdenství',
      },
      { k: 'sunday_of_the_word_of_god', v: '3. neděle v mezidobí, nebo Neděle Božího slova' },
    ],
  },
  {
    c: GeneralRoman_En,
    t: [
      {
        k: 'divine_mercy_sunday',
        v: 'Second Sunday of Easter or Sunday of Divine Mercy',
      },
      { k: 'sunday_of_the_word_of_god', v: 'Third Sunday in Ordinary Time, or Sunday of the Word of God' },
    ],
  },
  {
    c: GeneralRoman_EnGb,
    t: [
      {
        k: 'divine_mercy_sunday',
        v: 'Second Sunday of Easter or Sunday of Divine Mercy',
      },
      { k: 'sunday_of_the_word_of_god', v: 'Third Sunday in Ordinary Time, or Sunday of the Word of God' },
    ],
  },
  {
    c: GeneralRoman_EnIe,
    t: [
      {
        k: 'divine_mercy_sunday',
        v: 'Second Sunday of Easter or Sunday of Divine Mercy',
      },
      { k: 'sunday_of_the_word_of_god', v: 'Third Sunday in Ordinary Time, or Sunday of the Word of God' },
    ],
  },
  {
    c: GeneralRoman_Es,
    t: [
      {
        k: 'divine_mercy_sunday',
        v: '2º domingo de Pascua o Domingo de la Divina Misericordia',
      },
      { k: 'sunday_of_the_word_of_god', v: '3º domingo del Tiempo Ordinario, o domingo de la Palabra de Dios' },
    ],
  },
  {
    c: GeneralRoman_Fr,
    t: [
      {
        k: 'divine_mercy_sunday',
        v: 'Deuxième dimanche de Pâques ou de la Divine Miséricorde',
      },
      {
        k: 'sunday_of_the_word_of_god',
        v: 'Troisième dimanche du Temps Ordinaire, ou Dimanche de la Parole de Dieu',
      },
    ],
  },
  {
    c: GeneralRoman_It,
    t: [
      {
        k: 'divine_mercy_sunday',
        v: 'II domenica di Pasqua o Domenica della Divina Misericordia',
      },
      { k: 'sunday_of_the_word_of_god', v: 'III domenica del Tempo Ordinario, o Domenica della Parola di Dio' },
    ],
  },
  {
    c: GeneralRoman_La,
    t: [
      {
        k: 'divine_mercy_sunday',
        v: 'Dominica in octava Paschæ seu Dominica de Divina Misericordia',
      },
      { k: 'sunday_of_the_word_of_god', v: 'Dominica tertia per annum, seu Dominica Verbi Dei' },
    ],
  },
  {
    c: GeneralRoman_Pl,
    t: [
      {
        k: 'divine_mercy_sunday',
        v: '2 Niedziela Wielkanocna czyli Niedziela Miłosierdzia Bożego',
      },
      { k: 'sunday_of_the_word_of_god', v: '3 Niedziela zwykła, czyli Niedziela Słowa Bożego' },
    ],
  },
  {
    c: GeneralRoman_PtBr,
    t: [
      {
        k: 'divine_mercy_sunday',
        v: '2º Domingo do Tempo Pascal ou Domingo da Misericórdia',
      },
      { k: 'sunday_of_the_word_of_god', v: '3º Domingo do Tempo Comum, ou Domingo da Palavra de Deus' },
    ],
  },
  {
    c: GeneralRoman_Sk,
    t: [
      {
        k: 'divine_mercy_sunday',
        v: '2. veľkonočná nedeľa alebo Nedeľa Božieho milosrdenstva',
      },
      { k: 'sunday_of_the_word_of_god', v: '3. nedeľa v Cezročnom období, alebo Nedeľa Božieho slova' },
    ],
  },
];
