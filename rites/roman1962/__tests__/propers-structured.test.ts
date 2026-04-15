import { buildLiturgicalYear1962 } from '../src/calendar-year';
import { resolvePropers, resolvePropersBlocks } from '../src/propers';

describe('resolvePropersBlocks — structured PropersBlock output', () => {
  const year1962 = buildLiturgicalYear1962(1962);
  const day = (iso: string) => {
    const d = year1962.get(iso);
    if (!d) throw new Error(`no resolved day for ${iso}`);
    return d;
  };

  test('returns ref-walked blocks with original PropersBlockItem structure', () => {
    const primary = day('1962-04-22').primary; // Easter Sunday
    const { sections } = resolvePropersBlocks(primary);
    expect(sections.introit).toBeDefined();
    const items = sections.introit!;
    const textLa = items.filter((i) => i.type === 'text' && i.lang === 'la');
    expect(textLa.length).toBeGreaterThan(0);
    expect((textLa[0] as { value: string }).value).toMatch(/Resurréxi|Resurrexi/i);
    // No unresolved `ref` items survive the walk.
    expect(items.some((i) => i.type === 'ref')).toBe(false);
  });

  test('preserves scriptureRef items alongside the text they introduce', () => {
    // All Saints has scripture-cited sections — pick any section with both items.
    const primary = day('1962-11-01').primary;
    const { sections } = resolvePropersBlocks(primary);
    const sectionsWithScripture = Object.values(sections).filter((block) =>
      block!.some((i) => i.type === 'scriptureRef')
    );
    expect(sectionsWithScripture.length).toBeGreaterThan(0);
    // For at least one such section, a scriptureRef is followed by `text` items.
    const withFollowingText = sectionsWithScripture.find((block) => {
      const idx = block!.findIndex((i) => i.type === 'scriptureRef');
      return idx >= 0 && block!.slice(idx + 1).some((i) => i.type === 'text');
    });
    expect(withFollowingText).toBeDefined();
  });

  test('applies the ferial → Sunday fallback (advent_1_monday → advent_1_sunday)', () => {
    // 1962-12-03 is the Monday after Advent I Sunday.
    const primary = day('1962-12-03').primary;
    const { sections } = resolvePropersBlocks(primary);
    // Ferial weekday pulls the Sunday Mass Introit.
    expect(sections.introit).toBeDefined();
    expect(sections.introit!.some((i) => i.type === 'text' && i.lang === 'la')).toBe(true);
  });

  test('resolvePropers stays in sync with resolvePropersBlocks (Latin concat matches blocks)', () => {
    const primary = day('1962-04-22').primary;
    const { sections } = resolvePropersBlocks(primary);
    const { propers } = resolvePropers(primary, { locales: ['la'] });
    const blockIntroitLa = (sections.introit ?? [])
      .filter((i): i is { type: 'text'; lang: string; value: string } => i.type === 'text' && i.lang === 'la')
      .map((i) => i.value)
      .join('\n')
      .trim();
    expect(propers.introit!.la).toBe(blockIntroitLa);
  });

  test('broken properRef yields empty sections without throwing', () => {
    const primary = day('1962-04-22').primary;
    const bogus = { ...primary, properRef: { source: 'not-a-real-source', communeSlug: undefined } };
    const { sections, extraSections } = resolvePropersBlocks(bogus);
    expect(sections).toEqual({});
    expect(extraSections).toEqual({});
  });
});
