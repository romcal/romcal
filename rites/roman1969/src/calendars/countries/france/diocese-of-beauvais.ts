import { PatronTitle, Precedences, CalendarDef, Inputs } from '@internal/generator';

import { Europe } from '../../regions/europe';

import { France } from '.';

// src:
// - https://www.paroissesainthonoredesmoissons.fr/wp-content/uploads/ORDO-LITURGIQUE-DIOCESE-BEAUVAIS-2026.pdf
// - https://oise.catholique.fr/poles-services/administratif/archives-historiques/4210-temoins-dhier-ayant-marque-notre-diocese/
// The liturgical ranks are under diocesan review and may be revised in the Ordo published in November 2026.
export class France_Beauvais extends CalendarDef {
  ParentCalendars = [Europe, France];

  inputs: Inputs = {
    lucian_of_beauvais_bishop_and_companions_martyrs: {
      customLocaleId: 'lucian_of_beauvais_bishop_principal_patron_of_the_church_of_beauvais_and_companions_martyrs',
      dateDef: { month: 1, date: 8 },
      precedence: Precedences.ProperFeast_PrincipalPatronOfADiocese_8a,
      martyrology: [
        {
          id: 'lucian_of_beauvais_bishop',
          titles: { append: [PatronTitle.PrincipalPatronOfTheDiocese] },
        },
        'maximian_of_beauvais_martyr',
        'julian_of_beauvais_martyr',
      ],
    },

    all_holy_bishops_of_the_diocese_of_beauvais_noyon_and_senlis: {
      dateDef: { month: 1, date: 15 },
      precedence: Precedences.OptionalMemorial_12,
    },

    julie_billiart_virgin: {
      dateDef: { month: 4, date: 8 },
      precedence: Precedences.ProperMemorial_11b,
    },

    // This celebration is a solemnity in Noyon.
    godeberta_of_noyon_virgin: {
      dateDef: { month: 4, date: 11 },
      precedence: Precedences.ProperMemorial_11b,
    },

    regulus_of_senlis_bishop: {
      dateDef: { month: 4, date: 23 },
      precedence: Precedences.ProperMemorial_11b,
    },

    medard_of_noyon_bishop: {
      dateDef: { month: 6, date: 8 },
      precedence: Precedences.ProperMemorial_11b,
    },

    // This celebration is a solemnity in Beauvais.
    angadrisma_of_beauvais_abbess: {
      customLocaleId:
        'angadrisma_of_beauvais_abbess_principal_patroness_of_beauvais_and_secondary_patroness_of_the_diocese',
      dateDef: { month: 6, date: 27 },
      precedence: Precedences.ProperMemorial_SecondPatron_11a,
      titles: { append: [PatronTitle.SecondPatronOfTheDiocese] },
    },

    // src: https://press.vatican.va/content/salastampa/en/bollettino/pubblico/2024/12/18/241218d.html
    carmelites_of_compiegne_virgins_and_martyrs: {
      dateDef: { month: 7, date: 17 },
      precedence: Precedences.ProperMemorial_11b,
    },

    evroult_of_saint_lucien_abbot: {
      dateDef: { month: 7, date: 27 },
      precedence: Precedences.ProperMemorial_11b,
    },

    francois_joseph_de_la_rochefoucauld_bishop_and_companions_martyrs: {
      dateDef: { month: 9, date: 2 },
      precedence: Precedences.ProperMemorial_11b,
      martyrology: ['francois_joseph_de_la_rochefoucauld_bishop', 'companions_martyrs'],
    },

    germer_of_fly_abbot_and_holy_abbots_of_fly: {
      dateDef: { month: 9, date: 24 },
      precedence: Precedences.ProperMemorial_11b,
      martyrology: ['germer_of_fly_abbot', 'holy_abbots_of_fly'],
    },

    firmin_of_amiens_bishop: {
      dateDef: { month: 9, date: 25 },
      precedence: Precedences.OptionalMemorial_12,
    },

    all_saints_of_the_diocese_of_beauvais_noyon_and_senlis: {
      dateDef: { month: 11, date: 8 },
      precedence: Precedences.ProperMemorial_11b,
    },

    ivo_of_auteuil_bishop: {
      dateDef: { month: 11, date: 19 },
      precedence: Precedences.OptionalMemorial_12,
      martyrology: ['ivo_of_chartres_bishop'],
    },

    eligius_of_noyon_bishop: {
      dateDef: { month: 12, date: 1 },
      precedence: Precedences.ProperMemorial_11b,
    },
  };
}
