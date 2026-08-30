import { CommonDefinition as Common, PatronTitle, Precedences, CalendarDef } from '@internal/generator';
import type { Inputs, ParticularConfig } from '@internal/generator';

import { Europe } from '../../regions/europe';

export class Belgium extends CalendarDef {
  ParentCalendars = [Europe];

  particularConfig: ParticularConfig = {
    epiphanyOnSunday: true, // src: mr_fr_2021_ed3
    ascensionOnSunday: false, // src: https://newsletter.cathobel.be/CIPL/Calendrier-liturgique-Belgique-2021-2022.pdf
    corpusChristiOnSunday: true, // src: https://newsletter.cathobel.be/CIPL/Calendrier-liturgique-Belgique-2021-2022.pdf
  };

  inputs: Inputs = {
    // src:
    // - https://www.otheo.be/bisschoppenconferentie/artikel/decreten-van-de-bisschoppenconferentie-van-belgie
    // - https://www.cathobel.be/eglise-en-belgique/la-conference-des-eveques/decrets/
    mary_mother_of_god: {
      isHolyDayOfObligation: false,
    },

    // src:
    // - https://www.otheo.be/bisschoppenconferentie/artikel/decreten-van-de-bisschoppenconferentie-van-belgie
    // - https://www.cathobel.be/eglise-en-belgique/la-conference-des-eveques/decrets/
    epiphany_of_the_lord: {
      isHolyDayOfObligation: false,
    },

    // src: mr_fr_2021_ed3
    amand_of_maastricht_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 2, date: 6 },
      commonsDef: Common.Founders,
    },

    // src: mr_fr_2021_ed3
    paul_miki_and_companions_martyrs: {
      dateDef: { month: 2, date: 7 },
    },

    // src:
    // - mr_fr_2021_ed3
    // - https://www.otheo.be/bisschoppenconferentie/artikel/decreten-van-de-bisschoppenconferentie-van-belgie
    // - https://www.cathobel.be/eglise-en-belgique/la-conference-des-eveques/decrets/
    joseph_spouse_of_mary: {
      customLocaleId: 'joseph_spouse_of_mary_principal_patron_of_belgium',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      titles: { append: [PatronTitle.PatronOfBelgium] },
      isHolyDayOfObligation: false,
    },

    // src: mr_fr_2021_ed3
    damien_de_veuster_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 10 },
      commonsDef: Common.None,
    },

    // This celebration is a mandatory memorial in the Diocese of Ghent.
    // src: mr_fr_2021_ed3
    edward_poppe_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 10 },
      commonsDef: Common.Pastors,
    },

    // src:
    // - https://www.otheo.be/bisschoppenconferentie/artikel/decreten-van-de-bisschoppenconferentie-van-belgie
    // - https://www.cathobel.be/eglise-en-belgique/la-conference-des-eveques/decrets/
    most_holy_body_and_blood_of_christ: {
      isHolyDayOfObligation: false,
    },

    // src:
    // - https://www.otheo.be/bisschoppenconferentie/artikel/decreten-van-de-bisschoppenconferentie-van-belgie
    // - https://www.cathobel.be/eglise-en-belgique/la-conference-des-eveques/decrets/
    peter_and_paul_apostles: {
      isHolyDayOfObligation: false,
    },

    // src: mr_fr_2021_ed3
    juliana_of_liege_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 7 },
      commonsDef: [Common.Virgins, Common.Religious],
    },

    // src: mr_fr_2021_ed3
    our_lady_mediatrix_of_all_grace: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 31 },
      commonsDef: Common.BlessedVirginMary,
    },

    // src: mr_fr_2021_ed3
    lambert_of_maastricht_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 17 },
      commonsDef: [Common.Martyrs, Common.Bishops],
    },

    // src: mr_fr_2021_ed3
    dedication_of_consecrated_churches: {
      precedence: Precedences.ProperSolemnity_DedicationOfTheOwnChurch_4b,
      dateDef: { month: 10, date: 25 },
      alternativeTransferDateDefs: [{ dateDef: { month: 10, lastDayOfWeekInMonth: 0 } }],
      isOptional: true,
      commonsDef: Common.DedicationAnniversary_Inside,
    },

    // src: mr_fr_2021_ed3
    hubert_of_liege_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 3 },
      commonsDef: Common.Bishops,
    },

    // src: mr_fr_2021_ed3
    john_berchmans_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 26 },
      commonsDef: Common.Religious,
    },

    // src:
    // - https://www.otheo.be/bisschoppenconferentie/artikel/decreten-van-de-bisschoppenconferentie-van-belgie
    // - https://www.cathobel.be/eglise-en-belgique/la-conference-des-eveques/decrets/
    immaculate_conception_of_the_blessed_virgin_mary: {
      isHolyDayOfObligation: false,
    },
  };
}
