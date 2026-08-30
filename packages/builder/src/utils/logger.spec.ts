import { Writable } from 'node:stream';

import { createLogger } from './logger';

/**
 * Capture a stream's writes. Consola pads warnings and errors with blank lines, so
 * those are discarded here.
 *
 * Which marker precedes a message is consola's business and depends on the
 * reporter it picks: `◐` on a terminal, `[start]` otherwise, which is what a test
 * run and CI both see. Assertions below match either, rather than pinning
 * presentation this module does not own.
 */
const capture = (): { lines: () => string[]; stream: NodeJS.WriteStream } => {
  const chunks: string[] = [];
  const stream = new Writable({
    write(chunk, _encoding, callback): void {
      chunks.push(String(chunk));
      callback();
    },
  });
  return {
    lines: () =>
      chunks
        .join('')
        .split('\n')
        .filter((line) => line.trim() !== ''),
    stream: stream as unknown as NodeJS.WriteStream,
  };
};

type Harness = {
  err: ReturnType<typeof capture>;
  log: ReturnType<typeof createLogger>;
  out: ReturnType<typeof capture>;
};

const setup = (options = {}): Harness => {
  const out = capture();
  const err = capture();
  return { err, log: createLogger({ ...options, stderr: err.stream, stdout: out.stream }), out };
};

/** The marker consola puts before a message, under either of its reporters. */
const marked = (type: 'start' | 'success', message: string): RegExp =>
  new RegExp(`^(?:◐|✔|\\[${type}\\]) ${message}$`);

describe('createLogger', () => {
  it('gives each severity its own marker', () => {
    const { log, out } = setup();

    log.step('building');
    log.success('built');
    log.info('plain');

    const [step, success, info] = out.lines();
    expect(step).toMatch(marked('start', 'building'));
    expect(success).toMatch(marked('success', 'built'));
    expect(info).toContain('plain');
  });

  it('writes warnings and errors to stderr, so a redirected stdout still shows them', () => {
    const { err, log, out } = setup();

    log.info('progress');
    log.warn('slow');
    log.error('failed');

    expect(out.lines()).toEqual([expect.stringContaining('progress')]);
    expect(err.lines()).toEqual([expect.stringContaining('slow'), expect.stringContaining('failed')]);
  });

  it('drops debug output unless verbose', () => {
    const quiet = setup();
    quiet.log.debug('inner detail');
    expect(quiet.out.lines()).toEqual([]);

    const loud = setup({ verbose: true });
    loud.log.debug('inner detail');
    expect(loud.out.lines()).toEqual([expect.stringContaining('inner detail')]);
  });

  it('tags every line of a dry run, on both streams', () => {
    const { err, log, out } = setup({ dryRun: true });

    log.step('publishing romcal');
    log.error('nope');

    expect(out.lines()).toEqual([expect.stringContaining('[dry-run]')]);
    expect(out.lines()[0]).toContain('publishing romcal');
    expect(err.lines()).toEqual([expect.stringContaining('[dry-run]')]);
  });

  it('indents inside a group and returns what the callback returns', () => {
    const { log, out } = setup();

    const result = log.group('bundles', (inner) => {
      inner.success('france');
      return 42;
    });

    expect(result).toBe(42);
    const [label, nested] = out.lines();
    expect(label).toContain('bundles');
    expect(label).not.toMatch(/^ /);
    // The indent precedes consola's marker rather than sitting between it and the text.
    expect(nested).toMatch(/^ {2}(?:✔|\[success\]) france$/);
  });

  describe('on GitHub Actions', () => {
    const previous = process.env.GITHUB_ACTIONS;
    beforeEach(() => {
      process.env.GITHUB_ACTIONS = 'true';
    });
    afterEach(() => {
      if (previous === undefined) delete process.env.GITHUB_ACTIONS;
      else process.env.GITHUB_ACTIONS = previous;
    });

    it('emits workflow commands so long sections collapse', () => {
      const { log, out } = setup();

      log.group('bundles', (inner) => inner.success('france'));

      const [open, nested, close] = out.lines();
      expect(open).toBe('::group::bundles');
      // No indent inside a workflow group: GitHub renders the nesting itself.
      expect(nested).toMatch(marked('success', 'france'));
      expect(close).toBe('::endgroup::');
    });

    it('closes the group even when the callback throws', () => {
      const { log, out } = setup();

      expect(() =>
        log.group('bundles', () => {
          throw new Error('boom');
        })
      ).toThrow('boom');

      expect(out.lines()).toEqual(['::group::bundles', '::endgroup::']);
    });
  });
});
