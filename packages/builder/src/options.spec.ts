import { parseArgs } from './options';

describe('parseArgs', () => {
  it('treats --dry-run as a boolean switch that does not swallow the command', () => {
    const parsed = parseArgs(['--dry-run', 'publish']);
    expect(parsed.command).toBe('publish');
    expect(parsed.flags['dry-run']).toBe(true);
  });

  it('accepts --dry-run=true and --dry-run=false', () => {
    expect(parseArgs(['publish', '--dry-run=true']).flags['dry-run']).toBe(true);
    expect(parseArgs(['publish', '--dry-run=false']).flags['dry-run']).toBe(false);
  });

  it('rejects unsupported boolean values', () => {
    expect(() => parseArgs(['publish', '--dry-run=maybe'])).toThrow(/Invalid value for --dry-run/);
  });

  it('still binds values for non-boolean flags', () => {
    const parsed = parseArgs(['build', '--rite', 'roman1969', '--calendars', 'France']);
    expect(parsed.command).toBe('build');
    expect(parsed.flags.rite).toBe('roman1969');
    expect(parsed.flags.calendars).toBe('France');
  });
});
