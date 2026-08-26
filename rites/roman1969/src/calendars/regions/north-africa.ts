import { CommonDefinition as Common } from '../../constants/commons';
import { PatronTitle } from '../../constants/martyrology-metadata';
import { Precedences } from '../../constants/precedences';
import { CalendarDef } from '../../models/calendar-def';
import { Inputs } from '../../types/calendar-def';

import { Africa } from './africa';

// src: https://en.wikipedia.org/wiki/Regional_Episcopal_Conference_of_North_Africa
export class NorthAfrica extends CalendarDef {
  ParentCalendars = [Africa];

  inputs: Inputs = {
    // src: mr_fr_2021_ed3
    fulgentius_of_ruspe_bishop: {
      dateDef: { month: 1, date: 3 },
      precedence: Precedences.OptionalMemorial_12,
      commonsDef: Common.Bishops,
    },

    // src: mr_fr_2021_ed3
    longinus_of_pomaria_eugenius_of_carthage_and_vindemialis_of_capsa_bishops: {
      dateDef: { month: 1, date: 5 },
      precedence: Precedences.OptionalMemorial_12,
      martyrology: ['longinus_of_pomaria_bishop', 'eugenius_of_carthage_bishop', 'vindemialis_of_capsa_bishop'],
      commonsDef: Common.Bishops,
    },

    // src: mr_fr_2021_ed3
    quodvultdeus_of_carthage_and_deogratias_of_carthage_bishops: {
      dateDef: { month: 1, date: 8 },
      precedence: Precedences.OptionalMemorial_12,
      martyrology: ['quodvultdeus_of_carthage_bishop', 'deogratias_of_carthage_bishop'],
      commonsDef: Common.Bishops,
    },

    // src: mr_fr_2021_ed3
    victor_i_miltiades_and_gelasius_i_popes: {
      dateDef: { month: 1, date: 11 },
      precedence: Precedences.ProperMemorial_11b,
      martyrology: ['victor_i_pope', 'miltiades_i_pope', 'gelasius_i_pope'],
      commonsDef: Common.Popes,
    },

    // src: mr_fr_2021_ed3
    celerina_of_carthage_and_companions_martyrs: {
      dateDef: { month: 2, date: 4 },
      precedence: Precedences.OptionalMemorial_12,
      martyrology: ['celerina_of_carthage_martyr', 'companions_martyrs'],
      commonsDef: Common.Martyrs,
    },

    // src: mr_fr_2021_ed3
    perpetua_of_carthage_and_felicity_of_carthage_martyrs: {
      customLocaleId: 'perpetua_of_carthage_and_felicity_of_carthage_and_companions_martyrs',
      precedence: Precedences.ProperFeast_8f,
      martyrology: ['companions_martyrs'],
      commonsDef: Common.None,
    },

    // src: mr_fr_2021_ed3
    our_lady_of_africa: {
      dateDef: { month: 4, date: 30 },
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      commonsDef: Common.None,
    },

    // src: mr_fr_2021_ed3
    pius_v_pope: {
      dateDef: { month: 5, date: 1 },
    },

    // src: mr_fr_2021_ed3
    james_of_lambaesis_deacon_marian_of_lambaesis_lector_and_companions_martyrs: {
      dateDef: { month: 5, date: 6 },
      precedence: Precedences.OptionalMemorial_12,
      martyrology: ['james_of_lambaesis_deacon', 'marian_of_lambaesis_lector', 'companions_martyrs'],
      commonsDef: Common.Martyrs,
    },

    // src: mr_fr_2021_ed3
    pierre_claverie_bishop_and_companions_religious_martyrs: {
      dateDef: { month: 5, date: 8 },
      precedence: Precedences.OptionalMemorial_12,
      martyrology: ['pierre_claverie_bishop', 'companions_martyrs'],
      commonsDef: [Common.Martyrs, Common.Religious],
    },

    // src: mr_fr_2021_ed3
    optatus_of_milevis_bishop: {
      dateDef: { month: 6, date: 4 },
      precedence: Precedences.ProperMemorial_11b,
      commonsDef: Common.Bishops,
    },

    // src: mr_fr_2021_ed3
    marciana_of_mauretania_virgin: {
      dateDef: { month: 7, date: 10 },
      precedence: Precedences.OptionalMemorial_12,
      commonsDef: [Common.VirginMartyrs, Common.Virgins],
    },

    // src: mr_fr_2021_ed3
    speratus_of_scillium_and_companions_martyrs: {
      dateDef: { month: 7, date: 17 },
      precedence: Precedences.ProperMemorial_11b,
      martyrology: ['speratus_of_scillium_martyr', 'companions_martyrs'],
      commonsDef: Common.Martyrs,
    },

    // src: mr_fr_2021_ed3
    monica_of_hippo: {
      customLocaleId: 'monica_of_hippo_mother_of_a_family',
      precedence: Precedences.ProperFeast_8f,
      commonsDef: Common.None,
    },

    // src: mr_fr_2021_ed3
    augustine_of_hippo_bishop: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      commonsDef: Common.None,
    },

