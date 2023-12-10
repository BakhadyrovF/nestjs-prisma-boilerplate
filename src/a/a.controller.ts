import { Controller, Get, Inject, Logger, Param, Query } from '@nestjs/common';
import pino from 'pino';
import { LoggerService } from 'shared/services/logger.service';

@Controller('a')
export class AController {

    constructor(private readonly logger: LoggerService) { }

    @Get('/test')
    test() {
        this.logger.log({ message: 'Something went wrong...' });
        return 'done';
    }
}
