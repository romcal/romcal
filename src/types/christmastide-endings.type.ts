/**
 * Custom type to indicate Christmastide endings.
 *
 * The rule determining when the season of Christmas ends is as follows:
 *
 * |   Key   | Description                                                   |
 * | ------- | ------------------------------------------------------------- |
 * |   `t`   | Traditional [Jan 6th, Epiphany]                               |
 * |   `o`   | Ordinary Liturgical Calendar of the Western Roman Rite (Baptism of the Lord) |
 * |   `e`   | Extraordinary Liturgical Calendar of the Western Roman Rite (Presentation of the Lord/Candlemass) |
 */
export type ChristmastideEndings = 't' | 'o' | 'e';
