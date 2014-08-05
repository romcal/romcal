
var calendar = require('node-calendar'),
	moment = require('moment'),
	twix = require('twix'),
	lodash = require('lodash'),
	cheerio = require('cheerio');


/**
  * This algorithm is based on the algorithm of Oudin (1940) and quoted in
  *	"Explanatory Supplement to the Astronomical Almanac", P. Kenneth
  *	Seidelmann, editor.
  */
function _dateOfEaster( year ) {

	var century = Math.floor(year/100),
     	N = year - 19*Math.floor(year/19),
    	K = Math.floor((century - 17)/25),
    	I = century - Math.floor(century/4) - Math.floor((century - K)/3) + 19*N + 15;

    I = I - 30*Math.floor((I/30));
    I = I - Math.floor(I/28)*(1 - Math.floor(I/28)*Math.floor(29/(I + 1))*Math.floor((21 - N)/11));
    
    var J = year + Math.floor(year/4) + I + 2 - century + Math.floor(century/4);
    J = J - 7*Math.floor(J/7);
    
    var L = I - J,
    	M = 3 + Math.floor((L + 40)/44),
    	D = L + 28 - 31*Math.floor(M/4);

    // For moment
    M = M - 1;

    var M = (M < 10) ? '0' + M : M,
    	D = (D < 10) ? '0' + D : D;

    return moment({ year: year, month: M, day: D });
}

function _movableSolemnities( easter, firstSundayOfAdvent ) {
	var dates = {
        epiphany: moment({ year: easter.year(), month: 0, day: 2 }),
		octaveOfEaster: moment.twix( easter, moment(easter).add( 8, 'days' ) ),
        holyWeek: moment.twix( easter, moment(easter).subtract( 7, 'days') ),
        firstSundayOfEaster: moment(easter).add( 7, 'days' ),
        secondSundayOfEaster: moment(easter).add( 14, 'days' ),
        thirdSundayOfEaster: moment(easter).add( 21, 'days' ),
		ascensionOfTheLord: moment(easter).add( 39, 'days' ),
		pentecostSunday: moment(easter).add( 49, 'days' ),
		trinitySunday: moment(easter).add( 56, 'days' ),
		corpusChristi: moment(easter).add( 63, 'days' ),
		sacredHeart: moment(easter).add( 68, 'days' ),
		christTheKing: moment(firstSundayOfAdvent).subtract( 7, 'days' ), 
		ashWednesday: moment(easter).subtract( 46, 'days' ),
		palmSunday: moment(easter).subtract( 7, 'days' ),
		holyThursday: moment(easter).subtract( 3, 'days' ),
		goodFriday: moment(easter).subtract( 2, 'days' ),
		holySaturday: moment(easter).subtract( 1, 'days' ),
	};

	return dates;
}

function _feastsOfTheLord( christmas ) {

	var year = christmas.year(), 
		dates = {
			presentationOfTheLord: moment({year:year, month: 1, day: 2}),
			transfiguration: moment({year:year, month: 7, day: 6}),
			triumphOfTheCross: moment({year:year, month: 8, day: 14})
		};

	if ( christmas.day() === 0 )
		dates.holyFamily = moment({year: year, month: 11, day: 30});
	else
		dates.holyFamily = moment(christmas).add( 7, 'days');

	return dates
}

function _fixedSolemnities( year ) {
	var dates = {
			maryMotherOfGod: moment({year:year, month: 0, day: 1}),
			epiphanyOfOurLord: moment({year:year, month: 0, day: 6}), // May be a movable Solemnity depending on National Conference
			josephHusbandOfMary: moment({year:year, month: 2, day: 19}),
			annunciation: moment({year:year, month: 2, day: 25}),
			birthOfJohnTheBaptist: moment({year:year, month: 5, day: 24}),
			peterAndPaulApostles: moment({year:year, month: 5, day: 29}),
			assumption: moment({year:year, month: 7, day: 15}),
			allSaints: moment({year:year, month: 10, day: 1}),
			immaculateConception: moment({year:year, month: 11, day: 8}),
			christmas: moment({year:year, month: 11, day: 25})
		};

	return dates;
}

