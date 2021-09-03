const express = require('express');
const Romcal = require('romcal-next').default;
const general_roman = require('@romcal/calendar-general-roman').default;
const { france_fr } = require('@romcal/calendar-france');

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
 * Example with the General Roman calendar, all its possible locales, and an optional year.
 */
app.get('/romcal/general-roman/:locale/:year?', async (req, res) => {
  // Get the locale parameter and transform its name from kebab-case to camelCase.
  // E.g. `en-ie` => `enIe`
  const locale = req.params['locale'].toLowerCase().replace(/(-\w)/g, (c) => c[1].toUpperCase());

  // Check if the provided locale exists in the `general_roman` calendar. If no, return a 404 error.
  if (!Object.prototype.hasOwnProperty.call(general_roman, locale)) {
    return res.status(404).send("404 - The provided locale doesn't exists.");
  }

  // Initialize a romcal object with the General Roman Calendar data.
  const romcalGeneralRoman = new Romcal({ localizedCalendar: general_roman[locale] });

  // Generate a liturgical calendar with the provided locale and year.
  const year = getYear(parseInt(req.params['year']));
  const data = await romcalGeneralRoman.generateCalendar(year);

  // Finally, send the computed data.
  res.json(data);
});

/**
 * Simple example with only 1 supported locale by the REST API (`fr` in this example),
 * and the calendar of France.
 *
 * Note 1: importing `france_fr` is the same thing as importing `france` and then accessing to the
 * localized calendar `france.fr`.
 *
 * Note 2: in the example below, we only use the `fr` locale. In this case it's better to
 * initialize the romcal object outside the `app.get` method, so the romcal object isn't recreated
 * everytime the API is called.
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
  console.log('url: http://127.0.0.1:3333');
});
