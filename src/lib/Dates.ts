import * as moment from "moment";
import { extendMoment } from "moment-range";
import "moment-recur-ts";
import _ from "lodash";
import { TChristmastideEndings, isNil } from "../utils/type-guards";

const { range } = extendMoment(moment);

//==================================================================================
// Base functions (all types of seasons and celebrations)
//==================================================================================

// This algorithm is based on the algorithm of Oudin (1940) and quoted in
// "Explanatory Supplement to the Astronomical Almanac", P. Kenneth
// Seidelmann, editor.
// year: The year on which to check when Easter falls (integer)
const _easter = _.memoize((year: number) => {
    const Y = year;
    const C = Math.floor(Y / 100);
    const N = Y - 19 * Math.floor(Y / 19);
    const K = Math.floor((C - 17) / 25);
    let I = C - Math.floor(C / 4) - Math.floor((C - K) / 3) + 19 * N + 15;

    I = I - 30 * Math.floor(I / 30);
    I = I - Math.floor(I / 28) * (1 - Math.floor(I / 28) * Math.floor(29 / (I + 1)) * Math.floor((21 - N) / 11));

    let J = Y + Math.floor(Y / 4) + I + 2 - C + Math.floor(C / 4);
    J = J - 7 * Math.floor(J / 7);

    const L = I - J;
    const M = 3 + Math.floor((L + 40) / 44);
    const D = L + 28 - 31 * Math.floor(M / 4);

    return { year: Y, month: M, day: D };
});

const easter = (year: number): moment.Moment => {
    const { month, day } = _easter(year);
    return moment.utc({ year, month: month - 1, day });
};

/**
 * The Solemnity of Pentecost occurs 49 days after Easter.
 *
 * @param year The year to use for the calculation
 */
const pentecostSunday = (year: number): moment.Moment =>
    easter(year)
        .add(49, "days")
        .startOf("day");

/**
 * Divine Mercy Sunday is celebrated on the Sunday after Easter, the Octave of Easter,
 * observed by Roman Catholic as well as some Anglicans
 *
 * @param year The year to use for the calculation
 */
const divineMercySunday = (year: number): moment.Moment =>
    easter(year)
        .add(7, "days")
        .startOf("day");

/**
 * In the Western Rite, Christmas falls on the 25th of December.
 *
 * @param year The year to use for the calculation
 */
const christmas = (year: number): moment.Moment => moment.utc({ year, month: 11, day: 25 });

// The start of Advent depends upon the day of the
// week on which Christmas occurs
// y: year
const firstSundayOfAdvent = (year: number): moment.Moment => {
    switch (christmas(year).day()) {
        case 0: // Sunday
            return moment.utc({ year, month: 10, day: 27 });
        case 1: // Monday
            return moment.utc({ year, month: 11, day: 3 });
        case 2: // Tuesday
            return moment.utc({ year, month: 11, day: 2 });
        case 3: // Wednesday
            return moment.utc({ year, month: 11, day: 1 });
        case 4: // Thursday
            return moment.utc({ year, month: 10, day: 30 });
        case 5: // Friday
            return moment.utc({ year, month: 10, day: 29 });
        default:
            // Saturday
            return moment.utc({ year, month: 10, day: 28 });
    }
};

//==================================================================================
// Lent & Holy Week
//==================================================================================

/**
 * Ash Wednesday, a day of fasting, is the first day of Lent in Western
 * Christianity. It occurs 46 days (40 fasting days, if the 6 Sundays,
 * which are not days of fast, are excluded) before Easter and can fall
 * as early as 4 February or as late as 10 March.
 *
 * @param year The year to use for the calculation
 */
const ashWednesday = (year: number): moment.Moment =>
    easter(year)
        .subtract(46, "days")
        .startOf("day");

// Maundy Thursday (also known as Holy Thursday) is
// the Christian holy day falling on the Thursday before Easter.
// y: year
const holyThursday = (year: number): moment.Moment =>
    easter(year)
        .subtract(3, "days")
        .startOf("day");

