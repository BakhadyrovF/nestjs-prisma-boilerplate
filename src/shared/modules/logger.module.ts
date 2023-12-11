import { Module } from "@nestjs/common";
import { existsSync, mkdirSync } from "fs";
import pino from "pino";
import { LoggerService } from "shared/services/logger.service";

const LOGS_DIRECTORY = 'logs';
const LOGS_DESTINATION = `${LOGS_DIRECTORY}/app.log`;
@Module({
    providers: [
        {
            provide: LoggerService,
            useFactory: () => {
                if (!existsSync(LOGS_DIRECTORY)) {
                    mkdirSync('logs');
                }

                return new LoggerService(
                    pino({}, pino.destination({
                        dest: LOGS_DESTINATION,
                    }))
                );
            }
        }
    ],
    exports: [LoggerService]
})
export class LoggerModule { }