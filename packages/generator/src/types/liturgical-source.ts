/**
 * A Church document (or norms text) this code implements or cites.
 *
 * Attach as `source` or `sources` on rubrics, vocab tables, calendars, date helpers,
 * and anything else whose behaviour is drawn from a named text — one document or
 * several (for example the norms plus a later CDW decree).
 */
export interface LiturgicalSource {
  /** English title as we cite it in comments / docs. */
  readonly title: string;

  /** Latin title when we have one. */
  readonly titleLatin?: string;

  /** Norms / edition year we implement. */
  readonly year: number;

  /** Motu proprio or decree that promulgated these norms, if any. */
  readonly promulgatedBy?: string;

  /**
   * Code abbreviation (UNLY, GNLYC, …).
   * Always expand beside the first use in a file or type doc.
   */
  readonly abbreviation: string;

  /**
   * Primary locus for what this attachment covers, e.g. `"n. 59"` or
   * `"§91 Tabula…"`.
   */
  readonly primaryLocus?: string;
}

/** One document or several. */
export type LiturgicalSources = LiturgicalSource | readonly LiturgicalSource[];
