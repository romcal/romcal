export const PREFACE_IDS = [
  'Communis',
  'Nativitatis',
  'Epiphaniae',
  'Quadragesimalis',
  'Crucis',
  'Paschalis',
  'Ascensionis',
  'Pentecostes',
  'Trinitatis',
  'SacratissimiCordis',
  'ChristiRegis',
  'BeataeMariaeVirginis',
  'SanctiIoseph',
  'Apostolorum',
  'Defunctorum',
] as const;

export type PrefaceId = (typeof PREFACE_IDS)[number];
