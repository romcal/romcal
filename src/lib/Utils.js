import _ from 'lodash';
import moment from 'moment';
import Path from 'path';
import { Types } from '../constants';
import Locales from '../locales';

// Mustache style templating is easier on the eyes
_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;

// Set locale
// Locale lookup for date name strings are based on moment
let _locale = {};
let _fallbackLocale = _.get( Locales, 'en' );

let setLocale = key => {
  moment.locale( key );
  if ( _.has( Locales, moment.locale() ) ) {
    _locale = _.get( Locales, moment.locale() );
  }
  else {
    _locale = _fallbackLocale;
  }
};

// Nested property lookup logic
let _getDescendantProp = ( obj, desc ) => {
  let arr = desc.split(".");
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

const getTypeByDayOfWeek = () => {
  if ( _.eq( arguments[0], 0 ) ) {
    return Types[1]; // Sunday
  }
  else {
    return _.last( Types ); // Weekday
  }
};

export {
  setLocale,
  getLocale,
  localize,
  getTypeByDayOfWeek
};
