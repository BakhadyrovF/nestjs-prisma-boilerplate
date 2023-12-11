import { Injectable } from "@nestjs/common";
import pino from "pino";

@Injectable()
export class LoggerService {

    constructor(private readonly logger: pino.Logger) { }

    log(message: unknown) {
        this.logger.info(message);
    }

    error(message: unknown, stack: string | null = null) {
        this.logger.error({ message, stack });
    }
}