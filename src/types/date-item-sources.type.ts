/**
 * The source of the date item.
 *
 * This value is used when localizing dates so that the [[Locales.localizeDates]] function knows
 * which subtree in the locale file to look for.
 *
 * A special key, "temporal", may be used when you do not wish to specify any subtree but rather
 * provide the entire path (as a period delimited string) to the [[Locales.localizeDates]] function
 * to lookup.
 */
export type DateItemSources =
  | 'temporal'
  | 'advent'
  | 'christmastide'
  | 'epiphany'
  | 'ordinaryTime'
  | 'lent'
  | 'holyWeek'
  | 'eastertide'
  | 'celebrations'
  | 'sanctoral';
