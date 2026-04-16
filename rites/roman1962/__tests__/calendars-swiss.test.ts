import {
  SwitzerlandBasel,
  SwitzerlandChur,
  SwitzerlandLausanneGenevaFribourg,
  SwitzerlandLugano,
  SwitzerlandSaintMauriceAbbey,
  SwitzerlandSanktGallen,
  SwitzerlandSion,
  Switzerland,
  calendarOverlays,
} from '../src/calendars';
import { Romcal1962 } from '../src/romcal-1962';
import { buildSanctoral1962 } from '../src/sanctoral';

describe('Switzerland national overlay (Nicholas of Flüe)', () => {
  test('Sep 25 has Nicholas of Flüe as ClassI principal patron on the bare national overlay', () => {
    const map = buildSanctoral1962(1962, { overlay: new Switzerland() });
    const entries = map.get('1962-09-25');
    expect(entries).toBeDefined();
    const klaus = entries!.find((e) => e.fileKey === 'saint_nicholas_of_flue_hermit_patron_of_switzerland');
    expect(klaus).toBeDefined();
    expect(klaus!.rank1962).toBe('ClassI');
  });

  test('Nicholas of Flüe propagates to every diocesan overlay via parent inheritance', async () => {
    for (const overlay of [
      SwitzerlandBasel,
      SwitzerlandChur,
      SwitzerlandSanktGallen,
      SwitzerlandSion,
      SwitzerlandLugano,
      SwitzerlandLausanneGenevaFribourg,
      SwitzerlandSaintMauriceAbbey,
    ]) {
      const r = new Romcal1962({ calendar: overlay, localeId: 'de' });
      const day = await r.getOneLiturgicalDay('1962-09-25');
      expect(day).toBeDefined();
      expect(day!.primary.key).toBe('saint_nicholas_of_flue_hermit_patron_of_switzerland');
      expect(day!.primary.name).toMatch(/Niklaus von Flüe/);
    }
  });
});

describe('Diocese of Basel', () => {
  test('Sts Ursus & Victor (Sep 30) are ClassI, outranking universal St Jerome', async () => {
    const r = new Romcal1962({ calendar: SwitzerlandBasel });
    const day = await r.getOneLiturgicalDay('1962-09-30');
    expect(day!.primary.key).toBe('saints_ursus_and_victor_of_solothurn_martyrs_patrons');
    expect(day!.primary.rank1962).toBe('ClassI');
    expect(day!.commemorations.some((c) => c.key === 'saint_jerome_priest_confessor_and_doctor_of_the_church')).toBe(
      true
    );
  });

  test('St Ursicinus (Dec 20) is commemorated on the Advent feria (ClassII outranks ClassIII)', async () => {
    const r = new Romcal1962({ calendar: SwitzerlandBasel });
    const day = await r.getOneLiturgicalDay('1962-12-20');
    // Advent III Thursday is a ClassII privileged feria which outranks the
    // ClassIII diocesan saint — Ursicinus correctly falls to commemoration.
    expect(day!.primary.key).toBe('advent_3_thursday');
    expect(day!.commemorations.some((c) => c.key === 'saint_ursicinus_of_saint_ursanne_abbot')).toBe(true);
  });
});

describe('Diocese of Sankt Gallen', () => {
  test('St Gallus (Oct 16) is ClassI principal patron', async () => {
    const r = new Romcal1962({ calendar: SwitzerlandSanktGallen });
    const day = await r.getOneLiturgicalDay('1962-10-16');
    expect(day!.primary.key).toBe('saint_gallus_abbot_patron_of_the_diocese');
    expect(day!.primary.rank1962).toBe('ClassI');
  });

  test('St Othmar (Nov 16) is ClassII co-patron, outranking universal St Gertrude', async () => {
    const r = new Romcal1962({ calendar: SwitzerlandSanktGallen });
    const day = await r.getOneLiturgicalDay('1962-11-16');
    expect(day!.primary.key).toBe('saint_otmar_abbot_copatron_of_the_diocese');
    expect(day!.primary.rank1962).toBe('ClassII');
  });
});

