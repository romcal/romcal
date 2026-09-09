import { runBuild } from './commands/build';
import { RomcalBundler } from './commands/bundle';
import { runCheck } from './commands/check';
import { runDoc } from './commands/doc';
import { runPublish } from './commands/publish';
import { runTrust } from './commands/trust';
import { parseArgs, resolveOptions } from './options';
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
  --calendars <list>     Comma separated calendar names (default: all)
  --locales <list>       Comma separated locale ids (default: all)
  --formats <list>       cjs, esm, iife (default: from the manifest)
  --emit <list>          bundles, docs, packages, types (default: all)
  --dry-run              Report what would happen, change nothing
  --verbose              Log each step
  --help                 Show this message

publish also accepts --only-new; trust accepts --sync, --force, --fresh, --json,
--yes, --no-prompt, --batch-size <n> and --sleep <ms>.
`.trim();

const main = async (): Promise<void> => {
  const argv = process.argv.slice(2);
  const parsed = parseArgs(argv);
  const log = createLogger({ dryRun: parsed.flags['dry-run'] === true, verbose: parsed.flags.verbose === true });

  if (parsed.flags.help === true || !parsed.command) {
    log.info(USAGE);
    process.exit(parsed.command ? 0 : 1);
  }

  const options = await resolveOptions(parsed);
  log.debug(`rite: ${options.manifest.name} (${options.riteRoot})`);
  log.debug(`calendars: ${options.calendars.length}, locales: ${options.locales.length}`);

  switch (parsed.command) {
    case 'build':
      await runBuild(options, log);
      break;

    case 'bundle':
      RomcalBundler(options, log);
      break;

    case 'check':
      runCheck(options, log);
      break;

    case 'doc':
      await runDoc(options, log);
      break;

    case 'publish':
      await runPublish(options, { onlyNew: parsed.flags['only-new'] === true }, log);
      break;

    case 'trust':
      await runTrust(options);
      break;

    default:
      log.error(`Unknown command "${parsed.command}".`);
      log.info(USAGE);
      process.exit(1);
  }
};

main().catch((error: Error) => {
  const log = createLogger();
  log.error(error.message);
  process.exit(1);
});
