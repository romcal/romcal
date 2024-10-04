import { PatronTitle } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

import { France } from './france';

// src:
// - mr_fr_1982_ed2_coutances
// - https://en.wikipedia.org/wiki/Roman_Catholic_Diocese_of_Coutances
// - https://www.diocese50.fr/les-paroisses-et-les-doyennes/notre-dame-coutances/les-saints-du-diocese
export class France_Coutances extends CalendarDef {
  ParentCalendar = France;

  inputs: Inputs = {
    // src: mr_fr_1982_ed2_coutances
    our_lady_of_pontmain: {
      dateDef: { month: 1, date: 17 },
      precedence: Precedences.ProperMemorial_11b,
    },

    // src: mr_fr_1982_ed2_coutances
    gaud_of_evreux_bishop: {
      dateDef: { month: 1, date: 30 },
      precedence: Precedences.OptionalMemorial_12,
    },

    // src: mr_fr_1982_ed2_coutances
    auguste_chapdelaine_priest: {
      dateDef: { month: 2, date: 28 },
      precedence: Precedences.ProperMemorial_11b,
    },

    // src: mr_fr_1982_ed2_coutances
    leon_de_carentan_bishop: {
      dateDef: { month: 3, date: 1 },
      precedence: Precedences.OptionalMemorial_12,
    },

    // src: mr_fr_1982_ed2_coutances
    placide_eulalie_victoire_jacqueline_viel_virgin: {
      dateDef: { month: 3, date: 4 },
      precedence: Precedences.OptionalMemorial_12,
    },

    // src: https://www.diocese50.fr/les-paroisses-et-les-doyennes/notre-dame-coutances/les-saints-du-diocese/bienheureuse-marthe-le-bouteiller-vierge
    marthe_aimee_adele_le_bouteiller_virgin: {
      dateDef: { month: 3, date: 18 },
      precedence: Precedences.OptionalMemorial_12,
    },

    // src: mr_fr_1982_ed2_coutances
    paterne_of_avranches_bishop_and_scubilion_abbot: {
      dateDef: { month: 4, date: 16 },
      martyrology: ['paterne_of_avranches_bishop', 'scubilion_abbot'],
      precedence: Precedences.ProperMemorial_11b,
    },

    // src: mr_fr_1982_ed2_coutances
    william_firmatus_abbot: {
      dateDef: { month: 4, date: 24 },
      precedence: Precedences.OptionalMemorial_12,
    },

    // src: mr_fr_1982_ed2_coutances
    achard_of_saint_victor_bishop: {
      dateDef: { month: 4, date: 29 },
      precedence: Precedences.OptionalMemorial_12,
    },

    // src: mr_fr_1982_ed2_coutances
    marculf_of_normandy_abbot: {
      dateDef: { month: 5, date: 4 },
      precedence: Precedences.ProperMemorial_11b,
    },

    // src: mr_fr_1982_ed2_coutances
    germanus_of_normandy_bishop: {
      dateDef: { month: 5, date: 6 },
      precedence: Precedences.OptionalMemorial_12,
    },

    // src: https://www.diocese50.fr/les-paroisses-et-les-doyennes/notre-dame-coutances/les-saints-du-diocese/bienheureuse-marie-catherine-de-saint-augustin-vierge
    mary_catherine_of_saint_augustine_catherine_de_simon_de_longpre_virgin: {
      dateDef: { month: 5, date: 8 },
      precedence: Precedences.OptionalMemorial_12,
    },

    // src: mr_fr_1982_ed2_coutances
    ortaire_de_landelles_abbot: {
      dateDef: { month: 5, date: 21 },
      precedence: Precedences.OptionalMemorial_12,
    },

    // src: mr_fr_1982_ed2_coutances
    severus_of_avranches_bishop: {
      dateDef: { month: 7, date: 6 },
      precedence: Precedences.OptionalMemorial_12,
    },

    // src: mr_fr_1982_ed2_coutances
    thomas_becket_bishop: {
      dateDef: { month: 7, date: 7 },
    },

    // src: mr_fr_1982_ed2_coutances
    dedication_of_the_cathedral_of_coutances_france: {
      dateDef: { month: 7, date: 12 },
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
    },

    // src: mr_fr_1982_ed2_coutances
    helier_of_jersey_martyr: {
      dateDef: { month: 7, date: 16 },
      precedence: Precedences.OptionalMemorial_12,
    },

    // src: mr_fr_1982_ed2_coutances
    marie_madeleine_postel_virgin: {
      dateDef: { month: 7, date: 17 },
      precedence: Precedences.ProperMemorial_11b,
    },

    // src: mr_fr_1982_ed2_coutances
    clair_of_normandy_priest: {
      dateDef: { month: 7, date: 18 },
      precedence: Precedences.OptionalMemorial_12,
    },

    // src: mr_fr_1982_ed2_coutances
    john_eudes_priest: {
      precedence: Precedences.ProperMemorial_11b,
    },

    // src: mr_fr_1982_ed2_coutances
    jacques_francois_lefranc_martyr_and_martyrs_of_the_revolution: {
      dateDef: { month: 9, date: 2 },
      precedence: Precedences.ProperMemorial_11b,
      martyrology: ['jacques_francois_lefranc_martyr', { id: 'companions_martyrs', count: 23 }],
    },

    // src: mr_fr_1982_ed2_coutances
    omer_audomar_bishop: {
      dateDef: { month: 9, date: 9 },
      precedence: Precedences.OptionalMemorial_12,
    },

    // src: mr_fr_1982_ed2_coutances
    aubert_of_avranches_bishop: {
      dateDef: { month: 9, date: 10 },
      precedence: Precedences.ProperMemorial_11b,
    },

    // src: mr_fr_1982_ed2_coutances
    floscellus_of_normandy_martyr: {
      dateDef: { month: 9, date: 17 },
      precedence: Precedences.OptionalMemorial_12,
    },

    // src: mr_fr_1982_ed2_coutances
    senerius_of_normandy_bishop: {
      dateDef: { month: 9, date: 18 },
      precedence: Precedences.OptionalMemorial_12,
    },

    // src: mr_fr_1982_ed2_coutances
    vitalis_of_savigny_bishop: {
      dateDef: { month: 9, date: 19 },
      precedence: Precedences.ProperMemorial_11b,
    },

    // src: mr_fr_1982_ed2_coutances
    laud_of_coutances_bishop: {
      customLocaleId: 'laud_of_coutances_bishop_patron_of_the_diocese_of_coutances',
      dateDef: { month: 9, date: 22 },
      precedence: Precedences.ProperFeast_PrincipalPatronOfADiocese_8a,
      titles: { append: [PatronTitle.PatronOfTheDiocese] },
    },

    // src: mr_fr_1982_ed2_coutances
    john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs: {
      customLocaleId: 'john_de_brebeuf_priest_and_companions_martyrs',
      dateDef: { month: 9, date: 25 },
      precedence: Precedences.ProperMemorial_11b,
      martyrology: ['john_de_brebeuf_priest', 'companions_martyrs'],
    },

    // src: mr_fr_1982_ed2_coutances
    all_holy_bishops_of_the_diocese_of_coutances: {
      dateDef: { month: 10, date: 12 },
      precedence: Precedences.ProperMemorial_11b,
    },

    // src: https://www.diocese50.fr/les-paroisses-et-les-doyennes/notre-dame-coutances/les-saints-du-diocese/bienheureux-pierre-adrien-toulorge-martyr
    pierre_adrien_toulorge_priest: {
      dateDef: { month: 10, date: 13 },
      precedence: Precedences.ProperMemorial_11b,
    },

    // src: mr_fr_1982_ed2_coutances
    dedication_of_the_basilica_of_mont_saint_michel_france: {
      dateDef: { month: 10, date: 16 },
      precedence: Precedences.ProperMemorial_11b,
    },

    // src: mr_fr_1982_ed2_coutances
    thomas_helye_priest: {
      dateDef: { month: 10, date: 19 },
      precedence: Precedences.ProperMemorial_11b,
    },

    // src: mr_fr_1982_ed2_coutances
    adeline_de_mortain_abbess_and_the_saints_of_savigny: {
      dateDef: { month: 10, date: 20 },
      precedence: Precedences.OptionalMemorial_12,
      martyrology: ['adeline_de_mortain_abbess', 'geoffrey_of_savigny_abbot', 'guillaume_niobe_of_savigny_religious'],
    },

    // src: mr_fr_1982_ed2_coutances
    magloire_of_dol_monk: {
      dateDef: { month: 10, date: 25 },
      precedence: Precedences.OptionalMemorial_12,
    },

    // src: mr_fr_1982_ed2_coutances
    fromundus_of_coutances_bishop: {
      dateDef: { month: 10, date: 26 },
      precedence: Precedences.ProperMemorial_11b,
    },

    // src: mr_fr_1982_ed2_coutances
    all_saints_of_the_diocese_of_coutances: {
      dateDef: { month: 11, date: 8 },
      precedence: Precedences.ProperMemorial_11b,
    },

    // src: mr_fr_1982_ed2_coutances
    rumpharius_of_coutances_bishop: {
      dateDef: { month: 11, date: 19 },
      precedence: Precedences.ProperMemorial_11b,
    },
  };
}
