import { defineRite } from '@internal/builder';

import { calendarDefinitions } from './src/calendars';
import { GeneralRoman } from './src/calendars/general-roman';
import { Martyrology } from './src/catalog/martyrology';
import { locales } from './src/locales';

/**
 * What the builder needs to know about this rite.
 *
 * The build commands live in `@internal/builder` and contain nothing specific to
 * 1969: the calendars, locales, martyrology and output layout all arrive from here.
 */
export default defineRite({
  name: '@internal/rite-roman1969',
  entryPoint: 'src/index.ts',
  outDir: 'dist',
  tmpDir: 'tmp',
  tsconfig: 'tsconfig.release.json',
  formats: ['cjs', 'esm', 'iife'],
  packageNameTemplate: '@romcal/calendar.[calendar]',
  docOutput: 'docs/calendar-plugins.md',
  // Relative to the generated file at `tmp/bundles/[calendar]/[locale].ts`.
  bundleTypeImport: '../../../src',

  calendars: calendarDefinitions,
  baseCalendar: GeneralRoman,
  locales,
  martyrology: Martyrology.catalog,
});
