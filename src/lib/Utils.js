import _ from 'lodash';
import moment from 'moment';
import { Types } from '../constants';
import * as Locales from '../locales';

// Mustache style templating is easier on the eyes
_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;

// Set locale
// Locale lookup for date name strings are based on Moment.
// romcal defines at least the default 'en' language as a fallback.
// If a region is specified in the locale ('xx-XX'), romcal will
// automatically manage a graceful fallback to its base language ('xx'), if it exists in 'src/locales'.
// We get then a cascade fallbacks: region ('xx-XX') -> base language ('xx') -> default 'en'
// For example: if a string is missing in 'fr-CA', it will try to pick it in 'fr', and then in 'en'.
const _fallbackLocaleKey = 'en';
let _combinedLocale;
let _locales;
let setLocale = key => {

  // When setLocale() is called, it redefines this vars to defaults
  _combinedLocale = undefined;
  _locales = [_.get(Locales, _fallbackLocaleKey)];

  // Sanitize incoming key
  key = _.toLower(key); // make key it lowercase
  let keyValues = /^([a-z]+)-?([a-z]*)/.exec(key); // extract lang and region from string
  let lang = keyValues[1];
  let region = _.toUpper(keyValues[2]); // make region it uppercase
  let localeName = lang + (region ? '-' + region : ''); // Use kebab-case in localName to follow IETF Language Codes standards
  key = lang + (region ? region : '');

  // Set the Moment locale (if unrecognized, will default to 'en')
  moment.locale(localeName);

  // Ensures that the first day is always a Sunday in romcal & Moment.js
  // - Monday is the first day of the week according to the international standard ISO 8601,
  //   but in the US, Canada, and Japan, it's counted as the second day of the week.
  // - In Christian calendars, Sunday is always the first day of the week.
  moment.updateLocale(localeName, {week: {dow: 0}});

  // If a region is specified: append the base language as fallback.
  // Also check if the base language isn't already the default 'en',
  // and if this base language exists in 'src/locales'
  if (!!region && lang !== _fallbackLocaleKey && _.has( Locales, lang )) {
    // Retrieve the relevant base locale object
    // and set it as a fallback (before 'en')
    _locales.unshift(_.get( Locales, lang ));
  }

  // Set the given locale into romcal.
  // Also check if it's not the same as the fallback 'en'
  // (to avoid its duplicate definition)
  // and if exists in 'src/locales'
  if (key !== _fallbackLocaleKey && _.has( Locales, key )) {
    // Retrieve the relevant locale object
    // and set it as the first & default locale
    _locales.unshift(_.get( Locales, key ));
  }
};

// Nested property lookup logic
let _getDescendantProp = ( obj, desc ) => {
  let arr = desc.split('.');
  while( arr.length && (obj = obj[arr.shift()]));
  return obj;
};

// Get the current locale object.
// Return an object that combines the main locale with its fallback.
// And use cache in case this function is called multiple times
// without the locale being modified.
const getLocale = () => {
  if (_.isUndefined(_combinedLocale)) {
    _combinedLocale = _.mergeWith.apply(null, [{}].concat(_.reverse(_locales)));
  }
  return _combinedLocale;
};

// Using the set Moment locale, get the relevant localized
// text for standard dates. Also make numbers ordinal by
// leveraging Moment's ordinal number function.
const localize = options => {

  let localeDate = moment.localeData();
  let value = _getDescendantProp( getLocale(), options.key );

  // If defined, pluralize a value and add it to the given template
  if ( !_.isUndefined( options.week ) ) {
    options.week = localeDate.ordinal( options.week );
  }

  // If defined, count the nth day of the given series
  if ( !_.isUndefined( options.count ) ) {
    options.count = localeDate.ordinal( options.count );
  }

  // Run the template against the options provided
  return _.template( value )( options );
};

// Utility function that takes an array of national calendar dates
// and adds a localized name based on the key
const localizeDates = (dates, source = 'sanctoral') => {
  return _.map( dates, d => {
    if (!_.has(d, 'drop')) {
      d.name = localize({
        key: `${source}.${d.key}`
      });
    }
    return d;
  });
};

const getTypeByDayOfWeek = d => _.eq(d, 0) ? Types.SUNDAY : Types.FERIA;

const convertMomentObjectToIsoDateString = (items = []) => {
  _.each(items, (item, key) => { // Loop through the date array
    if (_.has(item, 'moment')) { // check if it has a Moment property
      item.moment = item.moment.toISOString(); // and convert it to an ISO string
    }
    else { // this is a grouped result
      if (_.isArray(item)) {
        item = _.map(item, date => {
          if (_.has(date, 'moment')) { // check if it has a Moment property
            date.moment = date.moment.toISOString(); // and convert it to an ISO string
          }
          return date;
        });
      }
    }
    return item;
  });
  return items;
};

const convertIsoDateStringToMomentObject = (items = []) => {
  _.each(items, (item, key) => { // Loop through the date array
    if (_.has(item, 'moment')) { // check if it has a Moment property
      item.moment = moment.utc(item.moment); // and convert it to a Moment object
    }
    else { // this is a grouped result
      if (_.isArray(item)) {
        item = _.map(item, date => {
          if (_.has(date, 'moment')) { // check if it has a Moment property
            date.moment = moment.utc(date.moment); // and convert it to a Moment object
          }
          return date;
        });
      }
    }
    return item;
  });
  return items;
};

export {
  setLocale,
  getLocale,
  localize,
  localizeDates,
  getTypeByDayOfWeek,
  convertIsoDateStringToMomentObject,
  convertMomentObjectToIsoDateString
};
