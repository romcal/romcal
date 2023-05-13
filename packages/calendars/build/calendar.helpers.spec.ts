/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { mkdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

import rimraf from 'rimraf';

import { writeCalendarFile } from './calendar.helpers';

jest.mock('@romcal/build', () => ({
  ...jest.requireActual('@romcal/build'),
  log: jest.fn(),
  logError: jest.fn(),
}));

const outDir = path.join(__dirname, '__tests__', 'dist');

describe('calendar.helpers', () => {
  afterAll(() => {
    rimraf.nativeSync(outDir);
  });

  describe('writeCalendarFile', () => {
    beforeEach(() => {
      rimraf.nativeSync(outDir);
      mkdirSync(outDir, { recursive: true });
    });

    it('should write the calendar JSON file to the output directory', () => {
      const calendar = {
        calendarId: 'test',
        calendarTree: ['test'],
        definitions: [],
        config: {
          epiphanyOnSunday: false,
          ascensionOnSunday: false,
          corpusChristiOnSunday: false,
        },
      };

      const onWriteFile = jest.fn();
      writeCalendarFile(calendar, outDir, onWriteFile);
      const writtenFileContent = JSON.parse(
        readFileSync(path.join(outDir, 'test.json'), { encoding: 'utf-8' }),
      );

      expect(writtenFileContent).toMatchObject(calendar);
      expect(writtenFileContent.calendarId).toBe('test');
      expect(onWriteFile).toHaveBeenCalledWith({
        outPath: path.join(outDir, 'test.json'),
        namespace: 'json',
      });
    });
  });
});
