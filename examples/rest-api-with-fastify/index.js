import Romcal from 'romcal';
import fs from 'fs';
import path from 'path';
import Fastify from 'fastify';
import { france_fr } from '@romcal/calendar.france';

const fastify = new Fastify();

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
 * Example with the General Roman calendar, all its defined locales, and an optional year.
 */

const manageGeneralRomanRoute = async (request, reply) => {
  const locale = request.params['locale'].toLowerCase();
  const localeIndex = Romcal.LOCALE_KEYS.indexOf(locale);

  // Check if the provided locale exists in the `general_roman` calendar. If no, return a 404 error.
  if (localeIndex === -1) {
    return reply.status(404).send("404 - The provided locale doesn't exists.");
  }

  // Load dynamically the localized General Roman Calendar
  const module = await import(`@romcal/calendar.general-roman/esm/${locale}.mjs`);
  const localeVarName = Romcal.LOCALE_VAR_NAMES[localeIndex];
  const localizedCalendar = module[`generalRoman_${localeVarName}`];

  // Initialize a romcal object with the General Roman Calendar data.
  const romcalGeneralRoman = new Romcal({ localizedCalendar });

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
