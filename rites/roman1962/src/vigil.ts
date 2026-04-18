const VIGIL_NAME = /^(?:In\s+)?Vigilia\s+(.+)$/i;

/**
 * Returns the Latin name fragment naming the feast a vigil-entry
 * belongs to, or undefined if the given name is not a vigil header.
 * `"Vigilia Ss. Petri et Pauli Apostolorum"` → `"Ss. Petri et Pauli Apostolorum"`.
 *
 * Ported from legacy `src/sanctoral/vigil.ts` so the OOP module tree
 * does not depend on files slated for B2e deletion.
 */
export function detectVigil(name: string): string | undefined {
  const m = VIGIL_NAME.exec(name.trim());
  return m ? m[1].trim() : undefined;
}
