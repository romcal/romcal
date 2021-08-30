import fs from 'fs';
import path from 'path';
import { PackageJson } from 'type-fest';
import { GENERAL_ROMAN_NAME } from '../lib/constants/general-calendar-names';
import { locales } from '../lib/locales';
import { particularCalendars } from '../lib/particular-calendars';
import { toCamelCase } from '../lib/utils/string';
import pkg from '../package.json';

const allCalendars = [toCamelCase(GENERAL_ROMAN_NAME), ...Object.keys(particularCalendars)];

allCalendars.forEach((calendar) => {
  // mixed snake and underscore case to kebab case
  const pkgName = calendar
    .replace(/([A-Z])/g, '-$1')
    .replace(/_/g, '-')
    .toLowerCase();

  const dir = path.resolve(__dirname, `../dist/bundles/${pkgName}`);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const modulePkg: PackageJson = {
    name: `@romcal/calendar-${pkgName}`,
    version: pkg.version,
    description: `Localized romcal calendar for '${calendar}'`,
    main: 'index.cjs.js',
    module: 'index.esm.js',
    engines: pkg.engines,
    repository: pkg.repository,
    keywords: pkg.keywords,
    author: 'The Romcal Team (https://github.com/romcal/romcal)',
    bugs: pkg.bugs,
    homepage: pkg.homepage,
    peerDependencies: { [pkg.name]: pkg.version },
    license: pkg.license,
  };

  fs.writeFileSync(path.resolve(dir, 'package.json'), JSON.stringify(modulePkg, null, 2), 'utf-8');

  // Write index file to all type of build
  ['cjs', 'esm'].forEach((type) => {
    const imports = Object.keys(locales).reduce((acc, key) => {
      const importFileName = key.replace(/([A-Z])/g, '-$1').toLowerCase() + '.js';
      return acc + `import { ${calendar}_${key} } from './${type}/${importFileName}';\n`;
    }, '');
    const record = Object.keys(locales).reduce((acc, key) => {
      return acc + `  ${key}: ${calendar}_${key},\n`;
    }, '');
    const output = imports + '\n' + `export const ${calendar} = {\n` + record + '};';
    fs.writeFileSync(path.resolve(dir, `index.${type}.js`), output, 'utf-8');
  });
});
