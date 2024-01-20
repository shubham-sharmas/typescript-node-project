import fs from 'fs';
import { join, resolve } from 'path';
import { default as Pino } from 'pino';

const logDirectory = join(resolve(`${__dirname}/../../`), 'logs');

if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

const logFile = `${logDirectory}/app.log`;
const transport = Pino.transport({
  targets: [
    {
      level: 'info',
      target: 'pino/file',
      options: {
        destination: logFile,
      },
    },
    ...(process.env.NODE_ENV !== 'production'
      ? [
          {
            ...{
              level: 'info',
              target: 'pino-pretty',
              options: {
                colorizeObjects: true, //--colorizeObjects
                messageFormat: true, // --messageFormat
                timestampKey: 'time', // --timestampKey
                // include: 'level,time', // --include
                translateTime: `UTC:yyyy-mm-dd'T'HH:MM:ss'Z'`,
              },
            },
          },
        ]
      : []),
  ],
});

const pinoLogger = Pino(transport);

/* for (let index = 0; index < 100000; index++) {
  pinoLogger.info(`Log File >>> ${logFile} >>> ${index}`);
} */

export default pinoLogger;
