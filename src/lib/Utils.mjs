import _ from 'lodash';
import moment from 'moment';
import { Types } from '../constants';
import * as Locales from '../locales';

// Remap Locale keys to match moment locales
const _locales = _.mapKeys(Locales, (v, k) => _.toLower(k));

// Mustache style templating is easier on the eyes
_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;

// Set locale
// Locale lookup for date name strings are based on moment
let _locale = {};
let _fallbackLocale = _.get(_locales, 'enus');
let setLocale = key => {

  key = _.toLower(key); // make key it lowercase
  key =  key.replace(/[^A-Za-z]/gi, ''); // remove any digits or special chars from string
  
  // Set the moment locale (if unrecognized, will default to 'en')
  moment.locale(key);

  // Check if the given locale is defined in src/locales
  if (_.has( _locales, key)) {
    // Set the moment locale
    // Retrieve the relevant locale object
    _locale = _.get(_locales, key);
  }
  else {
    _locale = _fallbackLocale; // Default to 'enus'
  }
};

// Nested property lookup logic
let _getDescendantProp = ( obj, desc ) => {
  let arr = desc.split('.');
  while( arr.length && (obj = obj[arr.shift()]));
  return obj;
};


// Get the current locale
const getLocale = () => _locale;

// Using the set moment locale, get the relevant localized
// text for standard dates. Also make numbers ordinal by
// leveraging moment's ordinal number function.
const localize = options => {
  
  let localeDate = moment.localeData();
  let value = _getDescendantProp( _locale, options.key );

  // Use fallback locale if current locale doesnt have the given key
  if ( _.isNull( value ) || _.isEmpty( value ) ) {
    value = _getDescendantProp( _fallbackLocale, options.key );
  }

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
// and adds a  localized name based on the key 
const localizeDates = (dates, source = 'national') => {
  return _.map( dates, d => {
    if (!_.has(d, 'drop')) {
      d.name = localize({
        key: `${source}.${d.key}`
      });
    }
    return d;
  });
};

// Types[1]: Sunday, _.last(Types) Weekday
const getTypeByDayOfWeek = d => _.eq(d, 0) ? Types[1]: _.last(Types);

const convertMomentObjectToIsoDateString = (items = []) => {
  _.each(items, (item, key) => { // Loop through the date array
    if (_.has(item, 'moment')) { // check if it has a moment property
      item.moment = item.moment.toISOString(); // and convert it to an ISO string
    }
    else { // this is a grouped result
      if (_.isArray(item)) {
        item = _.map(item, date => {
          if (_.has(date, 'moment')) { // check if it has a moment property
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
    if (_.has(item, 'moment')) { // check if it has a moment property
      item.moment = moment.utc(item.moment); // and convert it to a moment object
    }
    else { // this is a grouped result
      if (_.isArray(item)) {
        item = _.map(item, date => {
          if (_.has(date, 'moment')) { // check if it has a moment property
            date.moment = moment.utc(date.moment); // and convert it to a moment object
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