    // src: mr_fr_2021_ed3
    alypius_of_thagaste_and_possidius_of_calama_bishops: {
      dateDef: { month: 8, date: 30 },
      precedence: Precedences.ProperMemorial_11b,
      martyrology: ['alypius_of_thagaste_bishop', 'possidius_of_calama_bishop'],
      commonsDef: Common.Bishops,
    },

    // src: mr_fr_2021_ed3
    nemesianus_of_thubunae_and_companions_martyrs: {
      dateDef: { month: 9, date: 10 },
      precedence: Precedences.OptionalMemorial_12,
      martyrology: ['nemesianus_of_thubunae_bishop', 'companions_martyrs'],
      commonsDef: Common.Martyrs,
    },

    // src: mr_fr_2021_ed3
    marcellinus_of_carthage_martyr: {
      dateDef: { month: 9, date: 12 },
      precedence: Precedences.OptionalMemorial_12,
      commonsDef: Common.Martyrs,
    },

    // src: mr_fr_2021_ed3
    cornelius_i_pope_and_cyprian_of_carthage_bishop_martyrs: {
      drop: true,
    },

    // src: mr_fr_2021_ed3
    cyprian_of_carthage_bishop: {
      customLocaleId: 'cyprian_of_carthage_bishop_patron_of_north_africa',
      dateDef: { month: 9, date: 16 },
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      titles: { append: [PatronTitle.PatronOfNorthAfrica] },
      commonsDef: Common.None,
    },

    // src: mr_fr_2021_ed3
    cornelius_i_pope: {
      dateDef: { month: 9, date: 18 },
      precedence: Precedences.ProperMemorial_11b,
      commonsDef: [Common.Martyrs, Common.Popes],
    },

    // src: mr_fr_2021_ed3
    dedication_of_consecrated_churches: {
      dateDef: { month: 10, date: 25 },
      precedence: Precedences.ProperSolemnity_DedicationOfTheOwnChurch_4b,
      commonsDef: Common.DedicationAnniversary_Inside,
    },

    // src: mr_fr_2021_ed3
    marcellus_of_tangier_and_maximilian_of_tebessa_martyrs: {
      dateDef: { month: 10, date: 30 },
      precedence: Precedences.ProperMemorial_11b,
      martyrology: ['marcellus_of_tangier_martyr', 'maximilian_of_tebessa_martyr'],
      commonsDef: Common.Martyrs,
    },

    // src: mr_fr_2021_ed3
    charles_of_jesus_de_foucauld: {
      dateDef: { month: 12, date: 1 },
      precedence: Precedences.OptionalMemorial_12,
      commonsDef: Common.Pastors,
    },

    // src: mr_fr_2021_ed3
    crispina_of_thagora_martyr: {
      dateDef: { month: 12, date: 5 },
      precedence: Precedences.ProperMemorial_11b,
      commonsDef: [Common.Martyrs, Common.HolyWomen],
    },
  };
}
