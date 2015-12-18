var _ = require('lodash'),
    moment = require('moment'),
    Loader = require('require-all'),
    Path = require('path'),
    Types = require( Path.join( __dirname, '../data/types' )).types;

// Mustache style templating is easier on the eyes
_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;

// Preload all locales
var Locales = Loader({
  dirname: Path.join( __dirname, '../locales' ),
  filter:  /^(.*\.(?:(json)$))?[^.]*$/i,
  map : function ( name, path ) {
    return name.replace(/\.[^/.]+$/, "").toLowerCase();
  }
});

// Set locale
// Locale lookup for date name strings are based on moment
var _locale = {},
    _setLocale = function( key ) {
      moment.locale( key );
      if ( _.has( Locales, moment.locale() ) ) {
        _locale = _.get( Locales, moment.locale() );
      }
      else {
        _locale = _.get( Locales, 'en' );
      }
    };

// Nested property lookup logic
var _getDescendantProp = function( obj, desc ) {
  var arr = desc.split(".");
  while( arr.length && (obj = obj[arr.shift()]));
  return obj;
};

module.exports = {

  setLocale: _setLocale,
  getLocale: function() { return _locale; },

  // Using the set moment locale, get the relevant localized
  // text for standard dates. Also make numbers ordinal by 
  // leveraging moment's ordinal number function.
  localize: function( options ) {

    var localeDate = moment.localeData(),
        compiled = _.template( _getDescendantProp( _locale, options.key ) );

    // If defined, pluralize a value and add it to the given template 
    if ( !_.isUndefined( options.week ) ) {
      options.week = localeDate.ordinal( options.week );
    }

    // If defined, count the nth day of the given series
    if ( !_.isUndefined( options.count ) ) {
      options.count = localeDate.ordinal( options.count );
    }

    return compiled( options );
  },

  getTypeByDayOfWeek: function() {
    if ( _.eq( arguments[0], 0 ) ) {
      return Types[1]; // Sunday
    }
    else {
      return _.last( Types ); // Weekday
    }
  }

};
