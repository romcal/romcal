import { Precedences } from '../constants/precedences';
import type { LiturgicalDay } from '../models/liturgical-day';

import { compareByPrecedence } from './precedences';

const precedences = [
  Precedences.GeneralSolemnity_3,
  Precedences.GeneralMemorial_10,
  Precedences.ProperMemorial_11b,
  Precedences.Weekday_13,
];
const compare = compareByPrecedence(precedences, { precedenceFirst: true });
const legacy = compareByPrecedence(precedences, { precedenceFirst: false });

const ranks: Record<string, string> = {
  [Precedences.GeneralMemorial_10]: 'MEMORIAL',
  [Precedences.GeneralSolemnity_3]: 'SOLEMNITY',
  [Precedences.ProperMemorial_11b]: 'MEMORIAL',
  [Precedences.Weekday_13]: 'WEEKDAY',
};

const day = (precedence: string, isOptional = false, allowSimilarRankItems = false): LiturgicalDay =>
  ({ allowSimilarRankItems, isOptional, precedence, rank: ranks[precedence] }) as unknown as LiturgicalDay;

describe('compareByPrecedence', () => {
  test('sorts the optional liturgical days after the other ones', () => {
    const optional = day(Precedences.GeneralSolemnity_3, true);
    const other = day(Precedences.Weekday_13);
    expect(compare(optional, other)).toBe(1);
    expect(compare(other, optional)).toBe(-1);
  });

  test('sorts the liturgical day that has the highest precedence first', () => {
    const solemnity = day(Precedences.GeneralSolemnity_3);
    const memorial = day(Precedences.GeneralMemorial_10);
    expect(compare(solemnity, memorial)).toBe(-1);
    expect(compare(memorial, solemnity)).toBe(1);
  });

  test('a day allowing similar rank items never takes precedence over a day of a higher precedence', () => {
    const solemnity = day(Precedences.GeneralSolemnity_3);
    const memorial = day(Precedences.GeneralMemorial_10, false, true);
    expect(compare(solemnity, memorial)).toBe(-1);
    expect(compare(memorial, solemnity)).toBe(1);
  });

  test('sorts a day allowing similar rank items first among days of the same precedence', () => {
    const allowSimilar = day(Precedences.GeneralMemorial_10, false, true);
    const memorial = day(Precedences.GeneralMemorial_10);
    expect(compare(allowSimilar, memorial)).toBe(-1);
    expect(compare(memorial, allowSimilar)).toBe(1);
  });

  test('sorts a day allowing similar rank items first among days of the same rank', () => {
    const proper = day(Precedences.ProperMemorial_11b, false, true);
    const general = day(Precedences.GeneralMemorial_10);
    expect(compare(proper, general)).toBe(-1);
    expect(compare(general, proper)).toBe(1);
  });

  test('compares the precedences of days of the same rank that both allow similar rank items', () => {
    const proper = day(Precedences.ProperMemorial_11b, false, true);
    const general = day(Precedences.GeneralMemorial_10, false, true);
    expect(compare(general, proper)).toBe(-1);
    expect(compare(proper, general)).toBe(1);
  });

  test('keeps the order of days of the same precedence', () => {
    expect(compare(day(Precedences.GeneralMemorial_10), day(Precedences.GeneralMemorial_10))).toBe(0);
  });
});

describe('compareByPrecedence without precedenceFirst (the order of the other rites)', () => {
  test('sorts a day allowing similar rank items before a day of a higher precedence', () => {
    const solemnity = day(Precedences.GeneralSolemnity_3);
    const memorial = day(Precedences.GeneralMemorial_10, false, true);
    expect(legacy(memorial, solemnity)).toBe(-1);
    expect(legacy(solemnity, memorial)).toBe(1);
  });

  test('compares the precedences of days that do not differ by similar rank items', () => {
    expect(legacy(day(Precedences.GeneralSolemnity_3), day(Precedences.GeneralMemorial_10))).toBe(-1);
    expect(legacy(day(Precedences.GeneralMemorial_10), day(Precedences.GeneralSolemnity_3))).toBe(1);
    expect(legacy(day(Precedences.GeneralMemorial_10), day(Precedences.GeneralMemorial_10))).toBe(0);
  });

  test('sorts the optional days to the end', () => {
    expect(legacy(day(Precedences.GeneralSolemnity_3, true), day(Precedences.Weekday_13))).toBe(1);
  });
});
