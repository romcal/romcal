import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { Europe } from './europe';
import { PatronTitles, Titles } from '../../../constants/martyrology-metadata';

export class Ireland extends CalendarDef {
  inheritFrom = Europe;

  definitions: DateDefinitions = {
    munchin_of_limerick_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-3',
    },

    ita_of_killeedy_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '1-15',
    },

    fursa_of_peronne_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-16',
    },

    aidan_of_ferns_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-30',
    },

    brigid_of_kildare_virgin: {
      customLocaleKey: 'brigid_of_kildare_virgin_copatroness_of_ireland',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '2-1',
      titles: (titles) => [...titles, PatronTitles.CopatronessOfIreland],
    },

    mel_of_ardagh_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-7',
    },

    gobnait_of_ballyvourney_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-11',
    },

    fintan_of_clonenagh_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-17',
    },

    david_of_wales_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-1',
    },

    kieran_of_saigir_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-5',
    },

    senan_of_inis_cathaigh_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-8',
    },

    aengus_of_tallaght_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-11',
    },

    patrick_of_ireland_bishop: {
      customLocaleKey: 'patrick_of_ireland_bishop_patron_of_ireland',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      isHolyDayOfObligation: true,
      titles: (titles) => [...titles, PatronTitles.PatronOfIreland],
    },

    enda_of_aran_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-21',
    },

    macartan_of_clogher_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-24',
    },

    ceallach_of_armagh_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-1',
    },

    laserian_of_leighlin_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-18',
    },

    asicus_of_elphin_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-27',
    },

    conleth_of_kildare_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-4',
    },

    edmund_ignatius_rice_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-5',
    },

    comgall_of_bangor_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-10',
    },

    carthage_of_lismore_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-15',
    },

    brendan_of_clonfert_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-16',
    },

    kevin_of_glendalough_abbot: {
      precedence: Precedences.ProperMemorial_11b,
      date: '6-3',
    },

    jarlath_of_tuam_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-6',
    },

    colman_of_dromore_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-7',
    },

    columba_of_iona_abbot: {
      customLocaleKey: 'columba_of_iona_abbot_copatron_of_ireland',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '6-9',
      titles: (titles) => [
        ...titles,
        Titles.Missionary,
        PatronTitles.CopatronOfIreland,
      ],
    },

    davnet_of_sliabh_beagh_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-14',
    },

    irish_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      date: '6-20',
    },

    oliver_plunket_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-1',
    },

    moninne_of_killeavy_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-6',
    },

    saintMaelruainMaolruainVirgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-7',
    },

    kilian_of_wurzburg_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-8',
    },

    declan_of_ardmore_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-24',
    },

    muredach_of_killala_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-12',
    },

    attracta_of_killaraght_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-12',
    },

    lelia_of_killeely_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-12',
    },

    fachtna_of_rosscarbery_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-13',
    },

    our_lady_of_knock: {
      precedence: Precedences.ProperFeast_8f,
      date: '8-17',
    },

    eoghan_of_ardstraw_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-23',
    },

    fiacre_of_breuil_monk: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-30',
    },

    aidan_of_lindisfarne_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-31',
    },

    mac_nissi_of_connor_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-4',
    },

    ciaran_of_clonmacnoise_abbot: {
      precedence: Precedences.ProperMemorial_11b,
      date: '9-9',
    },

    ailbe_of_emly_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-12',
    },

    pius_of_pietrelcina_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '9-23',
    },

    finbarr_of_cork_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-25',
    },

    columba_marmion_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-3',
    },

    john_henry_newman_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-9',
    },

    canice_of_kilkenny_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-11',
    },

    gall_of_switzerland_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-16',
    },

    otteran_of_iona_monk: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-27',
    },

    colman_of_kilmacduagh_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-29',
    },

    malachy_of_armagh_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-3',
    },

    all_saints_of_ireland: {
      precedence: Precedences.ProperFeast_8f,
      date: '11-6',
    },

    willibrord_of_utrecht_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-7',
    },

    laurence_otoole_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-14',
    },

    columban_of_luxeuil_abbot: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-23',
    },

    colman_of_cloyne_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-25',
    },

    virgilius_of_salzburg_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-27',
      titles: (titles) => [...titles, Titles.Missionary],
    },

    finnian_of_clonard_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-12',
    },

    flannan_of_killaloe_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-18',
    },

    fachanan_of_kilfenora_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-20',
    },
  };
}
