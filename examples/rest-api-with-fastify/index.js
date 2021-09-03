const Romcal = require('romcal-next').default;
const general_roman = require('@romcal/calendar-general-roman').default;
const { france_fr } = require('@romcal/calendar-france');
const fs = require('fs');
const path = require('path');
const fastify = require('fastify')();

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
fastify.get('/', async (request, reply) => {
  const stream = fs.createReadStream(path.resolve('./public/index.html'));
  reply.type('text/html').send(stream);
});

/**
 * Example with the General Roman calendar, all its possible locales, and an optional year.
 */

const manageGeneralRomanRoute = async (request, reply) => {
  // Get the locale parameter and transform its name from kebab-case to camelCase.
  // E.g. `en-ie` => `enIe`
  const locale = request.params['locale']
    .toLowerCase()
    .replace(/(-\w)/g, (c) => c[1].toUpperCase());

  // Check if the provided locale exists in the `general_roman` calendar. If no, return a 404 error.
  if (!Object.prototype.hasOwnProperty.call(general_roman, locale)) {
    return reply.status(404).send("404 - The provided locale doesn't exists.");
  }

  // Initialize a romcal object with the General Roman Calendar data.
  const romcalGeneralRoman = new Romcal({ localizedCalendar: general_roman[locale] });

  // Generate a liturgical calendar with the provided locale and year.
  const year = getYear(parseInt(request.params['year']));
  const data = await romcalGeneralRoman.generateCalendar(year);

  // Finally, send the computed data.
  reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send(JSON.stringify(data));
};

fastify.get('/romcal/general-roman/:locale', manageGeneralRomanRoute);
fastify.get('/romcal/general-roman/:locale/:year', manageGeneralRomanRoute);

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

const manageFranceFrRoute = async (request, reply) => {
  const year = getYear(parseInt(request.params['year']));
  const data = await romcalFranceFr.generateCalendar(year);
  reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send(JSON.stringify(data));
};

fastify.get('/romcal/france/fr', manageFranceFrRoute);
fastify.get('/romcal/france/fr/:year', manageFranceFrRoute);

/**
 * Run the server.
 * @returns {Promise<void>}
 */
const start = async () => {
  try {
    await fastify.listen(3000);
    console.log('Romcal server listening on port 3000');
    console.log('url: http://127.0.0.1:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
