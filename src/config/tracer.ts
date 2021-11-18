import path from 'path';
import tracer from 'dd-trace';
import { createLogger, transports, format } from 'winston';

export const Tracer = tracer.init({
    logInjection: true,
});

export const Logger = createLogger({
    level: 'info',
    exitOnError: false,
    format: format.json(),
    transports: [
        new transports.File({ filename: path.join(__dirname, '..', '..', 'logs', 'ddlog.log') })
    ]
});
