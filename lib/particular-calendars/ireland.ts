import { PatronTitle, Title } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

import { Europe } from './europe';

export class Ireland extends CalendarDef {
  ParentCalendar = Europe;

  inputs: Inputs = {
    munchin_of_limerick_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 3 },
    },

    ita_of_killeedy_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 1, date: 15 },
    },

    fursa_of_peronne_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 16 },
    },

    aidan_of_ferns_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 30 },
    },

    brigid_of_kildare_virgin: {
      customLocaleId: 'brigid_of_kildare_virgin_copatroness_of_ireland',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      dateDef: { month: 2, date: 1 },
      titles: { append: [PatronTitle.CopatronessOfIreland] },
    },

    mel_of_ardagh_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 7 },
    },

    gobnait_of_ballyvourney_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 11 },
    },

    fintan_of_clonenagh_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 17 },
    },

    david_of_wales_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 1 },
    },

    kieran_of_saigir_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 5 },
    },

    senan_of_inis_cathaigh_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 8 },
    },

    aengus_of_tallaght_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 11 },
    },

    patrick_of_ireland_bishop: {
      customLocaleId: 'patrick_of_ireland_bishop_patron_of_ireland',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      isHolyDayOfObligation: true,
      titles: { append: [PatronTitle.PatronOfIreland] },
    },

    enda_of_aran_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 21 },
    },

    macartan_of_clogher_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 24 },
    },

    ceallach_of_armagh_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 1 },
    },

    laserian_of_leighlin_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 18 },
    },

    asicus_of_elphin_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 27 },
    },

    conleth_of_kildare_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 4 },
    },

    edmund_ignatius_rice_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 5 },
    },

    comgall_of_bangor_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 10 },
    },

    carthage_of_lismore_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 15 },
    },

    brendan_of_clonfert_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 16 },
    },

    kevin_of_glendalough_abbot: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 6, date: 3 },
    },

    jarlath_of_tuam_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 6 },
    },

    colman_of_dromore_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 7 },
    },

    columba_of_iona_abbot: {
      customLocaleId: 'columba_of_iona_abbot_copatron_of_ireland',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      dateDef: { month: 6, date: 9 },
      titles: { append: [Title.Missionary, PatronTitle.CopatronOfIreland] },
    },

    davnet_of_sliabh_beagh_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 14 },
    },

    irish_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 6, date: 20 },
    },

    oliver_plunket_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 1 },
    },

    moninne_of_killeavy_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 6 },
    },

    maelruain_of_tallaght_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 7 },
    },

    kilian_of_wurzburg_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 8 },
    },

    declan_of_ardmore_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 24 },
    },

    muredach_of_killala_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 12 },
    },

    attracta_of_killaraght_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 12 },
    },

    lelia_of_killeely_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 12 },
    },

    fachtna_of_rosscarbery_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 13 },
    },

    our_lady_of_knock: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 8, date: 17 },
    },

    eoghan_of_ardstraw_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 23 },
    },

    fiacre_of_breuil_monk: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 30 },
    },

    aidan_of_lindisfarne_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 31 },
    },

    mac_nissi_of_connor_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 4 },
    },

    ciaran_of_clonmacnoise_abbot: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 9, date: 9 },
    },

    ailbe_of_emly_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 12 },
    },

    finbarr_of_cork_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 25 },
    },

    columba_marmion_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 3 },
    },

    john_henry_newman_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 9 },
    },

    canice_of_kilkenny_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 11 },
    },

    gall_of_switzerland_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 16 },
    },

    otteran_of_iona_monk: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 27 },
    },

    colman_of_kilmacduagh_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 29 },
    },

    malachy_of_armagh_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 3 },
    },

    all_saints_of_ireland: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 11, date: 6 },
    },

    willibrord_of_utrecht_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 7 },
    },

    laurence_otoole_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 14 },
    },

    columban_of_luxeuil_abbot: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 23 },
    },

    colman_of_cloyne_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 25 },
    },

    virgilius_of_salzburg_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 27 },
      titles: { append: [Title.Missionary] },
    },

    finnian_of_clonard_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 12 },
    },

    flannan_of_killaloe_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 18 },
    },

    fachanan_of_kilfenora_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 20 },
    },
  };
}
