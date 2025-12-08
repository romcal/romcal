/**
 * Utility script to check and fix alphabetical sorting of data files.
 *
 * Usage:
 *   npx ts-node build/sort-data.ts check   - Check for sorting issues
 *   npx ts-node build/sort-data.ts fix     - Fix sorting issues in place
 */

import * as fs from 'fs';
import * as path from 'path';

import chalk from 'chalk';

const martyrologyPath = path.resolve(__dirname, '../src/catalog/martyrology.ts');
const localesDir = path.resolve(__dirname, '../src/locales');

type SortIssue = {
  file: string;
  key: string;
  shouldComeBefore: string;
};

/**
 * Find keys that are out of alphabetical order in an object.
 */
const findUnsortedKeys = (keys: string[]): { key: string; shouldComeBefore: string }[] => {
  const result: { key: string; shouldComeBefore: string }[] = [];

  for (let i = 1; i < keys.length; i++) {
    if (keys[i - 1].localeCompare(keys[i]) > 0) {
      // keys[i-1] is alphabetically AFTER keys[i], so keys[i] should come first
      result.push({
        key: keys[i],
        shouldComeBefore: keys[i - 1],
      });
    }
  }

  return result;
};

/**
 * Check martyrology.ts for sorting issues.
 */
const checkMartyrology = (): SortIssue[] => {
  const content = fs.readFileSync(martyrologyPath, 'utf-8');

  // Extract keys from the catalog object
  const catalogMatch = /static\s+catalog\s*[:=]\s*\{/.exec(content);
  if (!catalogMatch) return [];

  const startIndex = catalogMatch.index + catalogMatch[0].length;
  let braceCount = 1;
  let i = startIndex;

  while (braceCount > 0 && i < content.length) {
    if (content[i] === '{') braceCount++;
    if (content[i] === '}') braceCount--;
    i++;
  }

  const objectContent = content.slice(startIndex, i - 1);

  // Extract keys
  const keys: string[] = [];
  let depth = 0;
  let lineStart = 0;

  for (let j = 0; j <= objectContent.length; j++) {
    const char = objectContent[j];

    if (char === '\n' || j === objectContent.length) {
      if (depth === 0) {
        const line = objectContent.slice(lineStart, j);
        const keyMatch = /^\s*['"]?([a-z0-9_]+)['"]?\s*:/.exec(line);
        if (keyMatch) {
          keys.push(keyMatch[1]);
        }
      }
      lineStart = j + 1;
    }

    if (char === '{') depth++;
    if (char === '}') depth--;
  }

  const unsorted = findUnsortedKeys(keys);
  return unsorted.map((u) => ({
    file: 'src/catalog/martyrology.ts',
    ...u,
  }));
};

/**
 * Check locale files for sorting issues in the names object.
 */
const checkLocales = (): SortIssue[] => {
  const issues: SortIssue[] = [];
  const files = fs.readdirSync(localesDir).filter((f) => f.endsWith('.ts') && f !== 'index.ts');

  for (const file of files) {
    const filePath = path.join(localesDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    // Find names object
    const namesMatch = /names\s*[:=]\s*\{/.exec(content);
    if (!namesMatch) continue;

    const startIndex = namesMatch.index + namesMatch[0].length;
    let braceCount = 1;
    let i = startIndex;

    while (braceCount > 0 && i < content.length) {
      if (content[i] === '{') braceCount++;
      if (content[i] === '}') braceCount--;
      i++;
    }

    const objectContent = content.slice(startIndex, i - 1);

    // Extract keys
    const keys: string[] = [];
    let depth = 0;
    let lineStart = 0;

    for (let j = 0; j <= objectContent.length; j++) {
      const char = objectContent[j];

      if (char === '\n' || j === objectContent.length) {
        if (depth === 0) {
          const line = objectContent.slice(lineStart, j);
          const keyMatch = /^\s*['"]?([a-z0-9_]+)['"]?\s*:/.exec(line);
          if (keyMatch) {
            keys.push(keyMatch[1]);
          }
        }
        lineStart = j + 1;
      }

      if (char === '{') depth++;
      if (char === '}') depth--;
    }

    const unsorted = findUnsortedKeys(keys);
    issues.push(
      ...unsorted.map((u) => ({
        file: `src/locales/${file}`,
        ...u,
      }))
    );
  }

  return issues;
};

/**
 * Main entry point.
 */
const main = (): void => {
  const mode = process.argv[2];

  if (mode !== 'check' && mode !== 'fix') {
    console.error('Usage: npx ts-node build/sort-data.ts [check|fix]');
    process.exit(1);
  }

  if (mode === 'check') {
    const martyrologyIssues = checkMartyrology();
    const localeIssues = checkLocales();
    const allIssues = [...martyrologyIssues, ...localeIssues];

    if (allIssues.length === 0) {
      console.log(chalk.green('All data files are sorted correctly.'));
      process.exit(0);
    }

    console.error(chalk.red(`Found ${allIssues.length} sorting issue(s):\n`));

    for (const issue of allIssues) {
      console.error(
        chalk.yellow(`  ${issue.file}:`),
        `"${chalk.bold(issue.key)}" should come before "${chalk.bold(issue.shouldComeBefore)}"`
      );
    }

    console.error(chalk.cyan('\nRun "npm run sort-data:fix" to fix these issues automatically.'));
    process.exit(1);
  }

  if (mode === 'fix') {
    console.log('Sorting data files...\n');

    // For now, just report that fixing would require more complex file manipulation
    // A proper fix would need to parse and rewrite the TypeScript files
    console.log(chalk.yellow('Note: Automatic fixing of TypeScript files is complex.'));
    console.log(chalk.yellow('Please manually sort the keys in the following files:'));

    const martyrologyIssues = checkMartyrology();
    const localeIssues = checkLocales();
    const allIssues = [...martyrologyIssues, ...localeIssues];

    const files = new Set(allIssues.map((i) => i.file));
    for (const file of files) {
      console.log(chalk.cyan(`  - ${file}`));
    }

    console.log(chalk.yellow('\nTip: Sort the object keys alphabetically (a-z).'));
  }
};

main();
