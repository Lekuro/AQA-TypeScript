import { IImageDto } from './models/index';

export class CatService {
    private readonly apiKey: string = 'live_ITUwxKsqOsSw4j3mlY0zzdlr1E2orBg2rG5Xbpmij4bdXIvLsMtZXTXzvK21LS3C';
    public constructor(private baseUrl: string) {}

    public async getCatImages(): Promise<IImageDto[]> {
        const response = await fetch(`${this.baseUrl}/images/search`, { headers: { 'x-api-key': this.apiKey } });
        const responseJson = (await response.json()) as IImageDto[];
        return responseJson;
    }
}
