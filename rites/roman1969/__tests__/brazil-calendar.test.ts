import { Brazil_PtBr } from '@dist/rite-roman1969/bundles/brazil';
import { Romcal } from '@src/rite-roman1969';

import { Precedences } from '../src/constants/precedences';
import { Ranks } from '../src/constants/ranks';

describe('Testing Brazilian calendar specific celebrations', () => {
  const romcal = new Romcal({ localizedCalendar: Brazil_PtBr });

  let calendar2023: Awaited<ReturnType<typeof romcal.generateCalendar>>;
  let calendar2024: Awaited<ReturnType<typeof romcal.generateCalendar>>;
  let calendar2025: Awaited<ReturnType<typeof romcal.generateCalendar>>;
  let calendar2026: Awaited<ReturnType<typeof romcal.generateCalendar>>;

  beforeAll(async () => {
    calendar2023 = await romcal.generateCalendar(2023);
    calendar2024 = await romcal.generateCalendar(2024);
    calendar2025 = await romcal.generateCalendar(2025);
    calendar2026 = await romcal.generateCalendar(2026);
  });

  describe('Brazilian saints', () => {
    test('St. Dulce Lopes Pontes should be celebrated on August 13', () => {
      const august13 = calendar2024['2024-08-13'];

      const dulce = august13?.find((day) => day.id === 'dulce_lopes_pontes_virgin');

      expect(dulce).toBeDefined();
      expect(dulce?.name).toBe('Santa Dulce Lopes Pontes, virgem');
      expect(dulce?.rank).toBe(Ranks.Memorial);
      expect(dulce?.precedence).toBe(Precedences.ProperMemorial_11b);
    });

    test('St. Peter of Alcântara should be celebrated on October 19', () => {
      const october19 = calendar2024['2024-10-19'];

      const peter = october19?.find((day) => day.id === 'peter_of_alcantara_priest');

      expect(peter).toBeDefined();
      expect(peter?.name).toBe('São Pedro de Alcântara, presbítero');
      expect(peter?.rank).toBe(Ranks.Memorial);
      expect(peter?.precedence).toBe(Precedences.ProperMemorial_11b);
    });

    test('St. Benedict the Moo should be celebrated on October 5', () => {
      const october5 = calendar2024['2024-10-05'];

      const benedict = october5?.find((day) => day.id === 'benedict_the_moor_religious');

      expect(benedict).toBeDefined();
      expect(benedict?.name).toBe('São Benedito, o Negro, religioso');
      expect(benedict?.rank).toBe(Ranks.Memorial);
      expect(benedict?.precedence).toBe(Precedences.ProperMemorial_11b);
    });

    test('Our Lady of Aparecida should be celebrated on October 12 as a solemnity', () => {
      const october12 = calendar2024['2024-10-12'];

      const aparecida = october12?.find((day) => day.id === 'our_lady_of_aparecida');

      expect(aparecida).toBeDefined();
      expect(aparecida?.name).toBe('Nossa Senhora Aparecida');
      expect(aparecida?.rank).toBe(Ranks.Solemnity);
      expect(aparecida?.precedence).toBe(Precedences.ProperSolemnity_PrincipalPatron_4a);
    });
  });

  describe('Sts. Peter and Paul transfer to Sunday in Brazil', () => {
    test('When falling between June 28 and July 4, it should be transferred to the first Sunday of July', () => {
      // Test years where June 29 falls on different days of the week
      // 2024: June 29 is Saturday -> should be transferred to July 7 (first Sunday of July)
      // 2025: June 29 is Sunday -> no transfer needed
      // 2026: June 29 is Monday -> should be transferred to July 5 (first Sunday of July)

      // 2024: June 29 is Saturday
      const july7_2024 = calendar2024['2024-07-07'];

      // On July 7 (first Sunday of July), Peter and Paul should be celebrated
      const peterPaulOnJuly7 = july7_2024?.find((day) => day.id === 'peter_and_paul_apostles');

      // The transfer should work - Peter and Paul should be on July 7
      expect(peterPaulOnJuly7).toBeDefined();
      expect(peterPaulOnJuly7?.name).toBe('São Pedro e São Paulo, Apóstolos');
      expect(peterPaulOnJuly7?.rank).toBe(Ranks.Solemnity);
      expect(peterPaulOnJuly7?.precedence).toBe(Precedences.GeneralSolemnity_3);

      // 2026: June 29 is Monday
      const july5_2026 = calendar2026['2026-07-05'];

      // On July 5 (first Sunday of July), Peter and Paul should be celebrated
      const peterPaulOnJuly5 = july5_2026?.find((day) => day.id === 'peter_and_paul_apostles');

      expect(peterPaulOnJuly5).toBeDefined();
      expect(peterPaulOnJuly5?.name).toBe('São Pedro e São Paulo, Apóstolos');
      expect(peterPaulOnJuly5?.rank).toBe(Ranks.Solemnity);
      expect(peterPaulOnJuly5?.precedence).toBe(Precedences.GeneralSolemnity_3);
    });

    test('When falling on Sunday (outside the transfer range), it should not be transferred', () => {
      // 2025: June 29 is Sunday, so it should be celebrated on that day
      const june29_2025 = calendar2025['2025-06-29'];

      const peterPaul = june29_2025?.find((day) => day.id === 'peter_and_paul_apostles');

      expect(peterPaul).toBeDefined();
      expect(peterPaul?.name).toBe('São Pedro e São Paulo, Apóstolos');
      expect(peterPaul?.date).toBe('2025-06-29');
      expect(peterPaul?.rank).toBe(Ranks.Solemnity);
      expect(peterPaul?.precedence).toBe(Precedences.GeneralSolemnity_3);
    });
  });

  describe('Other Brazilian celebrations', () => {
    test('St. Joseph of Anchieta should be celebrated on June 9', () => {
      const june9 = calendar2023['2023-06-09'];

      const anchieta = june9?.find((day) => day.id === 'joseph_de_anchieta_priest');

      expect(anchieta).toBeDefined();
      expect(anchieta?.name).toBe('São José de Anchieta, presbítero');
      expect(anchieta?.rank).toBe(Ranks.Memorial);
      expect(anchieta?.precedence).toBe(Precedences.ProperMemorial_11b);
    });

    test('St. Paulina should be celebrated on July 9', () => {
      const july9 = calendar2024['2024-07-09'];

      const paulina = july9?.find((day) => day.id === 'paulina_of_the_agonizing_heart_of_jesus_visintainer_virgin');

      expect(paulina).toBeDefined();
      expect(paulina?.name).toBe('Santa Paulina do Coração Agonizante de Jesus Visintainer, virgem');
      expect(paulina?.rank).toBe(Ranks.Memorial);
      expect(paulina?.precedence).toBe(Precedences.ProperMemorial_11b);
    });

    test('St. Anthony of St. Anne Galvao should be celebrated on October 25', () => {
      const october25 = calendar2024['2024-10-25'];

      const galvao = october25?.find((day) => day.id === 'anthony_of_saint_anne_galvao_priest');

      expect(galvao).toBeDefined();
      expect(galvao?.name).toBe("Santo Antônio de Sant'Anna Galvão, presbítero");
      expect(galvao?.rank).toBe(Ranks.Memorial);
      expect(galvao?.precedence).toBe(Precedences.ProperMemorial_11b);
    });
  });
});
