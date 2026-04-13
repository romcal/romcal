import { loadCommune, loadSancti, loadTempora, type MassFileEntry, type MassFileMap } from '../sanctoral/data';

export type Bundle = 'sancti' | 'tempora' | 'commune';

export interface ResolvedRef {
  bundle: Bundle;
  key: string;
  section?: string;
}

const REF_PATTERN = /^(Sancti|Tempora|Commune)\/([^:]+)(?::(.+))?$/i;
const SOURCE_PATTERN = /^(sancti|tempora|commune)\/(.+)$/;

/**
 * Parse a DO-style pointer like `Commune/C3a-1:Introitus` into its
 * component parts. Returns undefined for unparseable strings.
 */
export function parseRef(target: string): ResolvedRef | undefined {
  const m = REF_PATTERN.exec(target.trim());
  if (!m) return undefined;
  return {
    bundle: m[1].toLowerCase() as Bundle,
    key: m[2],
    section: m[3],
  };
}

/**
 * Parse a Celebration1962.properRef.source like 'sancti/11-01' or
 * 'tempora/Pasc0-0' into a bundle + key pair. Always lowercase.
 */
export function parseSource(source: string): ResolvedRef | undefined {
  const m = SOURCE_PATTERN.exec(source.trim());
  if (!m) return undefined;
  return { bundle: m[1] as Bundle, key: m[2] };
}

function loadBundle(bundle: Bundle): MassFileMap {
  if (bundle === 'sancti') return loadSancti();
  if (bundle === 'tempora') return loadTempora();
  return loadCommune();
}

export function getEntry(ref: ResolvedRef): MassFileEntry | undefined {
  const map = loadBundle(ref.bundle);
  return map[ref.key];
}
