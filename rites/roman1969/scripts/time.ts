import humanizeDuration, { Unit, UnitTranslationOptions } from 'humanize-duration';

/**
 * Init and display duration helpers
 * @param initialTime
 */
export const getDuration = (initialTime: Date): string => {
  const units: Unit[] = ['h', 'm', 's'];
  const shortEnglishHumanizer = humanizeDuration.humanizer({
    language: 'shortEn',
    conjunction: ' and ',
    languages: {
      shortEn: units.reduce((acc: UnitTranslationOptions, k) => {
        acc[k] = (): humanizeDuration.Unit => k;
        return acc;
      }, {}),
    },
  });
  return shortEnglishHumanizer(new Date().getTime() - initialTime.getTime(), {
    units,
  }).replace(/(\d+)\s/g, '$1');
};
