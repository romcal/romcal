/**
 * Command line entry point for the rite build tooling.
 *
 * The argument surface is fixed here so that the extraction commit only has to move
 * code, not decide an interface. Every command reads a `romcal.build.ts` manifest
 * from the rite root; flags narrow what that manifest declares.
 */

import { createLogger } from './utils/logger';

const USAGE = `
romcal-build <command> [options]

Commands:
  build     Compile a rite and emit its bundles
  bundle    Emit calendar bundles only
  check     Run the data checks over a rite's calendars
  doc       Regenerate the calendar plugin table
  publish   Publish the rite and its calendar bundles
  trust     Report or configure trusted publishing

Options:
  --rite <name>          Rite workspace to act on (default: the only one present)
  --calendars <list>     Comma separated calendar ids (default: all)
  --locales <list>       Comma separated locale ids (default: all)
  --formats <list>       cjs, esm, iife (default: from the manifest)
  --emit <list>          bundles, docs, packages, types (default: all)
  --concurrency <n>      Parallel workers (default: one per core)
  --dry-run              Report what would happen, change nothing
  --verbose              Log each step
  --help                 Show this message
`.trim();

const main = (): void => {
  const argv = process.argv.slice(2);
  const log = createLogger({ verbose: argv.includes('--verbose'), dryRun: argv.includes('--dry-run') });

  log.info(USAGE);
  log.blank();
  log.error('Not implemented yet: the commands move here from rites/roman1969/build/.');
  process.exit(1);
};

main();
