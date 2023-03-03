/**
 * Workaround to avoid the issue with default class export in CJS/IIFE for now.
 *
 * This workaround will avoid having to import Romcal as:
 * - CJS:  Romcal = require('romcal').default;
 * - IIFE: const romcal = new Romcal.default();
 *
 * More info here: https://github.com/evanw/esbuild/issues/1182
 */
import Romcal from './index';

module.exports = Romcal;
