// import { APIResponse } from 'playwright';
import { TheCatImageApi, TheCatVotesApi } from './apis/the-cat-api/index';
import { ConfigService } from './services/config.service';
import { FetchApiService } from './services/fetch-api.service';
import { IApiService } from './services/abstraction/i-api-service';
// import { PlaywrightApiService } from './services/playwright-api.service';
// import { APIResponse } from 'playwright';

export class ApiWorld {
    public age?: number;
    public testContext: Record<string, unknown> = {};

    public get theCatImagesApiService(): TheCatImageApi {
        if (!this._imagesApi) {
            this._imagesApi = new TheCatImageApi(this._theCatFetchApiService);
        }
        return this._imagesApi;
    }

    public catsImageApi: TheCatImageApi;
    public catsVotesApi: TheCatVotesApi;

    public get configService(): ConfigService {
        return this._configService;
    }

    private _imagesApi?: TheCatImageApi;
    private _theCatFetchApiService: IApiService<Response>;
    private _configService: ConfigService;

    public constructor() {
        this._configService = new ConfigService();
        const config = this._configService.getConfig();

        this._theCatFetchApiService = new FetchApiService(config.api.theCatApi.baseUrl, { apiKey: config.auth?.theCatApi?.apiKey });

        this.catsImageApi = new TheCatImageApi(this._theCatFetchApiService);
        this.catsVotesApi = new TheCatVotesApi(this._theCatFetchApiService);
    }
}