describe('Diocese of Sion (Sitten)', () => {
  test('St Theodore/Théodule (Aug 16) is ClassI principal patron, outranking St Joachim', async () => {
    const r = new Romcal1962({ calendar: SwitzerlandSion });
    const day = await r.getOneLiturgicalDay('1962-08-16');
    expect(day!.primary.key).toBe('saint_theodore_of_octodurus_bishop_patron_of_the_diocese');
    expect(day!.primary.rank1962).toBe('ClassI');
    expect(day!.commemorations.some((c) => c.key === 'saint_joachim_confessor_father_of_the_blessed_virgin_mary')).toBe(
      true
    );
  });
});

describe('Diocese of Lugano', () => {
  test('`raise` mode elevates Charles Borromeo (Nov 4) without duplicating the entry', () => {
    const map = buildSanctoral1962(1962, { overlay: new SwitzerlandLugano() });
    const entries = map.get('1962-11-04')!;
    const borromeo = entries.filter((e) => e.fileKey === 'saint_charles_borromeo_bishop_and_confessor');
    expect(borromeo).toHaveLength(1);
    expect(borromeo[0].rank1962).toBe('ClassI');
    expect(borromeo[0].name).toMatch(/Principalis Patroni|Patron/);
  });

  test('Charles Borromeo Nov 4 primary in Lugano carries the overlay patron name', async () => {
    const r = new Romcal1962({ calendar: SwitzerlandLugano, localeId: 'it' });
    const day = await r.getOneLiturgicalDay('1962-11-04');
    expect(day!.primary.name).toMatch(/Carlo Borromeo/);
    expect(day!.primary.name).toMatch(/Patrono/);
  });

  test('St Abbondio (Aug 31) is ClassII secondary patron', async () => {
    const r = new Romcal1962({ calendar: SwitzerlandLugano });
    const day = await r.getOneLiturgicalDay('1962-08-31');
    expect(day!.primary.key).toBe('saint_abundius_of_como_bishop_copatron_of_the_diocese');
    expect(day!.primary.rank1962).toBe('ClassII');
  });
});

describe('Diocese of Lausanne–Geneva–Fribourg', () => {
  test('`raise` elevates universal St Nicholas (Dec 6) to ClassI in place', () => {
    const map = buildSanctoral1962(1962, { overlay: new SwitzerlandLausanneGenevaFribourg() });
    const entries = map.get('1962-12-06')!;
    const nicholas = entries.filter((e) => e.fileKey === 'saint_nicholas_bishop_and_confessor');
    expect(nicholas).toHaveLength(1);
    expect(nicholas[0].rank1962).toBe('ClassI');
  });

  test('Dec 6 primary is St Nicholas with the patron suffix in French locale', async () => {
    const r = new Romcal1962({ calendar: SwitzerlandLausanneGenevaFribourg, localeId: 'fr' });
    const day = await r.getOneLiturgicalDay('1962-12-06');
    expect(day!.primary.name).toMatch(/Nicolas/);
    expect(day!.primary.name).toMatch(/Patron principal/);
  });
});

describe('Territorial Abbey of Saint-Maurice', () => {
  test('Ss Maurice & Companions (Sep 22) raised to ClassI for the abbey', async () => {
    const r = new Romcal1962({ calendar: SwitzerlandSaintMauriceAbbey });
    const day = await r.getOneLiturgicalDay('1962-09-22');
    expect(day!.primary.key).toBe('ss_maurice_and_companions_martyrs_optional');
    expect(day!.primary.rank1962).toBe('ClassI');
    // St Thomas of Villanova (universal ClassIII for this date) drops to commemoration.
    expect(day!.commemorations.some((c) => c.key === 'saint_thomas_of_villanova_bishop_and_confessor')).toBe(true);
  });
});

describe('Registry + backwards compatibility', () => {
  test('every Swiss overlay is registered with a stable slug', () => {
    expect(Object.keys(calendarOverlays).sort()).toEqual(
      [
        'europe',
        'switzerland',
        'switzerland.basel',
        'switzerland.chur',
        'switzerland.lausanne-geneva-fribourg',
        'switzerland.lugano',
        'switzerland.saint-maurice',
        'switzerland.sankt-gallen',
        'switzerland.sion',
      ].sort()
    );
  });

  test('Romcal1962 with no overlay still returns the pure universal calendar on Sep 25', async () => {
    const r = new Romcal1962();
    const day = await r.getOneLiturgicalDay('1962-09-25');
    // Sep 25 is empty in the 1962 general calendar — should fall through to Ember/weekday.
    if (day) {
      expect(day.primary.key).not.toBe('saint_nicholas_of_flue_hermit_patron_of_switzerland');
    }
  });
});
