import { BaseRomcalBundle } from '../types/bundle';

import { RomcalBundle } from './bundle';

describe('bundle.ts', () => {
  it('keeps every field of the input it is built from', () => {
    const input = {
      calendarName: 'general_roman',
      i18n: { id: 'en' },
      inputs: { definitions: [] },
      martyrology: { entries: [] },
      particularConfig: { name: 'general_roman' },
    } as unknown as BaseRomcalBundle;

    const bundle = new RomcalBundle(input);

    expect(bundle.calendarName).toBe(input.calendarName);
    expect(bundle.particularConfig).toBe(input.particularConfig);
    expect(bundle.inputs).toBe(input.inputs);
    expect(bundle.martyrology).toBe(input.martyrology);
    expect(bundle.i18n).toBe(input.i18n);
  });
});
