import fs from 'node:fs';
import path from 'node:path';

function sortKeys<T>(value: T): T {
  if (Array.isArray(value)) return value.map(sortKeys) as unknown as T;
  if (value && typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0));
    const out: Record<string, unknown> = {};
    for (const [k, v] of entries) out[k] = sortKeys(v);
    return out as T;
  }
  return value;
}

export function writeJson(filePath: string, data: unknown): void {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  const sorted = sortKeys(data);
  const serialized = `${JSON.stringify(sorted, null, 2)}\n`;
  fs.writeFileSync(filePath, serialized, 'utf8');
}
