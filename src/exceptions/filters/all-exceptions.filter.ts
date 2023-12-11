import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { LoggerService } from "shared";


@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    constructor(private readonly loggerService: LoggerService) { }

    catch(exception: unknown, host: ArgumentsHost): void {
        const context = host.switchToHttp();
        const request = context.getRequest();
        const response = context.getResponse();
        const errorMessage = exception instanceof Error ? exception.message : 'Internal server error';
        const errorStack = exception instanceof Error ? exception.stack : '';

        this.loggerService.error(errorMessage, errorStack);

        response
            .json({
                statusCode: 500,
                timestamp: new Date().toISOString(),
                path: request.url,
                message: errorMessage
            });
    }
}