import { Global, Module } from "@nestjs/common";
import { LoggerModule } from "shared/modules/logger.module";
import { ConfigService } from "shared/services/config.service";
import { DatabaseService } from "shared/services/database.service";


@Global()
@Module({
    providers: [
        DatabaseService,
        ConfigService
    ],
    imports: [
        LoggerModule
    ],
    exports: [
        DatabaseService,
        ConfigService,
        LoggerModule
    ]
})
export class SharedModule { }