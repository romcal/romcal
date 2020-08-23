import pino, { Logger, LoggerOptions } from 'pino';

export type LoggerOption = { verbose: boolean; prettyPrint: boolean };

const prettyPrint = {
  enabled: false,
  translateTime: 'yyyy-mm-dd HH:MM:ss',
  ignore: 'pid,hostname',
};

const options: LoggerOptions = {
  enabled: false,
  prettyPrint,
};

let logger: Logger = pino(options);

export { logger };

export const setLoggerOptions = (config: LoggerOption) => {
  options.enabled = config.verbose;
  options.prettyPrint = config.prettyPrint ? prettyPrint : false;
  logger = pino(options);
};
