import { Global, Module } from "@nestjs/common";
import { ConfigService } from "shared/services/config.service";
import { DatabaseService } from "shared/services/database.service";


@Global()
@Module({
    providers: [
        DatabaseService,
        ConfigService
    ],
    exports: [
        DatabaseService,
        ConfigService
    ]
})
export class SharedModule { }