// Palm Sunday is a Christian moveable feast that
// falls on the Sunday before Easter.
// y: year
const palmSunday = (year: number): moment.Moment =>
    easter(year)
        .subtract(7, "days")
        .startOf("day");

/**
 * Resolves the date of Holy Saturday.
 *
 *  Holy Saturday (Latin: Sabbatum Sanctum) i.e. the Saturday of Holy Week, also known as the
 * Great Sabbath, Black Saturday, or Easter Eve,[1] and called "Joyous Saturday" or "the
 * Saturday of Light" among Coptic Christians, is the day after Good Friday. It is the day
 * before Easter and the last day of Holy Week in which Christians prepare for Easter.
 * It commemorates the day that Jesus Christ's body lay in the tomb and the Harrowing of Hell.
 *
 * @param year The year to use for the calculation
 */
const holySaturday = (year: number): moment.Moment =>
    easter(year)
        .subtract(1, "days")
        .startOf("day");

// Lent starts on Ash Wednesday and runs until the
// day before Holy Thursday
// y: year (integer)
const daysOfLent = (year: number): Array<moment.Moment> => {
    const start = ashWednesday(year);
    const end = holyThursday(year);
    return moment
        .utc()
        .recur({
            start,
            end,
            exceptions: [end],
        })
        .every(1)
        .day()
        .all();
};

// Lent begins on Ash Wednesday and concludes
// the day before Holy Thursday
// y: year (integer)
const sundaysOfLent = (year: number): Array<moment.Moment> => {
    const start = ashWednesday(year);
    const end = holyThursday(year);
    return moment
        .utc()
        .recur({
            start,
            end,
            exceptions: [end],
        })
        .every(0)
        .daysOfWeek()
        .all();
};

// Holy Week is the week just before Easter.
// In the west, it is also the last week of Lent, and includes
// Palm Sunday, Holy Wednesday, Maundy Thursday (Holy Thursday),
// Good Friday (Holy Friday), and Holy Saturday.
// It does not include Easter Sunday
// y: year
const holyWeek = (year: number): Array<moment.Moment> => {
    const start = palmSunday(year);
    const end = holySaturday(year);
    return moment
        .utc()
        .recur({
            start,
            end,
        })
        .every(1)
        .day()
        .all();
};

// Good Friday is a Christian religious holiday commemorating the crucifixion of Jesus Christ
// and his death at Calvary. The holiday is observed during Holy Week as part of the
// Paschal Triduum on the Friday preceding Easter Sunday
// y: year
const goodFriday = (year: number): moment.Moment =>
    easter(year)
        .subtract(2, "days")
        .startOf("day");

//==================================================================================
// Epiphany & Christmastide
//==================================================================================

// EPIPHANY RUBRIC
// Standard rule:
// Epiphany is celebrated on the first Sunday after the first Saturday in January,
// which means it could fall on any day from January 2 to January 8.
// Traditional rule:
// Epiphany is always celebrated on Jan 6
// y: year
// epiphanyOnJan6: true|false (activate traditional rule)
const epiphany = (year: number, epiphanyOnJan6 = false): moment.Moment => {
    // Get the first day of the year
    const firstDay = moment.utc({ year, month: 0, day: 1 });
    let date = moment.utc({ year, month: 0, day: 6 });

    if (!epiphanyOnJan6) {
        switch (firstDay.day()) {
            // If first day of the year is a Saturday, Mary Mother of God is on that day
            // and Epiphany is on the next day
            case 6:
                date = firstDay.add(1, "days");
                break;
            // If first day of the year is a Sunday, Mary Mother of God is on that Sunday and
            // the Sunday proceeding will be Epiphany
            case 0:
                date = firstDay.add(7, "days");
                break;
            // If first day of the year is on a feria (i.e. Monday - Friday),
            // Epiphany will be celebrated on the Sunday proceeding
            default:
                date = firstDay.add(1, "weeks").startOf("week");
                break;
        }
    }
    return date;
};

