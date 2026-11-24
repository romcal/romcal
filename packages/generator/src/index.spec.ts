import * as generator from './index';

describe('the generator package entry point', () => {
  it.each([
    'Colors',
    'Common',
    'CommonDefinition',
    'Dates',
    'daysInMonth',
    'isColor',
    'isLiturgicalDayProperOfTimeInput',
  ])('exports %s', (name) => {
    expect((generator as Record<string, unknown>)[name]).toBeDefined();
  });

  it('exports the pipeline classes, one for each stage', () => {
    ['Calendar', 'LiturgicalDay', 'LiturgicalDayConfig', 'LiturgicalDayDef', 'RomcalConfig'].forEach((name) => {
      expect(typeof (generator as Record<string, unknown>)[name]).toBe('function');
    });
  });
});
