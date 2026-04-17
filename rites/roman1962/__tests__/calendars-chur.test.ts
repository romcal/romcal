import { Switzerland_Chur } from '../src/calendars';
import { Romcal1962 } from '../src/romcal-1962';
import { buildSanctoral1962 } from '../src/sanctoral';

describe('Diocese of Chur overlay — 1962 rite', () => {
  describe('sanctoral-level overlay merge', () => {
    const map = buildSanctoral1962(1962, { overlay: new Switzerland_Chur() });

    test('St Lucius (Dec 3) ranks as Class I principal patron', () => {
      const entries = map.get('1962-12-03')!;
      const lucius = entries.find((e) => e.fileKey === 'saint_lucius_of_chur_bishop_and_martyr_patron');
      expect(lucius).toBeDefined();
      expect(lucius!.rank1962).toBe('ClassI');
      expect(lucius!.class1962).toBe(1);
      expect(lucius!.colors).toContain('Red');
    });

    test('universal St Francis Xavier is retained on Dec 3 as commemoration candidate', () => {
      const entries = map.get('1962-12-03')!;
      const fx = entries.find((e) => e.fileKey === 'saint_francis_xavier_confessor');
      expect(fx).toBeDefined();
      expect(entries.length).toBeGreaterThanOrEqual(2);
    });

    test('Placidus & Sigisbert (July 11) are Class III and outrank universal Pius I', () => {
      const entries = map.get('1962-07-11')!;
      const feast = entries.find((e) => e.fileKey === 'saints_placidus_and_sigisbert_martyrs');
      expect(feast).toBeDefined();
      expect(feast!.rank1962).toBe('ClassIII');
      expect(feast!.numericRank).toBeGreaterThan(
        entries.find((e) => e.fileKey === 'saint_pius_i_pope_and_martyr')!.numericRank
      );
    });

    test('Florinus (Nov 17) present as Class III confessor', () => {
      const entries = map.get('1962-11-17')!;
      const florinus = entries.find((e) => e.fileKey === 'saint_florinus_of_remus_confessor');
      expect(florinus).toBeDefined();
      expect(florinus!.rank1962).toBe('ClassIII');
      expect(florinus!.colors).toContain('White');
    });

    test('Gerold (Apr 19) added as ClassIV hermit on an otherwise-open day', () => {
      const entries = map.get('1962-04-19')!;
      expect(entries).toHaveLength(1);
      expect(entries[0].fileKey).toBe('saint_gerold_of_einsiedeln_hermit');
      expect(entries[0].rank1962).toBe('ClassIV');
    });

    test('base calendar is not mutated (no Chur feasts without overlay)', () => {
      const base = buildSanctoral1962(1962);
      const dec3 = base.get('1962-12-03')!;
      expect(dec3.find((e) => e.fileKey === 'saint_lucius_of_chur_bishop_and_martyr_patron')).toBeUndefined();
    });
  });

  describe('full-calendar integration via Romcal1962', () => {
    test('Dec 3 primary celebration is St Lucius, with Francis Xavier commemorated', async () => {
      const r = new Romcal1962({ calendar: Switzerland_Chur });
      const day = await r.getOneLiturgicalDay('1962-12-03');
      expect(day).toBeDefined();
      expect(day!.primary.key).toBe('saint_lucius_of_chur_bishop_and_martyr_patron');
      expect(day!.primary.rank1962).toBe('ClassI');
      expect(day!.commemorations.some((c) => c.key === 'saint_francis_xavier_confessor')).toBe(true);
    });

    test('July 11 primary is Placidus & Sigisbert in the Chur calendar', async () => {
      const r = new Romcal1962({ calendar: Switzerland_Chur });
      const day = await r.getOneLiturgicalDay('1962-07-11');
      expect(day!.primary.key).toBe('saints_placidus_and_sigisbert_martyrs');
    });

    test('locale "de" renders Chur-overlay German names from the overlay itself', async () => {
      const r = new Romcal1962({ calendar: Switzerland_Chur, localeId: 'de' });
      const day = await r.getOneLiturgicalDay('1962-12-03');
      expect(day!.primary.name).toMatch(/Luzius/);
      expect(day!.primary.name).toMatch(/Bistums|Diözese/);
    });

    test('locale "en" falls back through overlay en entry', async () => {
      const r = new Romcal1962({ calendar: Switzerland_Chur, localeId: 'en' });
      const florinus = await r.getOneLiturgicalDay('1962-11-17');
      expect(florinus!.primary.name).toMatch(/Florinus/);
    });

    test('Romcal1962 without `calendar` leaves universal calendar untouched', async () => {
      const r = new Romcal1962();
      const day = await r.getOneLiturgicalDay('1962-12-03');
      expect(day!.primary.key).toBe('saint_francis_xavier_confessor');
    });

    test('config.calendarId exposes the overlay id', () => {
      const r = new Romcal1962({ calendar: Switzerland_Chur });
      expect(r.config.calendarId).toBe('switzerland__chur');
    });

    test('propers resolve via commune for Chur overlay feasts', async () => {
      const r = new Romcal1962({ calendar: Switzerland_Chur, includePropers: true, propersLocales: ['la'] });
      const lucius = await r.getOneLiturgicalDay('1962-12-03');
      expect(lucius!.primary.propers).toBeDefined();
      expect(lucius!.primary.properRef.communeSlug).toBeDefined();
    });
  });
});
