/**
 * Station-church lookup: `LiturgicalDay1962.id` → ordered list of
 * `{ mass?, key }` entries, where `key` is the `stationChurches:<key>`
 * i18n bundle slug. Built from `data/stations.json` (compiled by
 * `build/stations/build-stations.ts` from the human-edited TSV).
 *
 * Loaded once at module scope and consumed by `buildGeneralRoman1962Inputs`
 * + `ProperOfTime1962#emit` to stamp the `stationChurches` field of the
 * `LiturgicalDay1962Meta` side-channel. `LiturgicalDay1962` then resolves
 * the localized name via i18next.
 */
import fs from 'node:fs';
import path from 'node:path';

export interface StationChurchRef {
  readonly mass?: string;
  readonly key: string;
}

type StationsFile = Record<string, StationChurchRef[]>;

let _stations: StationsFile | undefined;

function loadStations(): StationsFile {
  if (!_stations) {
    const file = path.resolve(__dirname, '../data/stations.json');
    _stations = JSON.parse(fs.readFileSync(file, 'utf8')) as StationsFile;
  }
  return _stations;
}

/**
 * Look up the station-church entries for a `LiturgicalDay1962.id`.
 * Returns `undefined` when the day has no station (the common case
 * outside Lent / the Octave seasons / a handful of feast days).
 */
export function stationsForId(id: string): readonly StationChurchRef[] | undefined {
  const map = loadStations();
  return map[id];
}
