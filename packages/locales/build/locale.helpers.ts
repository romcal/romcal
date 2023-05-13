import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

import { BuiltFile, log, logError, yamlImports } from '@romcal/build';
import { Locale } from '@romcal/shared';
import merge from 'ts-deepmerge';

type BuildLocalesOptions = {
  entryPoints: string;
  outDir: string;
  onWriteFile?: (opt: BuiltFile) => void;
};

/**
 * Imports the locales from the specified entry points and returns them as a map of locale file
 * paths to locales.
 */
export function getLocales(
  entryPoints: BuildLocalesOptions['entryPoints'],
): Record<string, Locale> {
  return yamlImports<Locale>({
    entryPoints,
    getId: (locale) => locale.localeCode,
    // If there are duplicated locale codes, that's an error.
    onFindDuplicates: (duplicatedIds) => {
      throw new Error(`Duplicated locale codes: ${duplicatedIds.join(', ')}`);
    },
  });
}

/**
 * Merge the given locale with the base locale, if it exists.
 */
export function mergeWithBasedLocale(locale: Locale, allLocales: Record<string, Locale>): Locale {
  const basedLocaleId = locale.localeCode.split('-')[0];
  const basedLocale = Object.values(allLocales).find((l) => l.localeCode === basedLocaleId);

  if (basedLocaleId && basedLocaleId !== locale.localeCode && basedLocale) {
    return merge(basedLocale, locale);
  }

  return locale;
}

/**
 * Write the locale JSON file to the output directory.
 */
export function writeLocaleFile(
  locale: Locale,
  outDir: string,
  onWriteFile?: BuildLocalesOptions['onWriteFile'],
): void {
  const jsonFileName = `${locale.localeCode.toLowerCase()}.json`;
  const jsonOutPath = path.join(outDir, jsonFileName);
  writeFileSync(jsonOutPath, JSON.stringify(locale), { encoding: 'utf-8' });
  if (onWriteFile) onWriteFile({ outPath: jsonOutPath, namespace: 'json' });
}

/**
 * Take a set of locales in YAML format, combine them with the base locale, and write them to the
 * given directory as JSON files.
 */
export async function buildLocales({
  entryPoints,
  outDir,
  onWriteFile,
}: BuildLocalesOptions): Promise<void> {
  try {
    log({ message: `Building locales: ${entryPoints}`, namespace: 'json' });

    const allLocales = getLocales(entryPoints);

    mkdirSync(outDir, { recursive: true });

    await Promise.all(
      Object.values(allLocales).map(async (locale) => {
        const mergedLocale = mergeWithBasedLocale(locale, allLocales);
        writeLocaleFile(mergedLocale, outDir, onWriteFile);
      }),
    );
  } catch (error) {
    error instanceof Error ? logError(error.message) : logError(`${error}`);
  }
}
