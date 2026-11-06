/**
 * The seasons of the 1962 Missal.
 *
 * Only three of these mean the same thing they do in 1969. The year is divided
 * differently, not merely named differently: Septuagesima is three weeks of
 * preparation the 1969 reform abolished outright, Passiontide is a distinct season
 * rather than the tail of Lent, and the two long stretches counted from Epiphany and
 * from Pentecost are separate seasons rather than one Ordinary Time interrupted.
 *
 * That is why the engine cannot hold a fixed set: there is no season here that
 * corresponds to Ordinary Time, so there is nothing for a rite to map onto it.
 */
export enum Season1962 {
  /** Advent, from the fourth Sunday before Christmas to 24 December. */
  Advent = 'ADVENT_1962',

  /** Christmastide, from Christmas to 13 January, the octave day of the Epiphany. */
  Christmastide = 'CHRISTMASTIDE_1962',

  /** The Time after Epiphany, between one and six Sundays, ending at Septuagesima. */
  TimeAfterEpiphany = 'TIME_AFTER_EPIPHANY_1962',

  /** Septuagesima: the three Sundays of preparation before Lent. */
  Septuagesima = 'SEPTUAGESIMA_1962',

  /** Lent, from Ash Wednesday to the Saturday before Passion Sunday. */
  Lent = 'LENT_1962',

  /** Passiontide, from Passion Sunday through Holy Week to Holy Saturday. */
  Passiontide = 'PASSIONTIDE_1962',

  /** Paschaltide, from Easter through the octave of Pentecost. */
  Paschaltide = 'PASCHALTIDE_1962',

  /** The Time after Pentecost, from Trinity Sunday to the Saturday before Advent. */
  TimeAfterPentecost = 'TIME_AFTER_PENTECOST_1962',
}

export const SEASONS_1962 = [
  Season1962.Advent,
  Season1962.Christmastide,
  Season1962.TimeAfterEpiphany,
  Season1962.Septuagesima,
  Season1962.Lent,
  Season1962.Passiontide,
  Season1962.Paschaltide,
  Season1962.TimeAfterPentecost,
] as const;
