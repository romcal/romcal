import { mkdirSync, writeFileSync } from 'node:fs';

import prettier from 'prettier';
import { createGenerator } from 'ts-json-schema-generator';

import { BuiltFile, log } from '../utils';

type BuildJsonSchemaOptions = {
  entryPoint: string;
  outDir: string;
  outFileNameWithoutExt: string;
  onWriteFile?: (opt: BuiltFile) => void;
};

export const buildJsonSchema = async ({
  entryPoint,
  outDir,
  outFileNameWithoutExt,
  onWriteFile,
}: BuildJsonSchemaOptions): Promise<void> => {
  log({ message: `Building entries: ${entryPoint}`, namespace: 'schema' });

  const outPath = `${outDir}/${outFileNameWithoutExt}.json`;
  const schema = createGenerator({
    path: entryPoint,
    tsconfig: 'tsconfig.json',
  }).createSchema('*');
  const schemaString = prettier.format(JSON.stringify(schema), { parser: 'json' });

  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, schemaString);

  if (onWriteFile) onWriteFile({ outPath, namespace: 'schema' });
};
