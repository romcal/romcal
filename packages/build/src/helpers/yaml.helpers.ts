import { readFileSync } from 'node:fs';
import path from 'node:path';
import { TextDecoder } from 'node:util';

import { glob } from 'glob';
import yaml from 'js-yaml';

type YamlImportsOptions<T> = {
  entryPoints: string;
  getId?: (t: T) => string;
  onFindDuplicates?: (duplicatedIds: string[]) => void;
};

export const yamlImports = <T>({ entryPoints, getId, onFindDuplicates }: YamlImportsOptions<T>): Record<string, T> => {
  const entryPointsArray = glob.sync(entryPoints);

  const allItems = entryPointsArray.reduce<Record<string, T>>((acc, entryPoint) => {
    const filePath = path.isAbsolute(entryPoint) ? entryPoint : path.join(process.cwd(), entryPoint);
    const fileContent = readFileSync(filePath);
    const item = yaml.load(new TextDecoder().decode(fileContent)) as T;
    acc[entryPoint] = item;
    return acc;
  }, {});

  // Check for duplicated idem IDs
  if (getId) {
    const duplicatedIds = Object.values(allItems)
      .map((item) => getId(item))
      .filter((e, i, a) => a.indexOf(e) !== i);
    if (duplicatedIds.length > 0 && onFindDuplicates) onFindDuplicates(duplicatedIds);
  }

  return allItems;
};
