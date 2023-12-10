import { NestFactory } from '@nestjs/core';
import { AppModule } from 'app.module';
import { UnprocessableEntityException, ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { configDotenv } from 'dotenv';
import { ConfigService } from 'shared/services/config.service';


async function bootstrap() {
    configDotenv();
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);

    app.enableCors({
        origin: ['http://localhost:3000'],
        methods: '*'
    });
    app.useGlobalPipes(new ValidationPipe({
        whitelist: true,
        stopAtFirstError: true,
        disableErrorMessages: configService.get<string>('APP_ENV', 'production') === 'production',
        errorHttpStatusCode: 422,
        exceptionFactory: (errors: ValidationError[]) => {
            return new UnprocessableEntityException({
                message: 'Validation failed.',
                error: Object.values(errors[0].constraints ?? [])[0]
            });
        }
    }));
    app.setGlobalPrefix('api/v1');
    await app.listen(configService.get<number>('APP_PORT', 9000));
}
bootstrap();


