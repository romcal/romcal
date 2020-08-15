import pino from 'pino';

const logger = pino({
  prettifier: true,
  prettyPrint: {
    translateTime: 'yyyy-mm-dd HH:MM:ss',
    ignore: 'pid,hostname',
  },
});

export { logger };