// The Solemnity of Mary, the Holy Mother of God is a
// feast day of the Blessed Virgin Mary under the aspect
// of her motherhood of Jesus Christ, whom Christians
// see as the Lord, Son of God. It is celebrated by
// the Latin Rite of the Catholic Church on 1 January,
// the Octave (8th) day of Christmas, and in some
// countries is a Holy day of obligation..
// y: year
const maryMotherOfGod = (year: number): moment.Moment => moment.utc({ year, month: 0, day: 1 });

// The 8 days from Christmas to Mary Mother of God (inclusive)
// y: year
const octaveOfChristmas = (year: number): Array<moment.Moment> =>
    moment
        .utc()
        .recur({
            start: christmas(year),
            end: maryMotherOfGod(year + 1),
        })
        .every(1)
        .day()
        .all();

// The Baptism of the Lord (or the Baptism of Christ) is the feast day
// commemorating the baptism of Jesus in the Jordan River by John the
// Baptist. Originally the baptism of Christ was celebrated on Epiphany,
// which commemorates the coming of the Magi, the baptism of Christ, and
// the wedding at Cana. Over time in the West, however, the celebration of
// the baptism of the Lord came to be commemorated as a distinct feast from
// Epiphany. It is celebrated in Anglican and Lutheran Churches on the first
// Sunday following The Epiphany of Our Lord (6 January).
// y: year
// epiphanyOnJan6: true|false|undefined [When true, makes Epiphany land on Jan 6 always] (defaults to false)
const baptismOfTheLord = (year: number, epiphanyOnJan6 = false): moment.Moment => {
    let date = epiphany(year, epiphanyOnJan6);

    // If Epiphany is celebrated on Jan. 6
    // the Baptism of the Lord occurs on the Sunday following Jan. 6.
    if (_.eq(date.dayOfYear(), 6)) {
        date = date.add(1, "weeks").startOf("week");
    }
    // If Epiphany is not celebrated on Jan. 6
    else {
        // If Epiphany occurs on Sunday Jan. 7 or Sunday Jan. 8,
        //  then the Baptism of the Lord is the next day (Monday)
        if (_.eq(date.day(), 0) && (_.eq(date.dayOfYear(), 7) || _.eq(date.dayOfYear(), 8))) {
            date = date.add(1, "days");
        }
        // If Epiphany occurs before Jan. 6, the Sunday
        // following Epiphany is the Baptism of the Lord.
        else {
            date = date.add(1, "weeks").startOf("week");
        }
    }

    return date;
};

// In the Roman Catholic Church, the Feast of the Presentation of the Lord is
// a Feast Day occurring between the Feast of the Conversion of St. Paul the
// Apostle on 25 January and the Feast of the Chair of St. Peter the Apostle on
// 22 February. In some Western liturgical churches, Vespers (or Compline) on the
// Feast of the Presentation marks the end of the Epiphany season.
// y: year
const presentationOfTheLord = (year: number): moment.Moment => moment.utc({ year, month: 1, day: 2 });

// In different Churches, the Christmas Season might end on Jan. 6
// (the traditional date of the Feast of the Epiphany), or might last
// until the Feast of the Baptism of the Lord (usually the Sunday after
// Epiphany), or might even last all the way to Feb. 2 (the Feast of the
// Presentation of the Lord, 40 days after Dec. 25) (Candlemass)
// y: year (integer)
// christmastideEnds: the rule determining when the season of Christmas ends
//    t = Traditional [Jan 6th, Epiphany]
//    o = Ordinary Liturgical Calendar of the Western Roman Rite [Baptism of the Lord]
//    e = Extraordinary Liturgical Calendar of the Western Roman Rite [Presentation of the Lord (Candlemass)]
//        defaults to 'o'
// epiphanyOnJan6: true|false [If true, Epiphany will be fixed to Jan 6] (defaults to false)
const christmastide = (year: number, christmastideEnds: TChristmastideEndings, epiphanyOnJan6 = false): Array<moment.Moment> => {
    const start = christmas(year);
    let end = null;

    switch (christmastideEnds) {
        case "t":
            end = epiphany(year + 1, epiphanyOnJan6);
            break;
        case "o":
            end = baptismOfTheLord(year + 1, epiphanyOnJan6);
            break;
        case "e": // Candlemass (40 days)
            end = presentationOfTheLord(year + 1);
            break;
        default:
            end = baptismOfTheLord(year + 1, epiphanyOnJan6);
            break;
    }

    return moment
        .recur({ start, end })
        .every(1)
        .day()
        .all();
};

