import { Title } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

import { Europe } from './europe';

export class Germany extends CalendarDef {
  ParentCalendar = Europe;

  inputs: Inputs = {
    john_nepomucene_neumann_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 5 },
    },

    valentine_of_raetia_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 7 },
    },

    severinus_of_noricum_monk: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 8 },
    },

    meinrad_of_einsiedeln_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 21 },
    },

    henry_suso_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 23 },
    },

    rabanus_maurus_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 4 },
    },

    matthias_apostle: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 2, date: 24 },
    },

    walpurga_of_heidenheim_abbess: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 25 },
    },

    fridolin_of_sackingen_monk: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 6 },
    },

    bruno_of_querfurt_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 9 },
    },

    matilda_of_ringelheim: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 14 },
    },

    clement_mary_hofbauer_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 15 },
    },

    gertrude_of_nivelles_abbess: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 17 },
    },

    ludger_of_munster_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 26 },
    },

    leo_ix_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 19 },
    },

    marcel_callo_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 19 },
    },

    conrad_of_parzham_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 21 },
    },

    peter_canisius_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 27 },
    },

    florian_of_lorch_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 4 },
      martyrology: ['florian_of_lorch_martyr', 'companions_martyrs'],
    },

    gotthard_of_hildesheim_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 5 },
    },

    john_nepomucene_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 16 },
    },

    hermann_joseph_of_steinfeld_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 21 },
    },

    vitus_of_lucania_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 15 },
    },

    benno_of_meissen_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 16 },
    },

    hemma_of_gurk: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 27 },
    },

    otto_of_bamberg_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 30 },
    },

    visitation_of_mary: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 7, date: 2 },
    },

    ulrich_of_augsburg_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 4 },
    },

    willibald_of_eichstatt_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 7 },
    },

    kilian_of_wurzburg_bishop_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 8 },
      martyrology: ['kilian_of_wurzburg_bishop', 'companions_martyrs'],
    },

    canute_iv_of_denmark_eric_ix_of_sweden_and_olaf_ii_of_norway_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 10 },
      martyrology: ['canute_iv_of_denmark_martyr', 'eric_ix_of_sweden_martyr', 'olaf_ii_of_norway_martyr'],
    },

    henry_ii_emperor_and_cunigunde_of_luxembourg: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 13 },
      martyrology: ['henry_ii_emperor', 'cunigunde_of_luxembourg'],
    },

    margaret_of_antioch_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 20 },
    },

    christopher_of_palestine_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 24 },
    },

    paulinus_of_trier_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 31 },
    },

    lambert_of_maastricht_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 18 },
    },

    maurice_of_agaunum_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 22 },
      martyrology: ['maurice_of_agaunum_martyr', 'companions_martyrs'],
    },

    rupert_of_salzburg_and_virgilius_of_salzburg_bishops: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 24 },
      martyrology: ['rupert_of_salzburg_bishop', 'virgilius_of_salzburg_bishop'],
    },

    nicholas_of_flue_hermit: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 25 },
    },

    leoba_of_tauberbischofsheim_abbess: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 28 },
    },

    gall_of_switzerland_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 16 },
    },

    wendelin_of_trier_hermit: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 20 },
    },

    ursula_of_cologne_and_companions_virgins: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 21 },
      martyrology: [
        'ursula_of_cologne_virgin',
        {
          id: 'companions_martyrs',
          titles: { append: [Title.Virgin] },
        },
      ],
    },

    wolfgang_of_regensburg_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 31 },
    },

    hubert_of_liege_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 3 },
    },

    pirmin_of_hornbach_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 3 },
    },

    leonard_of_noblac_hermit: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 6 },
    },

    willibrord_of_utrecht_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 7 },
    },

    leopold_iii_of_babenberg: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 15 },
    },

    gertrude_the_great_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 17 },
    },

    elizabeth_of_hungary_religious: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 19 },
    },

    corbinian_of_freising_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 20 },
    },

    conrad_of_constance_and_gebhard_of_constance_bishops: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 26 },
      martyrology: ['conrad_of_constance_bishop', 'gebhard_of_constance_bishop'],
    },

    lucius_of_chur_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 2 },
    },

    barbara_of_heliopolis_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 4 },
    },

    adolph_kolping_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 4 },
    },

    anno_of_cologne_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 5 },
    },

    odile_of_alsace_abbess: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 13 },
    },

    stephen_the_first_martyr: {
      isHolyDayOfObligation: true,
    },

    easter_monday: {
      isHolyDayOfObligation: true,
    },

    mary_mother_of_the_church: {
      isHolyDayOfObligation: true,
    },
  };
}
