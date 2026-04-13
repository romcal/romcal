const COMMUNE_REF = /^Commune\/([^:]+)/;

/**
 * Inspect the `references` block on a Mass-file entry and, when every
 * `Commune/*` pointer resolves to the same base commune slug, return
 * it. Sub-variants `C3a-1` and `C3a` are treated as the same base
 * (`C3a`); distinct letters `C3a` vs `C3b` remain distinct.
 */
export function deriveCommuneSlug(references: Record<string, string>): string | undefined {
  const hits = Object.values(references)
    .map((v) => COMMUNE_REF.exec(v)?.[1])
    .filter((v): v is string => typeof v === 'string');
  if (hits.length === 0) return undefined;

  const bases = new Set(hits.map((s) => s.replace(/-\d+$/, '')));
  if (bases.size !== 1) return undefined;
  return [...bases][0];
}