//==================================================================================
// Ordinary Time
//==================================================================================

// Ordinary Time in the early part of the year begins
// the day after the Baptism of the Lord and concludes
// the day before Ash Wednesday.
// year: Year (integer)
// christmastideEnds: t|o|e [The mode to calculate the end of Christmastide]
// epiphanyOnJan6: true|false [If true, fixes Epiphany to Jan 6] (defaults to false)
const daysOfEarlyOrdinaryTime = (year: number, christmastideEnds: TChristmastideEndings, epiphanyOnJan6 = false): Array<moment.Moment> => {
    let start = null;
    const end = ashWednesday(year);

    if (christmastideEnds === "t") {
        start = epiphany(year, epiphanyOnJan6);
    } else if (christmastideEnds === "e") {
        start = presentationOfTheLord(year);
    } else {
        start = baptismOfTheLord(year, epiphanyOnJan6);
    }

    return moment
        .utc()
        .recur({
            start,
            end,
            exceptions: [start, end],
        })
        .every(1)
        .day()
        .all();
};

// Ordinary Time in the later part of the year begins the
// day after Pentecost and concludes the day before the
// First Sunday of Advent.
// y: Year (integer)
const daysOfLaterOrdinaryTime = (year: number): Array<moment.Moment> => {
    const start = pentecostSunday(year);
    const end = firstSundayOfAdvent(year);
    return moment
        .utc()
        .recur({
            start,
            end,
            exceptions: [start, end],
        })
        .every(1)
        .day()
        .all();
};

// The Solemnity of Christ the King is always the 34th (and last) Sunday of Ordinary Time
// and is the week before the First Sunday of Advent. The Sundays of Ordinary Time in the
// latter part of the year are numbered backwards from Christ the King to Pentecost.
// y: Year (integer)
const christTheKing = (year: number): moment.Moment =>
    firstSundayOfAdvent(year)
        .subtract(7, "days")
        .startOf("day");

//==================================================================================
// Eastertide
//==================================================================================

// The term Octave of Easter refers to the eight-day period (Octave)
// from Easter Sunday until the Sunday following Easter, inclusive;
// y: year
const octaveOfEaster = (year: number): Array<moment.Moment> => {
    const start = easter(year);
    const end = divineMercySunday(year);
    return moment
        .utc()
        .recur({
            start,
            end,
        })
        .every(1)
        .day()
        .all();
};

// Eastertide is the period of fifty days from Easter Sunday to Pentecost Sunday.
// y: year
const sundaysOfEaster = (year: number): Array<moment.Moment> => {
    const start = easter(year);
    const end = pentecostSunday(year);
    return moment
        .utc()
        .recur({
            start,
            end,
        })
        .every(0)
        .daysOfWeek()
        .all();
};

// Eastertide is the period of fifty days from Easter Sunday to Pentecost Sunday.
// y: year
const daysOfEaster = (year: number): Array<moment.Moment> => {
    const start = easter(year);
    const end = pentecostSunday(year);
    return moment
        .utc()
        .recur({
            start,
            end,
        })
        .every(1)
        .day()
        .all();
};

//==================================================================================
// Advent
//==================================================================================

// The length of Advent depends upon the day
// of the week on which Christmas occurs
// y: year
const daysOfAdvent = (year: number): Array<moment.Moment> => {
    const start = firstSundayOfAdvent(year);
    const end = christmas(year);
    return moment
        .utc()
        .recur({
            start,
            end,
            exceptions: [end],
        })
        .every(1)
        .day()
        .all();
};

// There are always 4 sundays in Advent
// y: year
const sundaysOfAdvent = (year: number): Array<moment.Moment> => {
    const start = firstSundayOfAdvent(year);
    const end = christmas(year);
    return moment
        .utc()
        .recur({
            start,
            end,
            exceptions: [end],
        })
        .every(0)
        .daysOfWeek()
        .all();
};

