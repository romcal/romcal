import { TemporalOverrides } from '../types/config';

import { cloneTemporalOverrides, omitTemporalOverrideAnchor } from './temporal-overrides';

const overrides = (): TemporalOverrides => ({
  anchorExceptions: { epiphany: [{ then: { transferTo: 'sunday' }, when: { dayOfWeek: 'monday' } }] },
});

describe('temporal-overrides.ts', () => {
  describe('cloneTemporalOverrides', () => {
    it('returns undefined when there are no overrides', () => {
      expect(cloneTemporalOverrides(undefined)).toBeUndefined();
    });

    it('returns an equal copy that shares no object with the original', () => {
      const original = overrides();
      const copy = cloneTemporalOverrides(original) as TemporalOverrides;

      expect(copy).toEqual(original);
      expect(copy).not.toBe(original);
      expect(copy.anchorExceptions.epiphany).not.toBe(original.anchorExceptions.epiphany);
      expect(copy.anchorExceptions.epiphany?.[0].when).not.toBe(original.anchorExceptions.epiphany?.[0].when);
      expect(copy.anchorExceptions.epiphany?.[0].then).not.toBe(original.anchorExceptions.epiphany?.[0].then);
    });

    it('skips an anchor that is present but holds no exceptions', () => {
      const copy = cloneTemporalOverrides({ anchorExceptions: { epiphany: undefined } });
      expect(copy).toEqual({ anchorExceptions: {} });
    });
  });

  describe('omitTemporalOverrideAnchor', () => {
    it('returns undefined when there are no overrides', () => {
      expect(omitTemporalOverrideAnchor(undefined, 'epiphany')).toBeUndefined();
    });

    it('returns undefined when removing the only anchor leaves nothing', () => {
      expect(omitTemporalOverrideAnchor(overrides(), 'epiphany')).toBeUndefined();
    });

    it('returns undefined when the anchor is not configured and nothing else is', () => {
      expect(omitTemporalOverrideAnchor({ anchorExceptions: {} }, 'epiphany')).toBeUndefined();
    });

    it('keeps the other anchors, without touching the original', () => {
      // Premise: `ShiftableAnchor` has a single member today, so a second anchor is added through a cast to
      // reach the branch that keeps a non-empty result; the function treats every anchor key alike.
      const other = [{ then: { transferTo: 'sunday' }, when: { dayOfWeek: 'friday' } }];
      const original = {
        anchorExceptions: { ...overrides().anchorExceptions, other },
      } as unknown as TemporalOverrides;

      const result = omitTemporalOverrideAnchor(original, 'epiphany');

      expect(result).toEqual({ anchorExceptions: { other } });
      expect(original.anchorExceptions.epiphany).toBeDefined();
    });
  });
});
