import { ConsolaInstance, createConsola } from 'consola';
import { colors } from 'consola/utils';

/**
 * The single place the builder writes to a stream.
 *
 * The scripts being moved here each grew their own conventions: two symbol
 * vocabularies, three ways of indenting a detail line, and a `hasWarnings` flag
 * that data-checks.ts sets as a side effect of formatting a label. A call site now
 * picks a severity and consola handles the presentation.
 *
 * Consola supplies the symbols, colours, level filtering and stream routing, and
 * drops colour by itself when the output is not a terminal. What it has no opinion
 * about, and what this wrapper adds, is the three things a build needs: a dry-run
 * tag, nesting, and collapsible sections on GitHub Actions.
 *
 * None of this reaches a published artifact. The builder runs in Node under tsx;
 * the cjs, esm and iife bundles are esbuild's output from a rite's `src`, which
 * never imports this package.
 */

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

/** Consola's numeric levels: warn 1, log 2, info/success 3, debug 4. */
const CONSOLA_LEVEL: Record<LogLevel, number> = { debug: 4, error: 0, info: 3, warn: 1 };

export interface LoggerOptions {
  /** Tag every line, so a dry run cannot be mistaken for the real thing. */
  readonly dryRun?: boolean;
  /** Lowest level to emit. Anything below is dropped. */
  readonly level?: LogLevel;
  readonly stderr?: NodeJS.WriteStream;
  /** Streams to write to. Injectable so tests can capture output. */
  readonly stdout?: NodeJS.WriteStream;
  /** Emit `debug` output. Set by `--verbose`. */
  readonly verbose?: boolean;
}

export interface Logger {
  /** A blank separator line. */
  blank(): void;
  /** A logger writing everything indented one level further. */
  child(): Logger;
  /** Only with `--verbose`. */
  debug(message: string): void;
  /** Secondary output, indented and dimmed under whatever preceded it. */
  detail(message: string): void;
  /** Something that failed. Reporting is separate from exiting. */
  error(message: string): void;
  /**
   * Run `fn` inside a collapsible section, passing it a logger that indents one
   * level further. On GitHub Actions this emits the workflow grouping commands,
   * which matters when 104 bundles each log a line.
   */
  group<T>(label: string, fn: (log: Logger) => T): T;
  /** Neutral output, no symbol. */
  info(message: string): void;
  /** A step that is starting. */
  step(message: string): void;
  /** A step that finished. */
  success(message: string): void;
  /** Something worth attention that does not stop the build. */
  warn(message: string): void;
}

/** GitHub Actions renders `::group::` / `::endgroup::` as a collapsible section. */
const isGitHubActions = (): boolean => process.env.GITHUB_ACTIONS === 'true';

/**
 * A view of `target` that indents whatever is written to it.
 *
 * Nesting is applied to the rendered line rather than to the message, so the
 * indent lands before consola's symbol instead of between the symbol and the text.
 */
const indented = (target: NodeJS.WriteStream, depth: number): NodeJS.WriteStream => {
  if (depth === 0) return target;
  const pad = '  '.repeat(depth);

  return new Proxy(target, {
    get(stream, property, receiver): unknown {
      if (property !== 'write') return Reflect.get(stream, property, receiver);

      return (chunk: string | Uint8Array, ...rest: unknown[]): boolean => {
        const text = String(chunk).replace(/^(?!$)/gm, pad);
        return (stream.write as (value: string, ...args: unknown[]) => boolean)(text, ...rest);
      };
    },
  });
};

export const createLogger = (options: LoggerOptions = {}): Logger => {
  const { dryRun = false, verbose = false } = options;
  const stdout = options.stdout ?? process.stdout;
  const stderr = options.stderr ?? process.stderr;
  const level = options.level ? CONSOLA_LEVEL[options.level] : CONSOLA_LEVEL[verbose ? 'debug' : 'info'];

  const build = (depth: number): Logger => {
    const base = createConsola({
      // A build log is already timestamped by whatever runs it.
      formatOptions: { date: false },
      level,
      stderr: indented(stderr, depth),
      stdout: indented(stdout, depth),
    });
    const consola: ConsolaInstance = dryRun ? base.withTag('dry-run') : base;

    return {
      blank: () => stdout.write('\n'),
      child: () => build(depth + 1),
      debug: (message) => consola.debug(message),
      detail: (message) => consola.log(colors.dim(`  ${message}`)),
      error: (message) => consola.error(message),

      group: <T>(label: string, fn: (log: Logger) => T): T => {
        if (isGitHubActions()) {
          // Workflow commands are only recognised at the start of a line.
          stdout.write(`::group::${label}\n`);
          try {
            return fn(build(depth));
          } finally {
            stdout.write('::endgroup::\n');
          }
        }

        consola.log(colors.bold(label));
        return fn(build(depth + 1));
      },

      info: (message) => consola.log(message),
      step: (message) => consola.start(message),
      success: (message) => consola.success(message),
      warn: (message) => consola.warn(message),
    };
  };

  return build(0);
};

/** Default logger, for call sites with no options to thread through. */
export const logger = createLogger();