/**
 * Calculates the number of days from the Mary, Mother of God to the last day of Epiphany (inclusive).
 * @param year The year to be used for the calculation
 * @param epiphanyOnJan6 true|false [If true, Epiphany will be fixed to Jan 6]
 */
const daysBeforeEpiphany = (year: number, epiphanyOnJan6 = false): Array<moment.Moment> => {
    const start = maryMotherOfGod(year);
    const end = epiphany(year, epiphanyOnJan6);
    const recurrence = moment
        .utc()
        .recur({
            start,
            end,
            exceptions: [start, end],
        })
        .every(1)
        .day();
    return recurrence.all();
};

// y: year (integer)
// epiphanyOnJan6: true|false [If true, Epiphany will be fixed to Jan 6]
const daysAfterEpiphany = (year: number, epiphanyOnJan6 = false): Array<moment.Moment> => {
    const start = epiphany(year, epiphanyOnJan6);
    const end = baptismOfTheLord(year, epiphanyOnJan6);
    const recurrence = moment
        .utc()
        .recur({
            start,
            end,
            exceptions: [start, end],
        })
        .every(1)
        .day();
    return recurrence.all();
};

// In the Roman Catholic church, the Feast of St. Joseph (19 March)
// is a Solemnity (first class if using the Tridentine calendar), and
// is transferred to another date if impeded (i.e., 19 March falling
// on Sunday or in Holy Week).
// y: year
const josephHusbandOfMary = (year: number): moment.Moment => {
    let date = moment.utc({ year, month: 2, day: 19 });

    // Check to see if this solemnity falls on a Sunday of Lent
    // If it occurs on a Sunday of Lent is transferred to the
    // following Monday.
    if (date.day() === 0) {
        _.each(sundaysOfLent(year), sunday => {
            if (date.isSame(sunday)) {
                date = sunday.add(1, "days");
            }
        });
    }

    // Check to see if this solemnity falls within Holy Week
    // If Joseph, Husband of Mary (Mar 19) falls on
    // Palm Sunday or during Holy Week, it is moved to
    // the Saturday preceding Palm Sunday.
    const [first, , last] = holyWeek(year);
    const holyWeekRange = range(first, last);
    if (holyWeekRange.contains(date)) {
        date = palmSunday(year)
            .subtract(1, "days")
            .startOf("day");
    }
    return date;
};

// Occurs on March 25th, moved to Monday after Divine Mercy Sunday
// if it is within Holy Week or Easter Octave
// y: year
const annunciation = (year: number): moment.Moment => {
    let date = moment.utc({ year, month: 2, day: 25 });

    // If it occurs on a Sunday of Lent, it is trasferred to the next day (Monday)
    const match = _.find(sundaysOfLent(year), sunday => date.isSame(sunday));

    // Since its a Sunday, add one day to make it a Monday
    if (!isNil(match)) {
        date = date.add(1, "days");
    }

    // If it occurs during Holy Week, it is transferred to the
    // Monday of the Second Week of Easter.
    const [firstDateOfHolyWeek, , lastDateOfHolyWeek] = holyWeek(year);
    const holyWeekRange = range(firstDateOfHolyWeek, lastDateOfHolyWeek);
    if (holyWeekRange.contains(date)) {
        date = divineMercySunday(year).add(1, "days");
    }

    // If it occurs during the Octave of Easter, it is transferred to the
    // Monday of the Second Week of Easter.
    const [firstDateInOctaveOfEaster, , lastDateInOctaveOfEaster] = octaveOfEaster(year);
    const octaveRange = range(firstDateInOctaveOfEaster, lastDateInOctaveOfEaster);
    if (octaveRange.contains(date)) {
        date = divineMercySunday(year).add(1, "days");
    }

    return date;
};

