# Glossary

This glossary provides definitions of terms used in the context of this romcal project. The terms are listed in alphabetical order.

The structure of a glossary items is as follows:

- the term name in a heading of the second level, without any abbreviation:
  - abbreviations, acronyms, initialisms, etc., should be made a separate item with `See [Full Term Name](#full-term-name).` (change the link name and anchor as required);
  - the headings should be ordered alphabetically;
- definition of the term:
  - ideally, it should full in a single, short paragraph;
  - provide an abbreviation (if it is used) after the first mention of the term;
- add a list named `See also:` where the synonyms and related items would be provided (provide as many links as required; prefer links to the glossary items).

## Abbreviations

### GILH

See [General Instruction of the Liturgy of the Hours](#general-instruction-of-the-liturgy-of-the-hours).

### GIRM

See [General Instruction on the Roman Missal](#general-instruction-on-the-roman-missal).

### GNLYC

See [General Norms for the Liturgical Year and the Calendar](#general-norms-for-the-liturgical-year-and-the-calendar).

## Celebration

A celebration is a liturgical or sacramental event, typically consisting of rituals, readings, prayers, and often the Eucharist (Mass), whether or not it is associated with a liturgical day.

> [!NOTE]
> Currently, romcal does not provide specific information about celebrations, such as the list of Masses for a given day or the hours of the Divine Office. Instead, it indicates unique liturgical days determined within a liturgical calendar. However, the ability to list these celebrations—linked to a liturgical day or corresponding to a civil day (such as Vigil Masses)—is a feature that may be added in the future.

## Divine Office

See the [Liturgy of the Hours](#liturgy-of-the-hours).

## General Instruction of the Liturgy of the Hours

The General Instruction of the Liturgy of the Hours (GILH) is the document that provides the general instructions for the Liturgy of the Hours. It is an official liturgical document that was promulgated by the Congregation for Divine Worship and the Discipline of the Sacraments.

An English translation of the GILH can be found [here](https://www.liturgyoffice.org.uk/Resources/Rites/GILH.pdf).

## General Instruction on the Roman Missal

The General Instruction on the Roman Missal (GIRM) is the detailed document that provides the rubrics for the celebration of the Mass. It is an official liturgical document that was promulgated by the Congregation for Divine Worship and the Discipline of the Sacraments.

An English translation of the GIRM can be found [here](https://www.liturgyoffice.org.uk/Resources/GIRM/Documents/GIRM.pdf).

## General Norms for the Liturgical Year and the Calendar

The General Norms for the Liturgical Year and the Calendar (GNLYC) is the document that provides the general norms for the liturgical year and the calendar. It is an official liturgical document that was promulgated by the Congregation for Divine Worship and the Discipline of the Sacraments.

An English translation of the GNLYC can be found [here](https://www.liturgyoffice.org.uk/Resources/GIRM/Documents/GNLY.pdf).

Older English name of the document was [_Universal Norms on the Liturgical Year and General Roman Calendar_](https://www.liturgyoffice.org.uk/Calendar/Info/GNLY.pdf), sometimes abbreviated as UNLY, UNLYC, UNLYGRC.

## Liturgical Color

The liturgical colors are the colors used in the liturgical vestments and altar cloths for the celebration of the Mass and other liturgical services. The colors are used to signify the nature of the liturgical season or feast being celebrated.

See [GIRM §346](https://www.liturgyoffice.org.uk/Resources/GIRM/Documents/GIRM.pdf#page=63).

## Liturgical Day

A liturgical day denotes a specific and distinct day within the Church’s liturgical calendar, characterized by particular celebrations and observances. Each day is assigned a [rank](#rank) to indicate its significance, a specific [liturgical color](#liturgical-color), and various properties that define its nature and all associated celebrations. The date of each liturgical day is determined according to the [Proper of Time](#proper-of-time), the [Proper of Saints](#proper-of-saints), and the rules governing the precedence of other liturgical days.

A liturgical day generally aligns with a day in the Gregorian calendar but has some nuances: it typically begins at First Vespers or Vigils (if observed), or otherwise at midnight, and ends at the beginning of the following liturgical day. If a liturgical day begins before midnight, it remains identified as a single liturgical day, even if it spans two civil days. A liturgical day is identified by a Gregorian date (considering the majority of the liturgical day that occurs within a given civil day).

In romcal, it is this concept of the liturgical day that is calculated within a liturgical calendar.

> [!NOTE]
> A liturgical day should not be confused with a celebration (see [celebration](#celebration)).

## Liturgical Period

In romcal, in addition to the liturgical seasons, liturgical periods provide further detail and metadata about the current liturgical period. For example, the octaves of Christmas and Easter, the period before and after Epiphany, Holy Week, etc. They also denote periods traditionally observed in the Catholic Church and by religious communities (especially for Marian hymns), including the period from the Baptism of Christ to the Presentation of Jesus in the Temple, and from the Presentation of Jesus in the Temple to Holy Thursday.

## Liturgy of the Hours

The Liturgy of the Hours (LotH), or the Divine Office, is a set of prayers prescribed by the Catholic Church to be recited at specific times of the day by clergy, religious, and laity. It consists of psalms, hymns, readings, and other prayers, structured to sanctify the day and mark the passage of time. The principal hours are Lauds (Morning Prayer), Vespers (Evening Prayer), and Compline (Night Prayer), with additional hours such as Matins (Office of Readings), Terce (Mid-Morning Prayer), Sext (Midday Prayer), and None (Mid-Afternoon Prayer). The LotH aims to fulfil St Paul’s exhortation to ‘pray without ceasing’ (1 Thessalonians 5:17).

See also:

- [General Instruction of the Liturgy of the Hours](#general-instruction-of-the-liturgy-of-the-hours).

## Precedence

The principle of precedence is used to determine which liturgical celebration should be observed when two or more celebrations fall on the same day. The principle of precedence is based on the liturgical rank of the celebrations.

See [GNLYC §59](https://www.liturgyoffice.org.uk/Resources/GIRM/Documents/GNLY.pdf#page=14).

## Proper of Saints

The Proper of Saints (or Sanctoral) consists of the fixed feasts, celebrated on the very same date each year (no matter what the day of the week),including Christmas and all the saints’ days.

## Proper of Time

The Proper of Time (or Temporal) consists of the movable feasts, most of them keyed to Easter (which falls on a different Sunday every year), including Ascension, Pentecost, and so on.

> [!NOTE]
> We avoid using the term Temporal to prevent potential confusion with the `Temporal` object in ECMAScript, which is still in a [proposal stage](https://tc39.es/proposal-temporal/docs/).

## Psalter Week Cycle

The four-week cycle of the psalter is coordinated with the liturgical year in such a way that on the First Sunday of Advent, the First Sunday in Ordinary Time, the First Sunday of Lent, and Easter Sunday the cycle is always begun again with Week 1 (others being omitted when necessary).

See [GILH §133](https://www.liturgyoffice.org.uk/Resources/Rites/GILH.pdf#page=26).

## Rank

The rank of a liturgical celebration is a measure of its importance in the liturgical calendar. The rank of a celebration determines how it should be observed when it falls on the same day as another celebration.

There are five categories of ranks: solemnities, Sunday, feasts, memorials, weekday. A memorial can be obligatory or optional.

See [GNLYC §3-16](https://www.liturgyoffice.org.uk/Resources/GIRM/Documents/GNLY.pdf#page=5).

## Sanctoral

See [Proper of Saints](#proper-of-saints).

## Season

Liturgical seasons are the periods of time in the liturgical year that are marked by a particular liturgical color and have a particular focus. The liturgical seasons are Advent, Christmastide, Lent, Easter Time, and Ordinary Time. The Ordinary Time is divided into two parts: the first part begins on the Monday after the Baptism of the Lord and ends on the day before Ash Wednesday; the second part begins on the Monday after Pentecost and ends on the Saturday before the First Sunday of Advent.

## Sunday Cycle

A three-year cycle for Sunday Mass readings (and some solemnities), designated by A, B, or C. Each cycle begins on the First Sunday of Advent of the previous civil year and ends on Saturday after the Christ the King Solemnity. The cycles follow each other in alphabetical order. Year C is always the Gregorian year divisible by 3, while Year A leaves a remainder of 1, and Year B a remainder of 2.

## Temporal

See [Proper of Time](#proper-of-time).

## Weekday Cycle

A two-year cycle for the weekday Mass readings (also called Cycle I and Cycle II). Odd-numbered years are the Cycle I (year 1); even-numbered ones are the Cycle II (year 2).
