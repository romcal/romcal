import { Common, CommonDefinition } from './commons';

describe('Common', () => {
  it('names every common after its own key', () => {
    const entries = Object.entries(Common);

    expect(entries).toHaveLength(34);
    entries.forEach(([key, value]) => expect(value).toBe(key));
  });

  it('starts with the absence of a common', () => {
    expect(Common.None).toBe('None');
  });
});

describe('CommonDefinition', () => {
  it('lists the simplified commons used by the martyrology metadata', () => {
    expect(Object.keys(CommonDefinition)).toHaveLength(23);
    expect(CommonDefinition.None).toBe('None');
    expect(CommonDefinition.BlessedVirginMary).toBe('BlessedVirginMary');
    expect(CommonDefinition.HolyWomen).toBe('HolyWomen');
  });

  it('keeps Popes under the value PopeOrBishop, as the Common enum names it', () => {
    expect(CommonDefinition.Popes).toBe('PopeOrBishop');
    expect(Common.Pastors_PopeOrBishop).toBe('Pastors_PopeOrBishop');
  });

  it('names every other definition after its own key', () => {
    Object.entries(CommonDefinition)
      .filter(([key]) => key !== 'Popes')
      .forEach(([key, value]) => expect(value).toBe(key));
  });
});
