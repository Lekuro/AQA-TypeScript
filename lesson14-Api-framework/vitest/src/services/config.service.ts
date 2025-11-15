import * as dotenv from 'dotenv-safe';
import { ApiConfigDto, AuthConfigDto, ConfigDto } from '../models/config/api.config';

export class ConfigService {
    // private _token: string;

    public constructor() {
        dotenv.config();
    }

    public getConfig(): ConfigDto {
        const authConfig = this.getAuthConfig();
        const apiConfig = this.getApiConfig();

        return {
            auth: authConfig,
            api: apiConfig
        };
    }

    private getAuthConfig(): AuthConfigDto {
        return {
            theCatApi: {
                apiKey: process.env.CAT_API_KEY || ''
            }
        };
    }

    private getApiConfig(): ApiConfigDto {
        return {
            theCatApi: {
                baseUrl: 'https://api.thecatapi.com/v1'
            }
        };
    }
}
