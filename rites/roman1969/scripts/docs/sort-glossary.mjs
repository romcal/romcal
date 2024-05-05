import { readFile, writeFile } from 'node:fs';
import { resolve } from 'node:path';

import c from 'chalk';
import { diffTrimmedLines } from 'diff';
import { remark } from 'remark';
import gfm from 'remark-gfm';
import parse from 'remark-parse';
import stringify from 'remark-stringify';

const isCI = process.env.CI === 'true';
const dir = import.meta.dirname;
const file = resolve(dir, '../../docs/glossary.md');

/** Sort second-level headings alphabetically */
const sortHeadings = (tree) => {
  const sortedHeadings = [];
  let currentHeading = null;

  const top = {
    heading: undefined,
    content: [],
  };

  tree.children.every((node) => {
    if (node.type === 'heading' && node.depth === 1) {
      top.heading = node;
      return true;
    }
    if (node.type === 'heading' && node.depth !== 1) {
      return false;
    }
    top.content.push(node);
    return true;
  });

  tree.children.forEach((node) => {
    if (node.type === 'heading' && node.depth === 2) {
      if (currentHeading) {
        sortedHeadings.push(currentHeading);
      }
      currentHeading = {
        heading: node,
        content: [],
      };
    } else if (currentHeading) {
      currentHeading.content.push(node);
    }
  });

  if (currentHeading) {
    sortedHeadings.push(currentHeading);
  }

  sortedHeadings.sort((a, b) => {
    const headingA = a.heading.children.map((child) => child.value).join('');
    const headingB = b.heading.children.map((child) => child.value).join('');
    return headingA.localeCompare(headingB);
  });

  const newChildren = [];
  sortedHeadings.forEach((section) => {
    newChildren.push(section.heading);
    section.content.forEach((node) => {
      newChildren.push(node);
    });
  });

  // replay all the top body backwards on top of the children array
  top.content.reverse().forEach((node) => {
    newChildren.unshift(node);
  });
  newChildren.unshift(top.heading);

  // eslint-disable-next-line no-param-reassign
  tree.children = newChildren;
};

/** Read, sort and write the Markdown file */
const processFile = () => {
  readFile(file, 'utf8', (readError, data) => {
    if (readError) {
      console.error(readError);
      return;
    }

    remark()
      .use(parse)
      .use(gfm)
      .use(() => sortHeadings)
      .use(stringify, {
        bullet: '-',
        fence: '`',
        fences: true,
        incrementListMarker: false,
        listItemIndent: 'one',
        emphasis: '_',
      })
      .process(data, (processError, vfile) => {
        if (processError) {
          console.error(processError);
          return;
        }

        const updatedFile = String(vfile).replace(/^> \\\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)][ \t]*$/gm, '> [!$1]');

        if (isCI) {
          const diff = diffTrimmedLines(data, updatedFile).filter((part) => part.removed || part.added);

          if (diff.length) {
            console.error('Glossary items are not sorted. Please run `npm run sort-glossary` (locally).');

            diff.forEach((part) => {
              // green for additions, red for deletions
              const text = part.added ? c.bgGreen(part.value) : part.removed ? c.bgRed(part.value) : undefined;
              if (text) process.stderr.write(text);
            });

            process.exit(1);
          }

          console.info('Glossary items are sorted.');
          return;
        }

        writeFile(file, updatedFile, 'utf8', (writeError) => {
          if (writeError) {
            console.error(writeError);
            return;
          }

          console.log('Glossary items are sorted successfully.');
        });
      });
  });
};

processFile(file, file);
