import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

import { BuiltFile, log, logError, yamlImports } from '@romcal/build';
import {
  MartyrologyItem,
  MartyrologyItemId,
  MartyrologyItemPointer,
  MartyrologyMap,
  RomcalTitle,
  TitlesDef,
} from '@romcal/shared';

// import { yamlImports } from './yaml.helpers';

export function inputToTitles({
  existingTitles,
  input,
  onEmptyTitleList,
}: {
  existingTitles: RomcalTitle[] | undefined;
  input: TitlesDef | undefined;
  onEmptyTitleList?: () => void;
}): RomcalTitle[] | undefined {
  if (!input) {
    return [...new Set(existingTitles)];
  }

  if (Array.isArray(input)) {
    if (input.length === 0) onEmptyTitleList?.();
    return input.length ? [...new Set(input)] : undefined;
  }

  const { prepend = [], append = [] } = input;

  if (prepend.length === 0 && append.length === 0) {
    onEmptyTitleList?.();
  }

  return [...new Set([...prepend, ...(existingTitles ?? []), ...append])];
}

export function inputToOneMartyrologyItem({
  catalog: catalog,
  itemsPointer,
  existingItems,
  onMartyrologyItemNotFound,
  onEmptyTitleList,
}: {
  catalog: MartyrologyMap;
  itemsPointer?: MartyrologyItemPointer;
  existingItems?: MartyrologyItem[];
  onMartyrologyItemNotFound?: (id: MartyrologyItemId) => void;
  onEmptyTitleList?: () => void;
}): MartyrologyItem | undefined {
  if (itemsPointer === undefined) return undefined;

  if (typeof itemsPointer === 'string') {
    const existingMartyrologyItem = existingItems?.find(
      (item) => item.martyrologyId === itemsPointer,
    );
    if (existingMartyrologyItem) return existingMartyrologyItem;

    if (!Object.hasOwnProperty.call(catalog, itemsPointer)) {
      onMartyrologyItemNotFound?.(itemsPointer);
      return undefined;
    }

    return {
      martyrologyId: itemsPointer,
      ...catalog[itemsPointer],
    };
  }

  const martyrologyItem = inputToOneMartyrologyItem({
    catalog,
    itemsPointer: itemsPointer.id,
    existingItems,
    onMartyrologyItemNotFound,
  });
  if (!martyrologyItem) {
    onMartyrologyItemNotFound?.(itemsPointer.id);
    return undefined;
  }

  return {
    ...martyrologyItem,
    ...(typeof itemsPointer.hideTitles === 'boolean' && { hideTitles: itemsPointer.hideTitles }),
    ...(itemsPointer.titles !== undefined && {
      titles: inputToTitles({
        existingTitles: martyrologyItem.titles,
        input: itemsPointer.titles,
        onEmptyTitleList,
      }),
    }),
    ...(itemsPointer.count !== undefined && { count: itemsPointer.count }),
  };
}

export function inputToManyMartyrologyItems({
  catalog,
  allItemsPointers,
  existingItems,
  onMartyrologyItemNotFound,
  onEmptyTitleList,
}: {
  catalog: MartyrologyMap;
  allItemsPointers?: MartyrologyItemPointer[];
  existingItems?: MartyrologyItem[];
  onMartyrologyItemNotFound?: (id: MartyrologyItemId) => void;
  onEmptyTitleList?: () => void;
}): MartyrologyItem[] | undefined {
  if (allItemsPointers === undefined) return existingItems;

  return allItemsPointers.reduce<MartyrologyItem[]>((acc, itemPointer) => {
    const item = inputToOneMartyrologyItem({
      catalog,
      itemsPointer: itemPointer,
      existingItems,
      onMartyrologyItemNotFound,
      onEmptyTitleList,
    });
    if (item) acc.push(item);
    return acc;
  }, []);
}

type BuildMartyrologyOptions = {
  entryPoint: string;
  outPath: string;
  onWriteFile?: (opt: BuiltFile) => void;
};

export async function buildMartyrology({
  entryPoint,
  outPath,
  onWriteFile,
}: BuildMartyrologyOptions): Promise<MartyrologyMap> {
  let allMartyrologyMap: MartyrologyMap = {};

  try {
    log({ message: `Building martyrology: ${entryPoint}`, namespace: 'json' });

    allMartyrologyMap = Object.values(yamlImports<MartyrologyMap>({ entryPoints: entryPoint }))[0];

    // Remove the deprecated name property.
    allMartyrologyMap = Object.fromEntries(
      Object.entries(allMartyrologyMap).map(([key, value]) => [key, { ...value, name: undefined }]),
    );

    mkdirSync(path.dirname(outPath), { recursive: true });
    writeFileSync(outPath, JSON.stringify(allMartyrologyMap));

    if (onWriteFile) onWriteFile({ outPath, namespace: 'json' });
  } catch (error) {
    error instanceof Error ? logError(error.message) : logError(`${error}`);
  }

  return allMartyrologyMap;
}
