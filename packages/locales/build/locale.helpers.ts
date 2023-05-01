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

export const buildLocales = async ({
  entryPoints,
  outDir,
  onWriteFile,
}: BuildLocalesOptions): Promise<void> => {
  try {
    log({ message: `Building locales: ${entryPoints}`, namespace: 'json' });

    const allLocales = yamlImports<Locale>({
      entryPoints,
      getId: (locale) => locale.localeCode,
      onFindDuplicates: (duplicatedIds) => {
        throw new Error(`Duplicated locale IDs: ${duplicatedIds.join(', ')}`);
      },
    });

    mkdirSync(outDir, { recursive: true });

    await Promise.all([
      ...Object.values(allLocales).map(async (locale) => {
        const basedLocaleId = locale.localeCode.split('-')[0];
        const basedLocale = Object.values(allLocales).find((l) => l.localeCode === basedLocaleId);

        if (basedLocaleId && basedLocaleId !== locale.localeCode && basedLocale) {
          locale = merge(basedLocale, locale);
        }

        const jsonFileName = `${locale.localeCode.toLowerCase()}.json`;
        const jsonOutPath = path.join(outDir, jsonFileName);
        writeFileSync(jsonOutPath, JSON.stringify(locale));
        if (onWriteFile) onWriteFile({ outPath: jsonOutPath, namespace: 'json' });
      }),
    ]);
  } catch (error) {
    error instanceof Error ? logError(error.message) : logError(`${error}`);
  }
};
