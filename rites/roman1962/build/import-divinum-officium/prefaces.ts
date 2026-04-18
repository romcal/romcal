import type { PrefaceId } from '../../src/constants/prefaces';
import { PREFACE_IDS } from '../../src/constants/prefaces';

const aliases: Record<string, PrefaceId> = {
  Communis: 'Communis',
  Commun: 'Communis',
  Nat: 'Nativitatis',
  Nativitatis: 'Nativitatis',
  Nativ: 'Nativitatis',
  Epi: 'Epiphaniae',
  Epiph: 'Epiphaniae',
  Epiphaniae: 'Epiphaniae',
  Quadr: 'Quadragesimalis',
  Quad: 'Quadragesimalis',
  Quadragesimalis: 'Quadragesimalis',
  Crux: 'Crucis',
  Cruce: 'Crucis',
  Crucis: 'Crucis',
  Pasc: 'Paschalis',
  Pasch: 'Paschalis',
  Paschalis: 'Paschalis',
  Asc: 'Ascensionis',
  Ascens: 'Ascensionis',
  Ascensionis: 'Ascensionis',
  Pent: 'Pentecostes',
  Pentecostes: 'Pentecostes',
  Spiritu: 'Pentecostes',
  SpSancti: 'Pentecostes',
  Trin: 'Trinitatis',
  Trinitate: 'Trinitatis',
  Trinitatis: 'Trinitatis',
  Cor: 'SacratissimiCordis',
  SC: 'SacratissimiCordis',
  Cord: 'SacratissimiCordis',
  SacrCordis: 'SacratissimiCordis',
  SacratissimiCordis: 'SacratissimiCordis',
  Rex: 'ChristiRegis',
  Regis: 'ChristiRegis',
  ChristiRegis: 'ChristiRegis',
  BMV: 'BeataeMariaeVirginis',
  B: 'BeataeMariaeVirginis',
  BeataeMariaeVirginis: 'BeataeMariaeVirginis',
  Jos: 'SanctiIoseph',
  Ios: 'SanctiIoseph',
  Joseph: 'SanctiIoseph',
  SanctiIoseph: 'SanctiIoseph',
  Ap: 'Apostolorum',
  Apost: 'Apostolorum',
  Apostolis: 'Apostolorum',
  Apostolorum: 'Apostolorum',
  Def: 'Defunctorum',
  Defunctorum: 'Defunctorum',
  Sacramento: 'SanctissimiSacramenti',
  Sacramenti: 'SanctissimiSacramenti',
  SanctissimiSacramenti: 'SanctissimiSacramenti',
  Quad5: 'Crucis',
  Passionis: 'Crucis',
  Sanctis: 'OmniumSanctorum',
  OmniumSanctorum: 'OmniumSanctorum',
  Dedicatio: 'Dedicationis',
  Dedicationis: 'Dedicationis',
  // Advent has no proper preface in 1962 MR — falls back to Communis.
  Adv: 'Communis',
  Baptista: 'SanctiIoannisBaptistae',
  SanctiIoannisBaptistae: 'SanctiIoannisBaptistae',
  Chrismatis: 'Chrismatis',
  // 'Maria' is the short code used for every BMV feast (Nativitate, Assumptione,
  // Conceptione immaculata, …). The specific mystery is tacked on with `=…`,
  // which the rules parser already strips.
  Maria: 'BeataeMariaeVirginis',
};

export function normalizePreface(raw: string): PrefaceId | undefined {
  const key = raw.trim();
  if (!key) return undefined;
  if ((PREFACE_IDS as readonly string[]).includes(key)) return key as PrefaceId;
  if (aliases[key]) return aliases[key];
  const lc = Object.keys(aliases).find((k) => k.toLowerCase() === key.toLowerCase());
  if (lc) return aliases[lc];
  return undefined;
}
