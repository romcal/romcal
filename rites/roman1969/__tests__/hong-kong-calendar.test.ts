import { HongKong_En } from '@dist/rite-roman1969/bundles/hong-kong';
import { LiturgicalCalendar, Romcal } from '@src/rite-roman1969';

import { Precedences } from '../src/constants/precedences';
import { Ranks } from '../src/constants/ranks';

describe('Testing Hong Kong calendar specific celebrations', () => {
  const romcal = new Romcal({ localizedCalendar: HongKong_En });

  let calendar2024: LiturgicalCalendar;
  let calendar2025: LiturgicalCalendar;
  let calendar2026: LiturgicalCalendar;

  beforeAll(async () => {
    calendar2024 = await romcal.generateCalendar(2024);
    calendar2025 = await romcal.generateCalendar(2025);
    calendar2026 = await romcal.generateCalendar(2026);
  });

  describe('Hong Kong Saints and Blesseds', () => {
    test('St. Joseph Freinademetz should be celebrated on January 29', () => {
      const jan29 = calendar2024['2024-01-29'];
      const freinademetz = jan29?.find((day) => day.id === 'joseph_freinademetz_priest');

      expect(freinademetz).toBeDefined();
      expect(freinademetz?.name).toBe('Saint Joseph Freinademetz, Priest');
      expect(freinademetz?.rank).toBe(Ranks.Memorial);
      expect(freinademetz?.precedence).toBe(Precedences.ProperMemorial_11b);
    });

    test('Blessed Gabriele Maria Allegra should be celebrated on January 30', () => {
      const jan30 = calendar2024['2024-01-30'];
      const allegra = jan30?.find((day) => day.id === 'gabriele_maria_allegra_priest');

      expect(allegra).toBeDefined();
      expect(allegra?.name).toBe('Blessed Gabriele Maria Allegra, Priest');
      expect(allegra?.rank).toBe(Ranks.Memorial);
      expect(allegra?.precedence).toBe(Precedences.ProperMemorial_11b);
    });

    test('Sts. Aloysius Versiglia and Callistus Caravario should be celebrated on February 25', () => {
      // 2024 is Leap Year. Feb 25 2024 is Sunday.
      // Feb 25 2025 is Tuesday.

      const feb25_2025 = calendar2025['2025-02-25'];
      const martyrs = feb25_2025?.find(
        (day) => day.id === 'aloysius_versiglia_bishop_and_callistus_caravario_priest_martyrs'
      );

      expect(martyrs).toBeDefined();
      expect(martyrs?.name).toBe('Saints Aloysius Versiglia, Bishop and Callistus Caravario, Priest, Martyrs');
      expect(martyrs?.rank).toBe(Ranks.OptionalMemorial);
      expect(martyrs?.precedence).toBe(Precedences.OptionalMemorial_12);
    });

    test('Holy Martyrs and Blesseds of China should be celebrated on July 9', () => {
      const jul9 = calendar2024['2024-07-09'];
      const martyrs = jul9?.find((day) => day.id === 'holy_martyrs_and_blesseds_of_china');

      expect(martyrs).toBeDefined();
      expect(martyrs?.name).toBe('The Holy Martyrs and Blesseds of China');
      expect(martyrs?.rank).toBe(Ranks.Solemnity);
      expect(martyrs?.precedence).toBe(Precedences.ProperSolemnity_PrincipalPatron_4a);
    });
  });

  describe('Marian Feasts', () => {
    test('Our Lady of China should be celebrated on Saturday before the 2nd Sunday of May', () => {
      // 2024: May 1 is Wed. 1st Sun May 5. 2nd Sun May 12. Sat before is May 11.
      const may11 = calendar2024['2024-05-11'];
      const ladyChina = may11?.find((day) => day.id === 'our_lady_of_china');

      expect(ladyChina).toBeDefined();
      expect(ladyChina?.name).toBe('Our Lady of China');
      expect(ladyChina?.rank).toBe(Ranks.Memorial);
      expect(ladyChina?.precedence).toBe(Precedences.ProperMemorial_11b);
    });

    test('Our Lady, Help of Christians should be celebrated on May 24', () => {
      const may24 = calendar2024['2024-05-24'];
      const helpChristians = may24?.find((day) => day.id === 'our_lady_help_of_christians');

      expect(helpChristians).toBeDefined();
      expect(helpChristians?.name).toBe('Our Lady, Help of Christians');
      expect(helpChristians?.rank).toBe(Ranks.Memorial);
      expect(helpChristians?.precedence).toBe(Precedences.ProperMemorial_11b);
    });

    test('Our Lady, Help of Christians should be omitted or optional on May 24, 2026 (Pentecost Sunday)', () => {
      const may24 = calendar2026['2026-05-24'];
      const helpChristians = may24?.find((day) => day.id === 'our_lady_help_of_christians');

      // Pentecost is a Solemnity and a Sunday of Easter. Memorials are omitted.
      expect(helpChristians).toBeUndefined();
    });

    test('Immaculate Conception should be a Solemnity on December 8 (Principal Patron)', () => {
      // 2025: Dec 8 is Monday.
      const dec8 = calendar2025['2025-12-08'];
      const immac = dec8?.find((day) => day.id === 'immaculate_conception_of_the_blessed_virgin_mary');

      expect(immac).toBeDefined();
      expect(immac?.name).toBe('The Immaculate Conception of the Blessed Virgin Mary');
      expect(immac?.rank).toBe(Ranks.Solemnity);
      expect(immac?.precedence).toBe(Precedences.ProperSolemnity_PrincipalPatron_4a);
    });
  });

  describe('Sunday Transfers', () => {
    test('Ascension of the Lord should be celebrated on Sunday', () => {
      // 2024: Easter is March 31. Ascension (40th day) is Thu May 9.
      // In HK, it moves to the 7th Sunday of Easter (May 12).
      const may9 = calendar2024['2024-05-09'];
      const may12 = calendar2024['2024-05-12'];

      expect(may9?.find((day) => day.id === 'ascension_of_the_lord')).toBeUndefined();

      const ascension = may12?.find((day) => day.id === 'ascension_of_the_lord');
      expect(ascension).toBeDefined();
      expect(ascension?.name).toBe('The Ascension of the Lord');
      expect(ascension?.rank).toBe(Ranks.Solemnity);
      expect(ascension?.precedence).toBe(Precedences.ProperOfTimeSolemnity_2);
    });

    test('Corpus Christi should be celebrated on Sunday', () => {
      // 2024: Pentecost is May 19. Trinity Sunday is May 26.
      // Corpus Christi (Thu after Trinity) is May 30.
      // In HK, it moves to the following Sunday (June 2).
      const may30 = calendar2024['2024-05-30'];
      const june2 = calendar2024['2024-06-02'];

      expect(may30?.find((day) => day.id === 'most_holy_body_and_blood_of_christ')).toBeUndefined();

      const corpusChristi = june2?.find((day) => day.id === 'most_holy_body_and_blood_of_christ');
      expect(corpusChristi).toBeDefined();
      expect(corpusChristi?.name).toBe('The Most Holy Body and Blood of Christ');
      expect(corpusChristi?.rank).toBe(Ranks.Solemnity);
      expect(corpusChristi?.precedence).toBe(Precedences.GeneralSolemnity_3);
    });
  });

  describe('Other Proper Celebrations', () => {
    test('Mary, Mother of God should not be a Holy Day of Obligation', () => {
      const jan1 = calendar2024['2024-01-01'];
      const maryMotherOfGod = jan1?.find((day) => day.id === 'mary_mother_of_god');

      expect(maryMotherOfGod).toBeDefined();
      expect(maryMotherOfGod?.isHolyDayOfObligation).toBe(false);
    });

    test('St. Therese of the Child Jesus should be a Feast on October 1', () => {
      const oct1 = calendar2024['2024-10-01'];
      const therese = oct1?.find((day) => day.id === 'therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin');

      expect(therese).toBeDefined();
      expect(therese?.name).toBe('Saint Thérèse of the Child Jesus, Virgin and Doctor of the Church');
      expect(therese?.rank).toBe(Ranks.Feast);
      expect(therese?.precedence).toBe(Precedences.ProperFeast_8f);
    });

    test('St. Francis Xavier should be a Feast on December 3', () => {
      const dec3 = calendar2024['2024-12-03'];
      const xavier = dec3?.find((day) => day.id === 'francis_xavier_priest');

      expect(xavier).toBeDefined();
      expect(xavier?.name).toBe('Saint Francis Xavier, Priest');
      expect(xavier?.rank).toBe(Ranks.Feast);
      expect(xavier?.precedence).toBe(Precedences.ProperFeast_8f);
    });

    test('Dedication of the Cathedral should be celebrated on December 9', () => {
      const dec9 = calendar2024['2024-12-09'];
      const dedication = dec9?.find(
        (day) => day.id === 'dedication_of_the_cathedral_of_the_immaculate_conception_hong_kong'
      );

      expect(dedication).toBeDefined();
      expect(dedication?.name).toBe('The Dedication of the Cathedral of the Immaculate Conception, Hong Kong');
      expect(dedication?.rank).toBe(Ranks.Feast);
      expect(dedication?.precedence).toBe(Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b);
    });
  });

  describe('Lunar New Year Celebrations', () => {
    test('Thanksgiving Mass on Lunar New Year Eve should be one day before Lunar New Year', () => {
      // 2025: LNY is Jan 29, so LNY Eve is Jan 28
      const jan28_2025 = calendar2025['2025-01-28'];
      const lnyEve2025 = jan28_2025?.find((day) => day.id === 'thanksgiving_mass_on_lunar_new_year_eve');
      expect(lnyEve2025).toBeDefined();
      expect(lnyEve2025?.rank).toBe(Ranks.OptionalMemorial);
      expect(lnyEve2025?.precedence).toBe(Precedences.OptionalMemorial_12);
      expect(lnyEve2025?.isOptional).toBe(true);
    });

    test('Eucharistic Celebration on Lunar New Year Day should be on Lunar New Year', () => {
      // 2024: LNY is Feb 10
      const feb10_2024 = calendar2024['2024-02-10'];
      const lnyDay2024 = feb10_2024?.find((day) => day.id === 'eucharistic_celebration_on_lunar_new_year_day');
      expect(lnyDay2024).toBeDefined();
      expect(lnyDay2024?.rank).toBe(Ranks.OptionalMemorial);
      expect(lnyDay2024?.precedence).toBe(Precedences.OptionalMemorial_12);
      expect(lnyDay2024?.isOptional).toBe(true);
    });

    test('Sunday after Lunar New Year should be on Sunday on or after LNY', () => {
      // 2024: LNY is Feb 10, Sunday after is Feb 11
      const feb11_2024 = calendar2024['2024-02-11'];
      const sundayAfterLny2024 = feb11_2024?.find((day) => day.id === 'sunday_after_lunar_new_years_day');
      expect(sundayAfterLny2024).toBeDefined();
      expect(sundayAfterLny2024?.rank).toBe(Ranks.OptionalMemorial);
      expect(sundayAfterLny2024?.precedence).toBe(Precedences.OptionalMemorial_12);
      expect(sundayAfterLny2024?.isOptional).toBe(true);
    });
  });
});
