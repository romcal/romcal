export enum Common {
  // No common
  None = 'None',

  // Dedication of a Church
  DedicationAnniversary_Inside = 'DedicationAnniversary_Inside',
  DedicationAnniversary_Outside = 'DedicationAnniversary_Outside',

  // Blessed Virgin Mary
  BlessedVirginMary_OrdinaryTime = 'BlessedVirginMary_OrdinaryTime',
  BlessedVirginMary_Advent = 'BlessedVirginMary_Advent',
  BlessedVirginMary_Christmas = 'BlessedVirginMary_Christmas',
  BlessedVirginMary_Easter = 'BlessedVirginMary_Easter',

  // Martyrs
  Martyrs_OutsideEaster_Several = 'Martyrs_OutsideEaster_Several',
  Martyrs_OutsideEaster_One = 'Martyrs_OutsideEaster_One',
  Martyrs_Easter_Several = 'Martyrs_Easter_Several',
  Martyrs_Easter_One = 'Martyrs_Easter_One',
  Martyrs_Missionary_Several = 'Martyrs_Missionary_Several',
  Martyrs_Missionary_One = 'Martyrs_Missionary_One',
  Martyrs_Virgin = 'Martyrs_Virgin',
  Martyrs_Woman = 'Martyrs_Woman',

  // Pastors
  Pastors_PopeOrBishop = 'Pastors_PopeOrBishop',
  Pastors_Bishop = 'Pastors_Bishop',
  Pastors_Several = 'Pastors_Several',
  Pastors_One = 'Pastors_One',
  Pastors_Founder_One = 'Pastors_Founder_One',
  Pastors_Founder_Several = 'Pastors_Founder_Several',
  Pastors_Missionary = 'Pastors_Missionary',

  // Doctors of the Church
  DoctorsOfTheChurch = 'DoctorsOfTheChurch',

  // Virgins
  Virgins_Several = 'Virgins_Several',
  Virgins_One = 'Virgins_One',

  // Holy Men and Women
  Saints_All_Several = 'Saints_All_Several',
  Saints_All_One = 'Saints_All_One',
  Saints_Abbot = 'Saints_Abbot',
  Saint_Monk = 'Saint_Monk',
  Saints_Nun = 'Saints_Nun',
  Saints_Religious = 'Saints_Religious',
  Saints_MercyWorks = 'Saints_MercyWorks',
  Saints_Educators = 'Saints_Educators',
  Saints_HolyWomen = 'Saints_HolyWomen',
}

/**
 * The **CommonDefinition** refers to a simplified version of the **Commons** enum.
 * To be used in the martyrology metadata.
 */
export enum CommonDefinition {
  // No common
  None = 'None',

  // Dedication of a Church
  DedicationAnniversary_Inside = 'DedicationAnniversary_Inside',
  DedicationAnniversary_Outside = 'DedicationAnniversary_Outside',

  // Blessed Virgin Mary
  BlessedVirginMary = 'BlessedVirginMary',

  // Martyrs
  Martyrs = 'Martyrs',
  MissionaryMartyrs = 'MissionaryMartyrs',
  VirginMartyrs = 'VirginMartyrs',
  WomanMartyrs = 'WomanMartyrs',

  // Pastors
  Pastors = 'Pastors',
  Popes = 'PopeOrBishop',
  Bishops = 'Bishops',
  Founders = 'Founders',
  Missionaries = 'Missionaries',

  // Doctors of the Church
  DoctorsOfTheChurch = 'DoctorsOfTheChurch',

  // Virgins
  Virgins = 'Virgins',

  // Holy Men and Women
  Saints = 'Saints',
  Abbots = 'Abbots',
  Monks = 'Monks',
  Nuns = 'Nuns',
  Religious = 'Religious',
  MercyWorkers = 'MercyWorkers',
  Educators = 'Educators',
  HolyWomen = 'HolyWomen',
}
