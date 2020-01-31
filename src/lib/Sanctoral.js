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

    // Fetch and attach items to this main object
    files
      .map(file => path.join(__dirname, file))
      .forEach(file => Object.assign(this, YAML.safeLoad(fs.readFileSync(file, 'utf8'))));

    // Map joined items from the `join` property
    Object.keys(this).forEach(key => {
      if (Array.isArray(this[key].join)) this[key].join = this[key].join.map(joinedKey => this[joinedKey]);
    });
  }
}
