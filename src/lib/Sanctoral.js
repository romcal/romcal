// @flow

import YAML from 'js-yaml';
import fs from 'fs';
import path from 'path'
import glob from 'glob';

export default class Sanctoral {

  constructor() {
    const files: string[] = glob.sync('../sanctoral/*.yml', {
      cwd: __dirname
    });

    files
      .map(file => path.join(__dirname, file))
      .forEach(file => Object.assign(this, YAML.safeLoad(fs.readFileSync(file, 'utf8'))));
  }
}
