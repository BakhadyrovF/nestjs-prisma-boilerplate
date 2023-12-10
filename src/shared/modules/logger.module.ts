import { Module } from "@nestjs/common";
import { mkdirSync } from "fs";
import pino from "pino";
import { LoggerService } from "shared/services/logger.service";


@Module({
    providers: [
        {
            provide: LoggerService,
            useFactory: () => {
                try {
                    mkdirSync('logs');
                } catch (error) { }

                return new LoggerService(
                    pino({
                        level: 'info'
                    }, pino.destination({
                        dest: 'logs/app.log'
                    }))
                );
            }
        }
    ],
    exports: [LoggerService]
})
export class LoggerModule { }