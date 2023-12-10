import { Injectable } from "@nestjs/common";
import { ConfigService as BaseConfigService } from "@nestjs/config";


@Injectable()
export class ConfigService extends BaseConfigService {
    get<T = any>(key: string, defaultValue: any = null): T {
        return super.get(key) ?? defaultValue;
    }
}