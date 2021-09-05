const express = require('express');
const Romcal = require('romcal');
const { france_fr } = require('@romcal/calendar.france');

/**
 * Initialize the Express.js server.
 * @type {*|Express}
 */
const app = express();

/**
 * Check if a correct year is provided.
 * Otherwise leave it to undefined (in this romcal will take the current year instead).
 * @param maybeYear
 * @returns {number|undefined}
 */
const getYear = (maybeYear) => {
  const yearInput = parseInt(maybeYear, 10);
  return Number.isInteger(yearInput) ? yearInput : undefined;
};

/**
 * Wire an index HTML page to the URL root of this server.
 */
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

/**
 * Example with the General Roman calendar, all its defined locales, and an optional year.
 */
app.get('/romcal/general-roman/:locale/:year?', async (req, res) => {
  const locale = req.params['locale'].toLowerCase();
  const localeIndex = Romcal.LOCALE_KEYS.indexOf(locale);

  // Check if the provided locale exists in the `general_roman` calendar. If no, return a 404 error.
  if (localeIndex === -1) {
    return res.status(404).send("404 - The provided locale doesn't exists.");
  }

  // Load dynamically the localized General Roman Calendar
  const module = await require(`@romcal/calendar.general-roman/cjs/${locale}.js`);
  const localeVarName = Romcal.LOCALE_VAR_NAMES[localeIndex];
  const localizedCalendar = module[`generalRoman_${localeVarName}`];

  // Initialize a romcal object with the General Roman Calendar data.
  const romcalGeneralRoman = new Romcal({ localizedCalendar });

  // Generate a liturgical calendar with the provided locale and year.
  const year = getYear(parseInt(req.params['year']));
  const data = await romcalGeneralRoman.generateCalendar(year);

  // Finally, send the computed data.
  res.json(data);
});

/**
 * Simple example with only 1 supported locale by the REST API (`fr` in this example),
 * and the calendar of France.
 */
const romcalFranceFr = new Romcal({ localizedCalendar: france_fr });
app.get('/romcal/france/fr/:year?', async (req, res) => {
  const year = getYear(parseInt(req.params['year']));
  const data = await romcalFranceFr.generateCalendar(year);
  res.json(data);
});

/**
 * Run the server.
 */
app.listen(3000, () => {
  console.log('Romcal server listening on port 3000');
  console.log('url: http://127.0.0.1:3000');
});
