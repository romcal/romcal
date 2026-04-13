export const COMMONS_1962 = [
  'Apostolorum',
  'ApostolorumTemporePaschali',
  'UniusMartyris',
  'UniusMartyrisTemporePaschali',
  'PluriumMartyrum',
  'PluriumMartyrumTemporePaschali',
  'ConfessorisPontificis',
  'DoctorumPontificum',
  'ConfessorisNonPontificis',
  'AbbatumEtMonachorum',
  'VirginumEtMartyrum',
  'VirginumTantum',
  'NonVirginum',
  'Dedicationis',
  'BeataeMariaeVirginis',
] as const;

export type Common1962 = (typeof COMMONS_1962)[number];