function _adventSeason( christmas ) {

	var dates = {};
		lengthOfAdvent = 0,
		firstSundayOfAdvent = null;

    // The length of Advent depends upon the day of the week on which Christmas occurs
    switch ( christmas.day() ) {
    	case 0:
    		lengthOfAdvent = 28;
    		firstSundayOfAdvent = moment({ year: christmas.year(), month: 10, day: 27 });
    		break;
    	case 1:
    		lengthOfAdvent = 22;
    		firstSundayOfAdvent = moment({ year: christmas.year(), month: 11, day: 3 });
    		break;
    	case 2:
    		lengthOfAdvent = 23;
    		firstSundayOfAdvent = moment({ year: christmas.year(), month: 11, day: 2 });
    		break;
    	case 3:
    		lengthOfAdvent = 24;
    		firstSundayOfAdvent = moment({ year: christmas.year(), month: 11, day: 1 });
    		break;
    	case 4:
    		lengthOfAdvent = 25;
    		firstSundayOfAdvent = moment({ year: christmas.year(), month: 10, day: 30 });
    		break;
    	case 5:
    		lengthOfAdvent = 26;
    		firstSundayOfAdvent = moment({ year: christmas.year(), month: 10, day: 29 });
    		break;
    	case 6:
    		lengthOfAdvent = 27;
    		firstSundayOfAdvent = moment({ year: christmas.year(), month: 10, day: 28 });
    		break;
    	default:
    		break;
    }

    dates.firstSundayOfAdvent = firstSundayOfAdvent;
    dates.secondSundayOfAdvent = moment(dates.firstSundayOfAdvent).add( 7, 'days' );
    dates.thirdSundayOfAdvent = moment(dates.secondSundayOfAdvent).add( 7, 'days' );
    dates.fourthSundayOfAdvent = moment(dates.thirdSundayOfAdvent).add( 7, 'days' );

    return dates;
}

function _epiphanyRubric( epiphany, fixedSolemnities ) {

    if ( epiphany.date() === 6 ) {
        fixedSolemnities.maryMotherOfGod = moment({year:year, month: 0, day: 1});

        // if ( moment({year:year, month: 0, day: 2}).day() === 0 )

    }

}


function _lentHolyWeekAdjustments( fixedSolemnities, movableSolemnities ) {

    var annunciation = fixedSolemnities.annunciation,
        palmSunday = movableSolemnities.palmSunday,
        secondSundayOfEaster = movableSolemnities.secondSundayOfEaster;

    // If the Annunciation (Mar 25) falls on Palm Sunday, it is celebrated on the Saturday preceding
    if ( annunciation.isSame( palmSunday ) )
        fixedSolemnities.annunciation = moment(palmSunday).startOf('week').subtract( 1, 'days' );

    //  If it falls during Holy Week or within the Octave of Easter, the Annunciation is transferred to the Monday of the Second Week of Easter
    if ( movableSolemnities.holyWeek.contains( annunciation ) || movableSolemnities.octaveOfEaster.contains( annunciation ) )
        fixedSolemnities.annunciation = moment(secondSundayOfEaster).add( 1, 'days' );

}



module.exports = {

	dates: function( year ) {

		if ( lodash.isEmpty( year ) )
			year = moment().year();

		var easter = _dateOfEaster( year ),
			fixedSolemnities = _fixedSolemnities( year ),
			adventSeason = _adventSeason( fixedSolemnities.christmas ),
			movableSolemnities = _movableSolemnities( easter, adventSeason.firstSundayOfAdvent ),
			feastsOfTheLord = _feastsOfTheLord( fixedSolemnities.christmas );

		console.log( adventSeason.firstSundayOfAdvent.toString() );
		console.log( adventSeason.secondSundayOfAdvent.toString() );
		console.log( adventSeason.thirdSundayOfAdvent.toString() );
		console.log( adventSeason.fourthSundayOfAdvent.toString() );

	}
};