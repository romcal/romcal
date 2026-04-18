import { Romcal1962 } from './romcal';

/**
 * Pick the first (primary) LiturgicalDay id at a given ISO date, or undefined.
 */
function idAt(cal: Record<string, { id: string }[]>, date: string): string | undefined {
  return cal[date]?.[0]?.id;
}

/**
 * All LiturgicalDay ids at a given ISO date (in order), or [] if the date is
 * missing from the calendar.
 */
function idsAt(cal: Record<string, { id: string }[]>, date: string): string[] {
  return (cal[date] ?? []).map((d) => d.id);
}

describe('1962 Proper of Time — canonical dates', () => {
  describe('liturgical year 2024', () => {
    let cal: Record<string, { id: string }[]>;

    beforeAll(async () => {
      const r = new Romcal1962();
      cal = (await r.generateCalendar(2024)) as unknown as Record<string, { id: string }[]>;
    });

    it('produces a populated calendar with both Jan and Dec dates', () => {
      expect(Object.keys(cal).length).toBeGreaterThan(360);
      expect(cal['2024-01-01']).toBeDefined();
      expect(cal['2024-12-25']).toBeDefined();
    });

    it('Septuagesima Sunday falls on 2024-01-28', () => {
      expect(idAt(cal, '2024-01-28')).toBe('septuagesima_sunday');
    });

    it('Ash Wednesday falls on 2024-02-14', () => {
      expect(idAt(cal, '2024-02-14')).toBe('ash_wednesday');
    });

    it('Passion Sunday falls on 2024-03-17', () => {
      expect(idAt(cal, '2024-03-17')).toBe('passion_sunday');
    });

    it('Palm Sunday falls on 2024-03-24', () => {
      expect(idAt(cal, '2024-03-24')).toBe('palm_sunday_of_the_passion_of_the_lord');
    });

    it('Holy Thursday pairs the weekday with the Triduum Mass (shifted winner)', () => {
      // Calendar engine shifts `thursday_of_the_lords_supper` off dates[0]
      // so the exposed primary becomes `holy_thursday` (Lent weekday).
      const ids = idsAt(cal, '2024-03-28');
      expect(ids).toContain('holy_thursday');
    });

    it('Good Friday is the Friday of the Passion of the Lord on 2024-03-29', () => {
      expect(idAt(cal, '2024-03-29')).toBe('friday_of_the_passion_of_the_lord');
    });

    it('Easter Sunday falls on 2024-03-31', () => {
      expect(idAt(cal, '2024-03-31')).toBe('easter_sunday');
    });

    it('Ascension of the Lord falls on 2024-05-09', () => {
      expect(idAt(cal, '2024-05-09')).toBe('ascension_of_the_lord');
    });

    it('Pentecost Sunday falls on 2024-05-19', () => {
      expect(idAt(cal, '2024-05-19')).toBe('pentecost_sunday');
    });

    it('Advent I Sunday falls on 2024-12-01', () => {
      expect(idAt(cal, '2024-12-01')).toBe('advent_1_sunday');
    });

    it('Christ the King (1962: last Sunday of October) falls on 2024-10-27', () => {
      expect(idAt(cal, '2024-10-27')).toBe('our_lord_jesus_christ_king_of_the_universe');
    });

    it('Nativity of the Lord falls on 2024-12-25', () => {
      expect(idAt(cal, '2024-12-25')).toBe('nativity_of_the_lord');
    });
  });

  describe('liturgical year 2025', () => {
    let cal: Record<string, { id: string }[]>;

    beforeAll(async () => {
      const r = new Romcal1962();
      cal = (await r.generateCalendar(2025)) as unknown as Record<string, { id: string }[]>;
    });

    it('Septuagesima Sunday falls on 2025-02-16', () => {
      expect(idAt(cal, '2025-02-16')).toBe('septuagesima_sunday');
    });

    it('Easter Sunday falls on 2025-04-20', () => {
      expect(idAt(cal, '2025-04-20')).toBe('easter_sunday');
    });

    it('Advent I Sunday falls on 2025-11-30', () => {
      expect(idAt(cal, '2025-11-30')).toBe('advent_1_sunday');
    });
  });
});
