import { Brazil_PtBr } from '@dist/rite-roman1969/bundles/brazil';
import { Precedences, Ranks } from '@internal/generator';
import { Romcal } from '@src/rite-roman1969';

describe('Testing Brazilian calendar specific celebrations', () => {
  const romcal = new Romcal({ localizedCalendar: Brazil_PtBr });

  let calendar2023: Awaited<ReturnType<typeof romcal.generateCalendar>>;
  let calendar2024: Awaited<ReturnType<typeof romcal.generateCalendar>>;
  let calendar2025: Awaited<ReturnType<typeof romcal.generateCalendar>>;
  let calendar2026: Awaited<ReturnType<typeof romcal.generateCalendar>>;
  let calendar2027: Awaited<ReturnType<typeof romcal.generateCalendar>>;

  beforeAll(async () => {
    calendar2023 = await romcal.generateCalendar(2023);
    calendar2024 = await romcal.generateCalendar(2024);
    calendar2025 = await romcal.generateCalendar(2025);
    calendar2026 = await romcal.generateCalendar(2026);
    calendar2027 = await romcal.generateCalendar(2027);
  });

  describe('Brazilian celebrations', () => {
    // June 8 - St. Ephrem (transferred from June 9)
    test('St. Ephrem the Syrian should be celebrated on June 8', () => {
      // Using 2026 because June 8, 2023 is Corpus Christi and June 8, 2024 is Immaculate Heart
      const june8 = calendar2026['2026-06-08'];

      const ephrem = june8?.find((day) => day.id === 'ephrem_the_syrian_deacon');

      expect(ephrem).toBeDefined();
      expect(ephrem?.name).toBe('Santo Efrém, diácono e doutor da Igreja');
      expect(ephrem?.rank).toBe(Ranks.OptionalMemorial);
      expect(ephrem?.precedence).toBe(Precedences.OptionalMemorial_12);
    });

    // June 9 - St. Joseph de Anchieta
    test('St. Joseph de Anchieta should be celebrated on June 9', () => {
      // Using 2023 because June 9, 2024 is a Sunday
      const june9 = calendar2023['2023-06-09'];

      const anchieta = june9?.find((day) => day.id === 'joseph_de_anchieta_priest');

      expect(anchieta).toBeDefined();
      expect(anchieta?.name).toBe('São José de Anchieta, presbítero');
      expect(anchieta?.rank).toBe(Ranks.Memorial);
      expect(anchieta?.precedence).toBe(Precedences.ProperMemorial_11b);
    });

    // July 8 - St. Augustine Zhao Rong (transferred from July 9)
    test('St. Augustine Zhao Rong and companions should be celebrated on July 8', () => {
      const july8 = calendar2024['2024-07-08'];

      const augustine = july8?.find((day) => day.id === 'augustine_zhao_rong_priest_and_companions_martyrs');

      expect(augustine).toBeDefined();
      expect(augustine?.name).toBe('Santos Agostinho Zhao Rong, presbítero, e Companheiros, mártires');
      expect(augustine?.rank).toBe(Ranks.OptionalMemorial);
      expect(augustine?.precedence).toBe(Precedences.OptionalMemorial_12);
    });

    // July 9 - St. Paulina
    test('St. Paulina should be celebrated on July 9', () => {
      const july9 = calendar2024['2024-07-09'];

      const paulina = july9?.find((day) => day.id === 'paulina_of_the_agonizing_heart_of_jesus_visintainer_virgin');

      expect(paulina).toBeDefined();
      expect(paulina?.name).toBe('Santa Paulina do Coração Agonizante de Jesus, virgem');
      expect(paulina?.rank).toBe(Ranks.Memorial);
      expect(paulina?.precedence).toBe(Precedences.ProperMemorial_11b);
    });

    // July 16 - Our Lady of Mount Carmel
    test('Our Lady of Mount Carmel should be celebrated on July 16 as a feast', () => {
      const july16 = calendar2024['2024-07-16'];

      const carmel = july16?.find((day) => day.id === 'our_lady_of_mount_carmel');

      expect(carmel).toBeDefined();
      expect(carmel?.name).toBe('Nossa Senhora do Monte Carmelo');
      expect(carmel?.rank).toBe(Ranks.Feast);
      expect(carmel?.precedence).toBe(Precedences.ProperFeast_8f);
    });

    // July 17 - Bl. Ignatius de Azevedo and companions
    test('Bl. Ignatius de Azevedo and companions should be celebrated on July 17', () => {
      const july17 = calendar2024['2024-07-17'];

      const ignatius = july17?.find((day) => day.id === 'ignatius_de_azevedo_priest_and_companions_martyrs');

      expect(ignatius).toBeDefined();
      expect(ignatius?.name).toBe('Bem-aventurado Inácio de Azevedo, presbítero, e companheiros, mártires');
      expect(ignatius?.rank).toBe(Ranks.Memorial);
      expect(ignatius?.precedence).toBe(Precedences.ProperMemorial_11b);
    });

    // August 12 - Sts. Pontian and Hippolytus (transferred from August 13)
    test('Sts. Pontian and Hippolytus should be celebrated on August 12', () => {
      const aug12 = calendar2024['2024-08-12'];

      const pontian = aug12?.find((day) => day.id === 'pontian_i_pope_and_hippolytus_of_rome_priest');

      expect(pontian).toBeDefined();
      expect(pontian?.name).toBe('Santos Ponciano, papa, e Hipólito, presbítero, mártires');
      expect(pontian?.rank).toBe(Ranks.OptionalMemorial);
      expect(pontian?.precedence).toBe(Precedences.OptionalMemorial_12);
    });

    // August 13 - St. Dulce Lopes Pontes
    test('St. Dulce Lopes Pontes should be celebrated on August 13', () => {
      const aug13 = calendar2024['2024-08-13'];

      const dulce = aug13?.find((day) => day.id === 'dulce_lopes_pontes_virgin');

      expect(dulce).toBeDefined();
      expect(dulce?.name).toBe('Santa Dulce Lopes Pontes, virgem');
      expect(dulce?.rank).toBe(Ranks.Memorial);
      expect(dulce?.precedence).toBe(Precedences.ProperMemorial_11b);
    });

    // August 23 - St. Rose of Lima
    test('St. Rose of Lima should be celebrated on August 23 as a feast', () => {
      const aug23 = calendar2024['2024-08-23'];

      const rose = aug23?.find((day) => day.id === 'rose_of_lima_virgin');

      expect(rose).toBeDefined();
      expect(rose?.name).toBe('Santa Rosa de Lima, virgem');
      expect(rose?.rank).toBe(Ranks.Feast);
      expect(rose?.precedence).toBe(Precedences.ProperFeast_8f);
    });

    // October 3 - Sts. Andrew de Soveral and Ambrose Francis Ferro
    test('Sts. Andrew de Soveral and Ambrose Francis Ferro should be celebrated on October 3', () => {
      const oct3 = calendar2024['2024-10-03'];

      const andrew = oct3?.find((day) => day.id === 'andrew_de_soveral_and_ambrose_francis_ferro_priests');

      expect(andrew).toBeDefined();
      expect(andrew?.name).toBe('Santos André de Soveral e Ambrósio Francisco Ferro, presbíteros e mártires');
      expect(andrew?.rank).toBe(Ranks.Memorial);
      expect(andrew?.precedence).toBe(Precedences.ProperMemorial_11b);
    });

    // October 5 - St. Benedict the Moor
    test('St. Benedict the Moor should be celebrated on October 5', () => {
      const oct5 = calendar2024['2024-10-05'];

      const benedict = oct5?.find((day) => day.id === 'benedict_the_moor_religious');

      expect(benedict).toBeDefined();
      expect(benedict?.name).toBe('São Benedito, o Negro, religioso');
      expect(benedict?.rank).toBe(Ranks.Memorial);
      expect(benedict?.precedence).toBe(Precedences.ProperMemorial_11b);
    });

    // October 6 - St. Faustina Kowalska (transferred from October 5)
    test('St. Faustina Kowalska should be celebrated on October 6', () => {
      // Using 2023 because October 6, 2024 is a Sunday
      const oct6 = calendar2023['2023-10-06'];

      const faustina = oct6?.find((day) => day.id === 'faustina_kowalska_virgin');

      expect(faustina).toBeDefined();
      expect(faustina?.name).toBe('Santa Faustina Kowalska, virgem');
      expect(faustina?.rank).toBe(Ranks.OptionalMemorial);
      expect(faustina?.precedence).toBe(Precedences.OptionalMemorial_12);
    });

    // October 12 - Our Lady of Aparecida
    test('Our Lady of Aparecida should be celebrated on October 12 as a solemnity', () => {
      const oct12 = calendar2024['2024-10-12'];

      const aparecida = oct12?.find((day) => day.id === 'our_lady_of_aparecida');

      expect(aparecida).toBeDefined();
      expect(aparecida?.name).toBe('Nossa Senhora da Conceição Aparecida, Padroeira do Brasil');
      expect(aparecida?.rank).toBe(Ranks.Solemnity);
      expect(aparecida?.precedence).toBe(Precedences.ProperSolemnity_PrincipalPatron_4a);
    });

    // October 19 - St. Peter of Alcántara
    test('St. Peter of Alcántara should be celebrated on October 19', () => {
      const oct19 = calendar2024['2024-10-19'];

      const peter = oct19?.find((day) => day.id === 'peter_of_alcantara_priest');

      expect(peter).toBeDefined();
      expect(peter?.name).toBe('São Pedro de Alcântara, presbítero');
      expect(peter?.rank).toBe(Ranks.OptionalMemorial);
      expect(peter?.precedence).toBe(Precedences.OptionalMemorial_12);
    });

    // October 25 - St. Anthony of St. Anne Galvão
    test('St. Anthony of St. Anne Galvão should be celebrated on October 25', () => {
      const oct25 = calendar2024['2024-10-25'];

      const galvao = oct25?.find((day) => day.id === 'anthony_of_saint_anne_galvao_priest');

      expect(galvao).toBeDefined();
      expect(galvao?.name).toBe('Santo Antônio de Sant’Ana Galvão, presbítero');
      expect(galvao?.rank).toBe(Ranks.Memorial);
      expect(galvao?.precedence).toBe(Precedences.ProperMemorial_11b);
    });

    // November 19 - Sts. Roque González, Afonso Rodríguez and João de Castillo
    test('Sts. Roque González, Afonso Rodríguez and João de Castillo should be celebrated on November 19', () => {
      const nov19 = calendar2024['2024-11-19'];

      const roque = nov19?.find((day) => day.id === 'roch_gonzalez_alphonsus_rodriguez_and_john_del_castillo_priests');

      expect(roque).toBeDefined();
      expect(roque?.name).toBe('Santos Roque González, Afonso Rodríguez e João de Castillo, presbíteros e mártires');
      expect(roque?.rank).toBe(Ranks.Memorial);
      expect(roque?.precedence).toBe(Precedences.ProperMemorial_11b);
    });
  });

  describe('Sts. Peter and Paul transfer to Sunday in Brazil', () => {
    test('When falling between June 28 and July 4, it should be transferred to the first Sunday of July', () => {
      // 2024: June 29 is Saturday -> should be transferred to July 7 (first Sunday of July)
      const july7_2024 = calendar2024['2024-07-07'];

      const peterPaulOnJuly7 = july7_2024?.find((day) => day.id === 'peter_and_paul_apostles');

      expect(peterPaulOnJuly7).toBeDefined();
      expect(peterPaulOnJuly7?.name).toBe('São Pedro e São Paulo, Apóstolos');
      expect(peterPaulOnJuly7?.rank).toBe(Ranks.Solemnity);
      expect(peterPaulOnJuly7?.precedence).toBe(Precedences.GeneralSolemnity_3);

      // 2026: June 29 is Monday -> should be transferred to July 5 (first Sunday of July)
      const july5_2026 = calendar2026['2026-07-05'];

      const peterPaulOnJuly5 = july5_2026?.find((day) => day.id === 'peter_and_paul_apostles');

      expect(peterPaulOnJuly5).toBeDefined();
      expect(peterPaulOnJuly5?.name).toBe('São Pedro e São Paulo, Apóstolos');
      expect(peterPaulOnJuly5?.rank).toBe(Ranks.Solemnity);
      expect(peterPaulOnJuly5?.precedence).toBe(Precedences.GeneralSolemnity_3);
    });

    test('When June 29 is already a Sunday, it should not be transferred', () => {
      // 2025: June 29 is Sunday
      const june29_2025 = calendar2025['2025-06-29'];

      const peterPaul = june29_2025?.find((day) => day.id === 'peter_and_paul_apostles');

      expect(peterPaul).toBeDefined();
      expect(peterPaul?.name).toBe('São Pedro e São Paulo, Apóstolos');
      expect(peterPaul?.date).toBe('2025-06-29');
      expect(peterPaul?.rank).toBe(Ranks.Solemnity);
      expect(peterPaul?.precedence).toBe(Precedences.GeneralSolemnity_3);
    });
  });

  describe('Assumption of Our Lady transfer to Sunday in Brazil', () => {
    test('When August 15 is not a Sunday, it should be transferred to the 3rd Sunday of August', () => {
      // 2024: Aug 15 is Thursday -> should be transferred to Aug 18 (3rd Sunday of August)
      const aug18_2024 = calendar2024['2024-08-18'];

      const assumption = aug18_2024?.find((day) => day.id === 'assumption_of_the_blessed_virgin_mary');

      expect(assumption).toBeDefined();
      expect(assumption?.name).toBe('Assunção da Bem-aventurada Virgem Maria');
      expect(assumption?.rank).toBe(Ranks.Solemnity);
    });

    test('When August 15 is already a Sunday, it should not be transferred', () => {
      // 2027: Aug 15 is Sunday
      const aug15_2027 = calendar2027['2027-08-15'];

      const assumption = aug15_2027?.find((day) => day.id === 'assumption_of_the_blessed_virgin_mary');

      expect(assumption).toBeDefined();
      expect(assumption?.name).toBe('Assunção da Bem-aventurada Virgem Maria');
      expect(assumption?.date).toBe('2027-08-15');
      expect(assumption?.rank).toBe(Ranks.Solemnity);
    });
  });

  describe('All Saints transfer to Sunday in Brazil', () => {
    test('When November 1 is not a Sunday, it should be transferred to the 1st Sunday of November', () => {
      // 2024: Nov 1 is Friday -> should be transferred to Nov 3 (1st Sunday of November)
      const nov3_2024 = calendar2024['2024-11-03'];

      const allSaints = nov3_2024?.find((day) => day.id === 'all_saints');

      expect(allSaints).toBeDefined();
      expect(allSaints?.name).toBe('Todos os Santos');
      expect(allSaints?.rank).toBe(Ranks.Solemnity);
    });

    test('When November 1 is already a Sunday, it should not be transferred', () => {
      // 2026: Nov 1 is Sunday
      const nov1_2026 = calendar2026['2026-11-01'];

      const allSaints = nov1_2026?.find((day) => day.id === 'all_saints');

      expect(allSaints).toBeDefined();
      expect(allSaints?.name).toBe('Todos os Santos');
      expect(allSaints?.date).toBe('2026-11-01');
      expect(allSaints?.rank).toBe(Ranks.Solemnity);
    });
  });
});
