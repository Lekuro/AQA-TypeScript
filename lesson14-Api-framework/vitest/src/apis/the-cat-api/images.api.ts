import { IApiService } from '../../services/abstraction/i-api-service';
import { IImageDto } from '../../models/the-cat-api/image.dto';
import * as fs from 'fs';

export class TheCatImageApi {
    public constructor(private readonly apiService: IApiService<Response>) {}

    public async getRandomImage(): Promise<[Response, IImageDto[]]> {
        const response = await this.apiService.get('/images/search');
        const jsonResponse = await response.json();

        return [response, jsonResponse];
    }

    public async getImageById(imageId: string): Promise<[Response, IImageDto]> {
        const response = await this.apiService.get(`/images/${imageId}`);
        const image = await response.json();

        return [response, image];
    }

    public async uploadImage(imagePath: string, subId?: string, breeds?: string[]): Promise<[Response, IImageDto]> {
        const formData = new FormData();
        const file = fs.readFileSync(imagePath);
        // node 24.x
        const binaryFile = new File([new Uint8Array(file)], 'pexels-cat.jpg', { type: 'image/jpeg' });

        // node 22.x
        // const binaryFile = new File([file], 'the_dog_1.jpg', { type: 'image/jpeg' });

        formData.append('file', binaryFile);
        subId && formData.append('sub_id', subId);
        breeds && formData.append('breeds', breeds.join(','));
        console.log(breeds);

        const response = await this.apiService.postForm('/images/upload', formData);
        // const response2 = await fetch (`${this.baseUrl}/images/upload`, { method: 'POST', body: formData });

        const imageResponse = await response.json();

        return [response, imageResponse];
    }

    public async getMyImages(): Promise<[Response, IImageDto[]]> {
        const response = await this.apiService.get('/images');
        const images = await response.json();

        return [response, images];
    }
}
