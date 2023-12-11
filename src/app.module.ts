import { SharedModule } from 'shared';
import { Module } from '@nestjs/common';


@Module({
    imports: [
        SharedModule
    ],
    controllers: []
})
export class AppModule { }
