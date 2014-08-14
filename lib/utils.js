/*
    The MIT License (MIT)

    Copyright (c) 2014 Pereira, Julian Matthew

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
*/

var moment = require('moment'),
    lodash = require('lodash'),
    fs = require('fs');

module.exports = {
    days: function() {
        return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    },
    months: function() {
        return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    },
    ordinalNumbers: function() {
        return [
            '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th',
            '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th',
            '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th',
            '31st', '32nd', '33rd', '34th', '35th', '36th', '37th', '38th', '39th', '40th',
        ];
    },
    calendars: function() {
        return {
          "general": {
            "locale": "general",
            "name": "General"
          },
          "argentina": {
            "locale": "es-AR",
            "name": "Argentina (Spanish)"
          },
          "australia": {
            "locale": "en-AU",
            "name": "Australia (English)"
          },
          "austria": {
            "locale": "de-AT",
            "name": "Austria (German)"
          },
          "belgium": {
            "locale": "fr-BE",
            "name": "Belgium (French)"
          },
          "bolivia": {
            "locale": "es-BO",
            "name": "Bolivia (Spanish)"
          },
          "bosniaHerzegovina": {
            "locale": "bs",
            "name": "Bosnia Herzegovina (Bosnian)"
          },
          "brazil": {
            "locale": "pt-BR",
            "name": "Brazil (Portuguese)"
          },
          "canada": {
            "locale": "en-CA",
            "name": "Canada (English)"
          },
          "spain": {
            "locale": "es-ES",
            "name": "Spain (Spanish)"
          },
          "croatia": {
            "locale": "hr",
            "name": "Croatia (Croatian)"
          },
          "czechRepublic": {
            "locale": "cs",
            "name": "Czech Republic (Czech)"
          },
          "england": {
            "locale": "en-GB",
            "name": "United Kingdom (English)"
          },
          "france": {
            "locale": "fr-FR",
            "name": "France (French)"
          },
          "finland": {
            "locale": "sv-FI",
            "name": "Finland (Sweedish)"
          },
          "germany": {
            "locale": "de-DE",
            "name": "Germany (German)"
          },
          "greece": {
            "locale": "el",
            "name": "Greece (Greek)"
          },
          "hungary": {
            "locale": "hu",
            "name": "Hungary (Hungarian)"
          },
          "india": {
            "locale": "en-IN",
            "name": "India (English)"
          },
          "ireland": {
            "locale": "en-IE",
            "name": "Ireland (English)"
          },
          "japan": {
            "locale": "ja",
            "name": "Japan (Japanese)"
          },
          "lebanon": {
            "locale": "ar-LB",
            "name": "Lebenon (Arabic)"
          },
          "lithuania": {
            "locale": "lt",
            "name": "Lithuania (Lithuanian)"
          },
          "luxembourg": {
            "locale": "de-LU",
            "name": "Luxembourg (German)"
          },
          "malta": {
            "locale": "mt-MT",
            "name": "Malta (Maltese)"
          },
          "mexico": {
            "locale": "es-MX",
            "name": "Mexico (Spanish)"
          },
          "newZealand": {
            "locale": "en-NZ",
            "name": "New Zealand (English)"
          },
          "norway": {
            "locale": "nb-NO",
            "name": "Norway (Norwegian)"
          },
          "peru": {
            "locale": "es-PE",
            "name": "Peru (Spanish)"
          },
          "philippines": {
            "locale": "en-PH",
            "name": "Phillipines (English)"
          },
          "poland": {
            "locale": "pl",
            "name": "Poland (Polish)"
          },
          "portugal": {
            "locale": "pt-PT",
            "name": "Portugal (Portuguese)"
          },
          "puertoRico": {
            "locale": "es-PR",
            "name": "Puerto Rico (Spanish)"
          },
          "romania": {
            "locale": "ro",
            "name": "Romania (Romanian)"
          },
          "russia": {
            "locale": "ru",
            "name": "Russia (Russian)"
          },
          "scotland": {
            "locale": "gd",
            "name": "Scotland (Gaelic)"
          },
          "slovakia": {
            "locale": "sk-SK",
            "name": "Slovakia (Slovak)"
          },
          "switzerland": {
            "locale": "de-CH",
            "name": "Switzerland (German)"
          },
          "sweeden": {
            "locale": "sv-SE",
            "name": "Sweeden (Sweedish)"
          },
          "chile": {
            "locale": "es-CL",
            "name": "Chile (Spanish)"
          },
          "sriLanka": {
            "locale": "si-LK",
            "name": "Sri Lanka"
          },
          "ukraine": {
            "locale": "uk",
            "name": "Ukraine (Ukrainian)"
          },
          "unitedStates": {
            "locale": "en-US",
            "name": "United States (English)"
          },
          "vietnam": {
            "locale": "vi",
            "name": "Vietnam (Vietnamese)"
          },
          "wales": {
            "locale": "cy",
            "name": "Wales (Welsh)"
          }
        };
    },
    types: function() {
        return types = {
            "SOLEMNITY":{"id":"SOLEMNITY","name":"Solemnity","rank":12},
            "SUNDAY_OF_EASTER":{"id":"SUNDAY_OF_EASTER","name":"Sunday","rank":11}, // Feasts and memorials cannot replace this
            "SUNDAY_OF_LENT":{"id":"SUNDAY_OF_LENT","name":"Sunday","rank":11}, // Feasts and memorials cannot replace this
            "SUNDAY_OF_ADVENT":{"id":"SUNDAY_OF_ADVENT","name":"Sunday","rank":11}, // Feasts and memorials cannot replace this
            "FEAST_OF_THE_LORD":{"id":"FEAST_OF_THE_LORD","name":"Feast","rank":10},
            "FIXED_FEAST":{"id":"FIXED_FEAST","name":"Feast","rank":10}, // A feast that can replace a Sunday
            "SUNDAY":{"id":"SUNDAY","name":"Sunday","rank":9},
            "HOLY_WEEK":{"id":"HOLY_WEEK","name":"Holy Week","rank":8}, // Monday, Tuesday and Wednesday of Holy Week (cannot be replaced by a feast or memorial)
            "FEAST":{"id":"FEAST","name":"Feast","rank":7}, // Takes precendence over weekdays (and Saturdays) but not Sundays
            "FEAST_APOSTLE":{"id":"FEAST_APOSTLE","name":"Feast","rank":7},// Color is red
            "WEEKDAY_FEAST":{"id":"WEEKDAY_FEAST","name":"Weekday","rank":7}, // Special weekdays which take precedence over memorials/opt memorials
            "FEAST_MARTYR":{"id":"FEAST_MARTYR","name":"Feast","rank":7},
            "TRIDUUM":{"id":"TRIDUUM","name":"Triduum","rank":6}, // Thursday, Friday and Saturday of Holy Week
            "MEMORIAL":{"id":"MEMORIAL","name":"Memorial","rank":5}, // Follows color of season
            "MEMORIAL_MARTYR":{"id":"MEMORIAL_MARTYR","name":"Memorial","rank":5}, // Color Red
            "OPT_MEMORIAL":{"id":"OPT_MEMORIAL","name":"Optional Memorial","rank":4}, // Follows color of season
            "OPT_MEMORIAL_MARTYR":{"id":"OPT_MEMORIAL_MARTYR","name":"Optional Memorial","rank":4}, // Follows color of season
            "COMMEM":{"id":"COMMEM","name":"Commemoration","rank":3}, // Represents a downgraded memorial during lent (can replace a weekday)
            "WEEKDAY_OF_EASTER":{"id":"WEEKDAY_OF_EASTER","name":"Weekday","rank":2},
            "WEEKDAY_OF_LENT":{"id":"WEEKDAY_OF_LENT","name":"Weekday","rank":1},
            "WEEKDAY_OF_ADVENT":{"id":"WEEKDAY_OF_ADVENT","name":"Weekday","rank":1},
            "WEEKDAY":{"id":"WEEKDAY","name":"Weekday","rank":0},
            "WEEKDAY_OF_EPIPHANY":{"id":"WEEKDAY_OF_EPIPHANY","name":"Weekday","rank":0}
        };
    },
    categories: function() {
        return {
            LENT: 'Lent',
            HOLY_WEEK: 'HolyWeek',
            EASTER: 'Easter',
            OT: 'OrdinaryTime',
            ADVENT: 'Advent',
            CHRISTMAS: 'Christmastide'
        };
    },
    liturgicalColors: function() {
        return {
            "RED":{"name":"RED","hex":"#FF0000"},
            "ROSE":{"name":"ROSE","hex":"#FF007F"},
            "PURPLE":{"name":"PURPLE","hex":"#800080"},
            "GREEN":{"name":"GREEN","hex":"#008000"},
            "WHITE":{"name":"WHITE","hex":"#FFFFFF"},
            "GOLD":{"name":"GOLD","hex":"#FFD700"}
        };
    },
    dateOfEaster: function( Y ) {
        /**
          * This algorithm is based on the algorithm of Oudin (1940) and quoted in
          * "Explanatory Supplement to the Astronomical Almanac", P. Kenneth
          * Seidelmann, editor.
          */
        var C = Math.floor(Y/100),
            N = Y - 19*Math.floor(Y/19),
            K = Math.floor((C - 17)/25),
            I = C - Math.floor(C/4) - Math.floor((C - K)/3) + 19*N + 15;

        I = I - 30*Math.floor((I/30));
        I = I - Math.floor(I/28)*(1 - Math.floor(I/28)*Math.floor(29/(I + 1))*Math.floor((21 - N)/11));

        var J = Y + Math.floor(Y/4) + I + 2 - C + Math.floor(C/4);
        J = J - 7*Math.floor(J/7);

        var L = I - J,
            M = 3 + Math.floor((L + 40)/44),
            D = L + 28 - 31*Math.floor(M/4);

        return moment.utc({ year: Y, month: ( M - 1 ), day: D });
    },
    getLocalizationData: function() {
        var localization = fs.readFileSync('./data/localization.json', {encoding: 'utf-8'} );
        localization = JSON.parse( localization );
        return localization;
    }
};