// The Nativity of St John the Baptist on June 24 comes three months after
// the celebration on March 25 of the Annunciation, when the Archangel Gabriel
// told Our Lady that her cousin Elizabeth was in her sixth month of pregnancy,
// and six months before the Christmas celebration of the birth of Jesus.
// The purpose of these festivals is not to celebrate the exact dates of these
// events, but simply to commemorate them in an interlinking way.
// The Nativity of St. John the Baptist anticipates the feast of Christmas.
// y: year
const birthOfJohnTheBaptist = (year: number): moment.Moment => moment.utc({ year, month: 5, day: 24 });

// The Feast of Saints Peter and Paul or Solemnity of Saints Peter and Paul is a
// liturgical feast in honour of the martyrdom in Rome of the apostles Saint Peter
// and Saint Paul, which is observed on 29 June. The celebration is of ancient origin,
// the date selected being the anniversary either of their death or of the translation
// of their relics.
// y: year
const peterAndPaulApostles = (year: number): moment.Moment => moment.utc({ year, month: 5, day: 29 });

// The Latin Catholic Feast of the Assumption is celebrated on August 15
// was the bodily taking up of the Virgin Mary into Heaven at the end
// of her earthly life.
// y: year
const assumption = (year: number): moment.Moment => moment.utc({ year, month: 7, day: 15 });

// All Saints' Day is a solemnity celebrated on 1 November by the Roman
// Catholic Church of Latin rite in honour of all the saints, known
// and unknown.
// y: year
const allSaints = (year: number): moment.Moment => moment.utc({ year, month: 10, day: 1 });

// The Catholic Church celebrates the Feast of the Immaculate Conception on December 8
// The Immaculate Conception, according to the teaching of the Catholic Church, was the
// conception of the Blessed Virgin Mary in the womb of her mother, Saint Anne, free from
// original sin by virtue of the foreseen merits of her son Jesus Christ. The Catholic
// Church teaches that Mary was conceived by normal biological means, but God acted upon
// her soul (keeping her "immaculate") at the time of her conception.
// y: year
const immaculateConception = (year: number): moment.Moment => {
    let _date = moment.utc({ year, month: 11, day: 8 });
    // Check to see if this solemnity falls on a Sunday of Advent
    // If it occurs on a Sunday of Advent is transferred to the
    // following Monday.
    if (_date.day() === 0) {
        _.each(sundaysOfAdvent(year), s => {
            if (_date.isSame(s)) {
                _date = s.add(1, "days");
            }
        });
    }
    return _date;
};

// In 1999, an Indult for the Transfer of the Solemnity of the Ascension was issued by the
// United States Conference of Catholic Bishops allowing each ecclesiastical province to
// determine if the Ascension should be celebrated on its proper Thursday (39 days after
// Easter) or on the Seventh Sunday of Easter (42 days after Easter). The following
// provinces of the United States have retained the celebration of Ascension on its proper
// Thursday. All other provinces of the United States have transferred the celebration of
// the Ascension to the Seventh Sunday of Easter.
// y: Takes the year (integer)
// ascensionOn7thSundayOfEaster: Optional boolean to set Ascension to the 7th Sunday of Easter when true
const ascension = (year: number, ascensionOn7thSundayOfEaster: boolean): moment.Moment => {
    // If specified, move Ascension to Sunday
    if (!isNil(ascensionOn7thSundayOfEaster) && ascensionOn7thSundayOfEaster) {
        return easter(year).add(42, "days");
    }
    // else by default, Ascension on Thursday
    else {
        return easter(year).add(39, "days");
    }
};

// The Solemnity of Trinity Sunday occurs 56 days after Easter.
// y: Takes the year (integer)
const trinitySunday = (year: number): moment.Moment => easter(year).add(56, "days");

// The Solemnity of Corpus Christi occurs 60 days after Easter, if it is celebrated on Thursday
// of the Seventh Week of Easter. In those places where Corpus Christi is not a holiday, it is
// transferred to the following Sunday (63 days after Easter)
// If second argument is true, move Corpus Christi to Thursday
// By default it will be on Sunday
// y: year
// corpusChristiOnThursday: Optional boolean to set Corpus Christi to Thursday when true (defaults to false)
const corpusChristi = (year: number, corpusChristiOnThursday = false): moment.Moment => {
    // If specified, move Corpus Christi to Thursday
    if (!isNil(corpusChristiOnThursday) && corpusChristiOnThursday) {
        return easter(year).add(60, "days");
    }
    // By default Corpus Christi on Sunday
    else {
        return easter(year).add(63, "days");
    }
};

