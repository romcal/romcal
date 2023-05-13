/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { mkdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

import { logError } from '@romcal/build';
import rimraf from 'rimraf';

import { buildLocales, getLocales, mergeWithBasedLocale, writeFile } from './locale.helpers';

jest.mock('@romcal/build', () => ({
  ...jest.requireActual('@romcal/build'),
  log: jest.fn(),
  logError: jest.fn(),
}));

const fixturesDir = path.join(__dirname, '..', '__tests__', 'fixtures');
const outDir = path.join(__dirname, '__tests__', 'dist');

describe('locale.helpers', () => {
  afterAll(() => {
    rimraf.nativeSync(outDir);
  });

  describe('getLocales', function () {
    beforeEach(() => {
      rimraf.nativeSync(outDir);
    });

    it('should retrieve locales correctly', async function () {
      const entryPoints = path.join(fixturesDir, 'aa-*.yaml');
      const locales = getLocales(entryPoints);

      expect(locales).toMatchObject({
        [path.join(fixturesDir, 'aa-aa.yaml')]: { localeCode: 'aa-AA' },
        [path.join(fixturesDir, 'aa-ab.yaml')]: { localeCode: 'aa-AB' },
      });
    });

    it('should throw an error if duplicate locale codes are found', async function () {
      const entryPoints = path.join(fixturesDir, 'zz-*.yaml');
      expect(() => getLocales(entryPoints)).toThrow('Duplicated locale codes: zz-AA');
    });
  });

  describe('mergeWithBasedLocale', function () {
    beforeEach(() => {
      rimraf.nativeSync(outDir);
    });

    it('should merge locales when a based locale is found', async function () {
      const entryPoints = path.join(fixturesDir, '{aa,aa-*}.yaml');
      const allLocales = getLocales(entryPoints);
      const localesArr = Object.values(allLocales);
      const aa = localesArr.find((l) => l.localeCode === 'aa');
      const aaAA = localesArr.find((l) => l.localeCode === 'aa-AA');

      expect(aa!.names?.locale).toBe('Afar');
      expect(aa!.names?.foo).toBe('bar');
      expect(aaAA!.names?.foo).toBeUndefined();
      expect(aaAA!.names?.locale).toBe('Afar-Afar');

      const updatedLocale = mergeWithBasedLocale(aaAA!, allLocales);

      expect(updatedLocale.names?.foo).toBe('bar');
      expect(updatedLocale.names?.locale).toBe('Afar-Afar');
    });
  });

  describe('writeLocale', () => {
    beforeEach(() => {
      rimraf.nativeSync(outDir);
      mkdirSync(outDir, { recursive: true });
    });

    it('should write the locale JSON file to the output directory', () => {
      const locale = {
        localeCode: 'en-ZZ',
        messages: {
          test: 'test',
        },
      };

      const onWriteFile = jest.fn();
      writeFile(locale, outDir, onWriteFile);
      const writtenFileContent = JSON.parse(
        readFileSync(path.join(outDir, 'en-zz.json'), { encoding: 'utf-8' }),
      );

      expect(writtenFileContent).toMatchObject(locale);
      expect(writtenFileContent.localeCode).toBe('en-ZZ');
      expect(writtenFileContent.messages.test).toBe('test');
      expect(onWriteFile).toHaveBeenCalledWith({
        outPath: path.join(outDir, 'en-zz.json'),
        namespace: 'json',
      });
    });
  });

  describe('buildLocales', function () {
    beforeEach(() => {
      rimraf.nativeSync(outDir);
    });

    it('should build locales correctly', async function () {
      const entryPoints = path.join(fixturesDir, 'aa-*.yaml');
      const onWriteFile = jest.fn();
      await buildLocales({ entryPoints, outDir, onWriteFile });

      expect(onWriteFile).toHaveBeenCalledWith({
        outPath: path.join(outDir, 'aa-aa.json'),
        namespace: 'json',
      });
      expect(onWriteFile).toHaveBeenCalledWith({
        outPath: path.join(outDir, 'aa-ab.json'),
        namespace: 'json',
      });
    });

    it('should stdout an error if duplicate locale codes are found', async function () {
      const entryPoints = path.join(fixturesDir, 'zz-*.yaml');
      const onWriteFile = jest.fn();
      buildLocales({ entryPoints, outDir, onWriteFile });

      expect(logError).toHaveBeenCalledWith('Duplicated locale codes: zz-AA');
    });
  });
});
