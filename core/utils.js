var moment = require('moment');

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
	types: function() {
		return types = {
			"SOLEMNITY":{"name":"Solemnity","rank":10},
			"FEAST":{"name":"Feast","rank":9},
			"TRIDUUM":{"name":"Triduum","rank":8},
			"HOLY_WEEK":{"name":"Holy Week","rank":7},
			"SUNDAY_OF_LENT_ADVENT":{"name":"Sunday","rank":6},
			"WEEKDAY_OF_LENT_ADVENT":{"name":"Weekday","rank":5},
			"MEMORIAL":{"name":"Memorial","rank":4},
			"COMMEM":{"name":"Commemoration","rank":3},
			"OPT_MEMORIAL":{"name":"Optional Memorial","rank":2},
			"SUNDAY":{"name":"Sunday","rank":1},
			"WEEKDAY":{"name":"Weekday","rank":0}
		};
	},
	liturgicalColors: function() {
		return {
			"RED":{"hex":"#ff0000"},
			"PURPLE":{"hex":"#800080"},
			"GREEN":{"hex":"#008000"},
			"WHITE":{"hex":"#ffffff"},
			"GOLD":{"hex":"#FFD700"}
		};
	},
	dateOfEaster: function( Y ) {
		/**
		  * This algorithm is based on the algorithm of Oudin (1940) and quoted in
		  *	"Explanatory Supplement to the Astronomical Almanac", P. Kenneth
		  *	Seidelmann, editor.
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
	}
};