// The Solemnity of the Sacred Heart of Jesus occurs 68 days after Easter.
// y: year
const sacredHeartOfJesus = (year: number): moment.Moment => easter(year).add(68, "days");

// Immaculate Heart of Mary occurs 69 days after
// Easter and is a Memorial. This was formerly an Optional Memorial.
// y: year
const immaculateHeartOfMary = (year: number): moment.Moment => easter(year).add(69, "days");

/**
 * Feast of the Holy Family
 *
 * *If Christmas falls on a Sunday, then Holy Family is celebrated on Dec. 30.
 * Otherwise, Holy Family is the Sunday after Christmas.*
 *
 * @param year The year for the calculation
 */
const holyFamily = (year: number): moment.Moment => {
    const _christmas = christmas(year);
    // If Christmas is on Sunday, then Holy Family is on the 30th Dec
    if (_christmas.day() === 0) {
        return moment.utc({ year, month: 11, day: 30 });
    }
    // Holy Family is 1 week after Christmas when Christmas is on a Feria
    else {
        return _christmas.add(1, "weeks").startOf("week");
    }
};

/**
 * Obtains the date for the Transfiguration of our Lord.
 *
 * @param year The year for the calculation
 */
const transfiguration = (year: number): moment.Moment => moment.utc({ year, month: 7, day: 6 });

/**
 * Obtains the date for The Exultation of The Holy Cross.
 *
 * https://en.wikipedia.org/wiki/Feast_of_the_Cross#History
 *
 * @param year The year for the calculation
 */
const theExaltationOfTheHolyCross = (year: number): moment.Moment => moment.utc({ year, month: 8, day: 14 });

export {
    //==================================================================================
    // The Season of Lent
    //==================================================================================

    ashWednesday,
    sundaysOfLent,
    daysOfLent,
    //==================================================================================
    // Holy Week
    //==================================================================================

    palmSunday,
    holyThursday,
    goodFriday,
    holySaturday,
    holyWeek,
    //==================================================================================
    // Eastertide
    //==================================================================================

    easter,
    sundaysOfEaster,
    daysOfEaster,
    octaveOfEaster,
    divineMercySunday,
    pentecostSunday,
    //==================================================================================
    // Ordinary Time
    //==================================================================================

    daysOfEarlyOrdinaryTime,
    daysOfLaterOrdinaryTime,
    christTheKing,
    //==================================================================================
    // ADVENT SEASON
    //==================================================================================

    firstSundayOfAdvent,
    sundaysOfAdvent,
    daysOfAdvent,
    //==================================================================================
    // Christmastide
    //==================================================================================

    christmas,
    octaveOfChristmas,
    christmastide,
    //==================================================================================
    // Epiphany
    //==================================================================================

    epiphany,
    daysBeforeEpiphany,
    daysAfterEpiphany,
    //==================================================================================
    // Fixed and movable Solemnities
    //==================================================================================

    maryMotherOfGod,
    josephHusbandOfMary,
    annunciation,
    birthOfJohnTheBaptist,
    peterAndPaulApostles,
    assumption,
    allSaints,
    immaculateConception,
    ascension,
    trinitySunday,
    corpusChristi,
    sacredHeartOfJesus,
    immaculateHeartOfMary,
    //==================================================================================
    // FEASTS OF THE LORD
    // If a fixed date Feast of the Lord occurs on a Sunday in Ordinary Time,
    // the feast is celebrated in place of the Sunday.
    // (e.g., Presentation of the Lord, 1992).
    //==================================================================================

    holyFamily,
    baptismOfTheLord,
    presentationOfTheLord,
    transfiguration,
    theExaltationOfTheHolyCross,

    //==================================================================================
};
