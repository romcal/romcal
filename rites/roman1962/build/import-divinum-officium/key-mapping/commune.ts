/**
 * Divinum-Officium commune file key → readable slug.
 *
 * Authored by hand. Base slugs aligned with the Tridentine common-of-saints
 * taxonomy (apostles, martyrs, confessors, virgins, holy women, dedication,
 * office of the dead, small office of the BVM). Variant suffixes:
 *   `_paschaltide`      DO's `p` suffix (Tempore Paschali)
 *   `_vigil`            DO's `v` suffix
 *   `_office_2`         DO's `-1` suffix (secondary office formulary)
 *   `_1960`             DO's `-1960` suffix (Rubricae 1960 variant, rare)
 */
export const COMMUNE_KEY_MAP: Record<string, string> = {
  // Apostles & Evangelists
  C1: 'common_of_apostles',
  C1p: 'common_of_apostles_paschaltide',
  C1v: 'common_of_apostles_vigil',
  C1a: 'common_of_evangelists',
  C1ap: 'common_of_evangelists_paschaltide',

  // Martyrs — pontiff / priest / bishop / multiple
  C2: 'common_of_one_martyr_pontiff',
  C2p: 'common_of_one_martyr_paschaltide',
  'C2-1': 'common_of_one_martyr_pontiff_office_2',
  'C2-1p': 'common_of_one_martyr_pontiff_office_2_paschaltide',
  C2a: 'common_of_one_martyr',
  C2ap: 'common_of_one_martyr_variant_paschaltide',
  'C2a-1': 'common_of_one_martyr_office_2',
  'C2a-1p': 'common_of_one_martyr_office_2_paschaltide',
  C2b: 'common_of_one_supreme_pontiff_martyr',
  C2bp: 'common_of_one_supreme_pontiff_martyr_paschaltide',
  'C2b-1': 'common_of_one_supreme_pontiff_martyr_office_2',
  'C2b-1p': 'common_of_one_supreme_pontiff_martyr_office_2_paschaltide',

  // Many martyrs
  C3: 'common_of_many_martyrs_pontiffs',
  C3p: 'common_of_many_martyrs_paschaltide',
  C3a: 'common_of_many_martyrs',
  C3ap: 'common_of_many_martyrs_variant_paschaltide',
  'C3a-1': 'common_of_many_martyrs_office_2',
  'C3a-1p': 'common_of_many_martyrs_office_2_paschaltide',
  C3b: 'common_of_many_supreme_pontiffs_martyrs',
  C3bp: 'common_of_many_supreme_pontiffs_martyrs_paschaltide',

  // Confessors
  C4: 'common_of_one_confessor_pontiff',
  'C4-1': 'common_of_one_confessor_pontiff_office_2',
  C4a: 'common_of_doctor_pontiff',
  C4b: 'common_of_supreme_pontiff_confessor',
  'C4b-1': 'common_of_supreme_pontiff_confessor_office_2',
  'C4b-2': 'common_of_supreme_pontiff_confessor_office_3',
  C4c: 'common_of_many_confessor_pontiffs',
  C5: 'common_of_confessor_not_pontiff',
  'C5-1': 'common_of_confessor_not_pontiff_office_2',
  C5a: 'common_of_doctor_not_pontiff',
  C5b: 'common_of_abbot',
  C5c: 'common_of_many_confessors_not_pontiffs',

  // Virgins & holy women
  C6: 'common_of_one_virgin_martyr',
  'C6-1': 'common_of_one_virgin_martyr_office_2',
  C6a: 'common_of_virgins',
  'C6a-1': 'common_of_virgins_office_2',
  C6b: 'common_of_many_virgin_martyrs',
  C7: 'common_of_one_non_virgin_martyr',
  C7a: 'common_of_non_virgins_non_martyrs',
  C7b: 'common_of_many_non_virgin_martyrs',

  // Specialized commons
  C8: 'common_of_dedication_of_a_church',
  C9: 'office_of_the_dead',
  C10: 'saturday_office_of_the_blessed_virgin_mary',
  C10Pasc: 'saturday_office_of_the_blessed_virgin_mary_paschaltide',
  C10a: 'saturday_office_of_the_blessed_virgin_mary_variant_2',
  C10b: 'saturday_office_of_the_blessed_virgin_mary_variant_3',
  C10c: 'saturday_office_of_the_blessed_virgin_mary_variant_4',
  C10n: 'saturday_office_of_the_blessed_virgin_mary_christmas_time',
  C11: 'common_of_feasts_of_the_blessed_virgin_mary',
  C12: 'little_office_of_the_blessed_virgin_mary',
  C12A: 'little_office_of_the_blessed_virgin_mary_variant_2',
  C12N: 'little_office_of_the_blessed_virgin_mary_christmas_time',
  C12Q: 'little_office_of_the_blessed_virgin_mary_septuagesima_to_holy_saturday',
  Coronatio: 'votive_mass_coronation_of_a_pope',
};

export function communeKeyToSlug(doKey: string): string {
  const slug = COMMUNE_KEY_MAP[doKey];
  if (!slug) throw new Error(`communeKeyToSlug: no rule for DO key "${doKey}"`);
  return slug;
}
