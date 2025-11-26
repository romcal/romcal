import { Brazil_PtBr } from '@dist/rite-roman1969/bundles/brazil';
import { Romcal } from '@src/rite-roman1969';

describe('Testing Brazilian calendar specific celebrations', () => {
  const romcal = new Romcal({ localizedCalendar: Brazil_PtBr });

  describe('Brazilian saints', () => {
    test('Santa Dulce Lopes Pontes should be celebrated on August 13', async () => {
      const calendar = await romcal.generateCalendar(2024);
      const august13 = calendar['2024-08-13'];

      const dulce = august13?.find((day) => day.id === 'dulce_lopes_pontes_virgin');

      expect(dulce).toBeDefined();
      expect(dulce?.name).toBe('Santa Dulce Lopes Pontes, virgem e religiosa');
      expect(dulce?.rank).toBe('MEMORIAL');
      expect(dulce?.precedence).toBe('PROPER_MEMORIAL_11b');
    });

    test('São Pedro de Alcântara should be celebrated on October 19', async () => {
      const calendar = await romcal.generateCalendar(2024);
      const october19 = calendar['2024-10-19'];

      const peter = october19?.find((day) => day.id === 'peter_of_alcantara_priest');

      expect(peter).toBeDefined();
      expect(peter?.name).toBe('São Pedro de Alcântara, presbítero');
      expect(peter?.rank).toBe('MEMORIAL');
      expect(peter?.precedence).toBe('PROPER_MEMORIAL_11b');
    });

    test('Nossa Senhora Aparecida should be celebrated on October 12 as a solemnity', async () => {
      const calendar = await romcal.generateCalendar(2024);
      const october12 = calendar['2024-10-12'];

      const aparecida = october12?.find((day) => day.id === 'our_lady_of_aparecida');

      expect(aparecida).toBeDefined();
      expect(aparecida?.name).toBe('Nossa Senhora Aparecida');
      expect(aparecida?.rank).toBe('SOLEMNITY');
      expect(aparecida?.precedence).toBe('PROPER_SOLEMNITY_PRINCIPAL_PATRON_4a');
    });
  });

  describe('Peter and Paul transfer to Sunday in Brazil', () => {
    test('When Peter and Paul falls between June 28 and July 4, it should be transferred to the first Sunday of July', async () => {
      // Test years where June 29 falls on different days of the week
      // 2024: June 29 is Saturday -> should be transferred to July 7 (first Sunday of July)
      // 2025: June 29 is Sunday -> no transfer needed
      // 2026: June 29 is Monday -> should be transferred to July 5 (first Sunday of July)

      // 2024: June 29 is Saturday
      const calendar2024 = await romcal.generateCalendar(2024);
      const june29_2024 = calendar2024['2024-06-29'];
      const july7_2024 = calendar2024['2024-07-07'];

      // On June 29, Peter and Paul should not be the main celebration (it's Saturday)
      const peterPaulOnJune29 = june29_2024?.find((day) => day.id === 'peter_and_paul_apostles');

      // On July 7 (first Sunday of July), Peter and Paul should be celebrated
      const peterPaulOnJuly7 = july7_2024?.find((day) => day.id === 'peter_and_paul_apostles');

      // The transfer should work - Peter and Paul should be on July 7
      expect(peterPaulOnJuly7).toBeDefined();
      expect(peterPaulOnJuly7?.name).toBe('São Pedro e São Paulo, Apóstolos');

      // 2026: June 29 is Monday
      const calendar2026 = await romcal.generateCalendar(2026);
      const june29_2026 = calendar2026['2026-06-29'];
      const july5_2026 = calendar2026['2026-07-05'];

      // On July 5 (first Sunday of July), Peter and Paul should be celebrated
      const peterPaulOnJuly5 = july5_2026?.find((day) => day.id === 'peter_and_paul_apostles');

      expect(peterPaulOnJuly5).toBeDefined();
      expect(peterPaulOnJuly5?.name).toBe('São Pedro e São Paulo, Apóstolos');
    });

    test('When Peter and Paul falls on Sunday (outside the transfer range), it should not be transferred', async () => {
      // 2025: June 29 is Sunday, so it should be celebrated on that day
      const calendar2025 = await romcal.generateCalendar(2025);
      const june29_2025 = calendar2025['2025-06-29'];

      const peterPaul = june29_2025?.find((day) => day.id === 'peter_and_paul_apostles');

      expect(peterPaul).toBeDefined();
      expect(peterPaul?.name).toBe('São Pedro e São Paulo, Apóstolos');
      expect(peterPaul?.date).toBe('2025-06-29');
    });
  });

  describe('Other Brazilian celebrations', () => {
    test('São José de Anchieta should be celebrated on June 9', async () => {
      const calendar = await romcal.generateCalendar(2024);
      const june9 = calendar['2024-06-09'];

      const anchieta = june9?.find((day) => day.id === 'joseph_de_anchieta_priest');

      expect(anchieta).toBeDefined();
      expect(anchieta?.name).toBe('São José de Anchieta, presbítero');
    });

    test('Santa Paulina should be celebrated on July 9', async () => {
      const calendar = await romcal.generateCalendar(2024);
      const july9 = calendar['2024-07-09'];

      const paulina = july9?.find((day) => day.id === 'paulina_of_the_agonizing_heart_of_jesus_visintainer_virgin');

      expect(paulina).toBeDefined();
      expect(paulina?.name).toBe('Santa Paulina do Coração Agonizante de Jesus Visintainer, virgem');
    });

    test("Santo Antônio de Sant'Anna Galvão should be celebrated on October 25", async () => {
      const calendar = await romcal.generateCalendar(2024);
      const october25 = calendar['2024-10-25'];

      const galvao = october25?.find((day) => day.id === 'anthony_of_saint_anne_galvao_priest');

      expect(galvao).toBeDefined();
      expect(galvao?.name).toBe("Santo Antônio de Sant'Anna Galvão, presbítero");
    });
  });
});
