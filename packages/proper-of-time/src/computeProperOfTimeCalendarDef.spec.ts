import { CalendarScope } from '@romcal/shared';

import { computeProperOfTimeCalendarDef as calDef } from './computeProperOfTimeCalendarDef';

describe('computeProperOfTimeDefinitions', () => {
  it('should have the correct properties', () => {
    const properOfTime = calDef(CalendarScope.Gregorian);
    expect(properOfTime.calendarId).toEqual('proper-of-time');
    expect(properOfTime.calendarTree).toBeArrayOfSize(0);
    expect(properOfTime.config.epiphanyOnSunday).toBeFalsy();
    expect(properOfTime.config.ascensionOnSunday).toBeFalsy();
    expect(properOfTime.config.corpusChristiOnSunday).toBeFalsy();
  });

  it('should compute the correct number of definitions', () => {
    expect(calDef(CalendarScope.Gregorian).definitions.length).toEqual(392);
    expect(calDef(CalendarScope.Liturgical).definitions.length).toEqual(392);
  });

  it('should have the correct year offset on every definitions for a liturgical scope', () => {
    const liturgicalCalDef = calDef(CalendarScope.Liturgical).definitions;
    const maryMotherOfGodIndex = liturgicalCalDef.findIndex(
      (d) => d.liturgicalDayId === 'mary_mother_of_god',
    );
    liturgicalCalDef.forEach((d, index) => {
      expect(d.dateDef?.yearOffset).toEqual(index < maryMotherOfGodIndex ? -1 : 0);
    });
  });

  it('should have the correct year offset on every definitions for a gregorian scope', () => {
    const gregorianCalDef = calDef(CalendarScope.Gregorian).definitions;
    gregorianCalDef.forEach((d) => {
      expect(d.dateDef?.yearOffset).toEqual(0);
    });
  });
});
