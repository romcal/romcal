import { Morocco_Tangier_Fr } from '@dist/rite-roman1969/bundles/morocco.tangier';
import { NorthAfrica_Fr } from '@dist/rite-roman1969/bundles/north-africa';
import { LiturgicalDay, Romcal } from '@src/rite-roman1969';

describe('Testing North Africa calendar specific date overrides', () => {
  let northAfrica2025: LiturgicalDay[];
  let tangier2024: LiturgicalDay[];

  beforeAll(async () => {
    northAfrica2025 = Object.values(
      await new Romcal({ localizedCalendar: NorthAfrica_Fr }).generateCalendar(2025)
    ).flat();
    tangier2024 = Object.values(
      await new Romcal({ localizedCalendar: Morocco_Tangier_Fr }).generateCalendar(2024)
    ).flat();
  });

  test('Saint Pius V and Saint Joseph the Worker are both available on May 1', () => {
    const may1Ids = northAfrica2025.filter((day) => day.date === '2025-05-01').map((day) => day.id);

    expect(may1Ids).toContain('pius_v_pope');
    expect(may1Ids).toContain('joseph_the_worker');
  });

  test('Saint Marcellinus and the Most Holy Name of Mary are both available on September 12', () => {
    const september12Ids = northAfrica2025.filter((day) => day.date === '2025-09-12').map((day) => day.id);

    expect(september12Ids).toContain('marcellinus_of_carthage_martyr');
    expect(september12Ids).toContain('most_holy_name_of_mary');
  });

  test('Saint Cyprian and Saint Cornelius replace their combined general celebration', () => {
    const cyprian = northAfrica2025.filter((day) => day.id === 'cyprian_of_carthage_bishop');
    const cornelius = northAfrica2025.filter((day) => day.id === 'cornelius_i_pope');
    const combinedCelebration = northAfrica2025.filter(
      (day) => day.id === 'cornelius_i_pope_and_cyprian_of_carthage_bishop_martyrs'
    );

    expect(cyprian).toHaveLength(1);
    expect(cyprian[0].date).toBe('2025-09-16');
    expect(cornelius).toHaveLength(1);
    expect(cornelius[0].date).toBe('2025-09-18');
    expect(combinedCelebration).toHaveLength(0);
  });

  test('Tangier celebrates Our Lady of Africa on August 4 instead of April 30', () => {
    const ourLadyOfAfrica = tangier2024.filter((day) => day.id === 'our_lady_of_africa');

    expect(ourLadyOfAfrica).toHaveLength(1);
    expect(ourLadyOfAfrica[0].date).toBe('2024-08-04');
  });

  test('Tangier transfers Saint John Mary Vianney to August 3', () => {
    const johnMaryVianney = tangier2024.filter((day) => day.id === 'john_mary_vianney_priest');

    expect(johnMaryVianney).toHaveLength(1);
    expect(johnMaryVianney[0].date).toBe('2024-08-03');
  });
});
