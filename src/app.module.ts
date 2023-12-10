import { SharedModule } from 'shared';
import { AController } from './a/a.controller';
import { Module } from '@nestjs/common';



@Module({
    imports: [
        SharedModule,

    ],
    controllers: [AController]
})
export class AppModule { }
