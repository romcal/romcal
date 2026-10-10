import { ShiftableAnchor, TemporalOverrides } from '../types/config';

/** Creates a deep copy of temporal override rules. */
export const cloneTemporalOverrides = (temporalOverrides?: TemporalOverrides): TemporalOverrides | undefined => {
  if (!temporalOverrides) return undefined;

  const anchorExceptions: TemporalOverrides['anchorExceptions'] = {};

  (Object.keys(temporalOverrides.anchorExceptions) as ShiftableAnchor[]).forEach((anchor) => {
    const exceptions = temporalOverrides.anchorExceptions[anchor];
    if (!exceptions) return;

    anchorExceptions[anchor] = exceptions.map((exception) => ({
      then: { ...exception.then },
      when: { ...exception.when },
    }));
  });

  return { anchorExceptions };
};

/** Returns a copy without the exceptions configured for the given anchor. */
export const omitTemporalOverrideAnchor = (
  temporalOverrides: TemporalOverrides | undefined,
  anchor: ShiftableAnchor
): TemporalOverrides | undefined => {
  const result = cloneTemporalOverrides(temporalOverrides);
  if (!result) return undefined;

  delete result.anchorExceptions[anchor];
  return Object.keys(result.anchorExceptions).length > 0 ? result : undefined;
};
