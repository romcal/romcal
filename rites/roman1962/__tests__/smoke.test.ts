import { COMMONS_1962, OCTAVE_IDS, PREFACE_IDS, RANKS_1962, RITE_ID, Romcal } from '@src/rite-roman1962';

describe('rite-roman1962 scaffolding', () => {
  test('exposes the rite id', () => {
    expect(RITE_ID).toBe('roman1962');
  });

  test('re-exports the 1969 Romcal class constructor', () => {
    expect(typeof Romcal).toBe('function');
    const instance = new Romcal();
    expect(instance).toBeDefined();
  });

  test('exposes 1962-specific constant sets', () => {
    expect(RANKS_1962).toContain('ClassI');
    expect(RANKS_1962).toContain('Ferial');
    expect(OCTAVE_IDS).toEqual(['christmas', 'easter', 'pentecost']);
    expect(PREFACE_IDS).toContain('Paschalis');
    expect(COMMONS_1962).toContain('Apostolorum');
  });
});
