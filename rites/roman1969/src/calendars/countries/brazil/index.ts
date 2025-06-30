import { PatronTitle } from '../../../constants/martyrology-metadata';
import { Precedences } from '../../../constants/precedences';
import { CalendarDef } from '../../../models/calendar-def';
import { Inputs } from '../../../types/calendar-def';
import { Americas } from '../../regions/americas';

export class Brazil extends CalendarDef {
  ParentCalendars = [Americas];

  inputs: Inputs = {
    albertina_berkenbrock_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 6, date: 15 },
    },

    andrew_de_soveral_and_ambrose_francis_ferro_priests: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 3 },
      martyrology: ['andrew_de_soveral_priest', 'ambrose_francis_ferro_priest'],
    },

    anthony_of_saint_anne_galvao_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 13 },
    },

    // (2)
    dulce_lopes_pontes_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 13 },
    },

    holy_innocents_martyrs: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 12, date: 28 },
    },

    ignatius_de_azevedo_priest_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 17 },
      martyrology: ['ignatius_de_azevedo_priest', 'companions_martyrs'],
    },

    joseph_de_anchieta_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 6, date: 9 },
    },

    // (1)
    martin_de_porres_religious: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 3 },
    },

    our_lady_of_aparecida: {
      customLocaleId: 'our_lady_of_aparecida_patroness_of_brazil',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 10, date: 12 },
      titles: { append: [PatronTitle.PatronessOfBrazil] },
    },

    our_lady_of_mount_carmel: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 7, date: 16 },
    },

    paulina_of_the_agonizing_heart_of_jesus_visintainer_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 9 },
    },

    roch_gonzalez_alphonsus_rodriguez_and_john_del_castillo_priests: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 19 },
      martyrology: ['roch_gonzalez_priest', 'alphonsus_rodriguez_priest', 'john_del_castillo_priest'],
    },

    rose_of_lima_virgin: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 8, date: 23 },
    },
  };
}
/*
 Sources:
  (1) Palavra do Senhor III - Lecionário para as missas dos Santos, dos comuns,
      para diversas necessidades e votivas - Ed. Paulus (Lectionary for the Masses of Saints)
      Respecting Upper and LowerCase (https://archive.org/details/lecionario-santoral-indice)
  (2) Calendário Próprio do Brasil - CNBB (https://www.cnbb.org.br/missal-romano-calendario-proprio-dos-santos-brasil/)
*/
/*
 Change log:
 2025, jun - put in alphabetical order, added martin_de_porres_religious, holy_innocents_martyrs, dulce_lopes_pontes_virgin
*/
