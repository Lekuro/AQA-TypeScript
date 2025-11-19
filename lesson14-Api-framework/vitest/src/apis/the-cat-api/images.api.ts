import { IApiService } from '../../services/abstraction/i-api-service';
import { IImageDto, IBreedDto, IImageAnalysisDto, IUploadedImageDto, IUploadedBreedDto } from '../../models/the-cat-api/index';
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
        const jsonResponse = await response.json();

        return [response, jsonResponse];
    }

    public async getAnalysisImageById(imageId: string): Promise<[Response, IImageAnalysisDto[]]> {
        const response = await this.apiService.get(`/images/${imageId}/analysis`);
        const jsonResponse = await response.json();

        return [response, jsonResponse];
    }

    export interface UploadImageParams {
        imagePath: string,
        imageFileName: string,
        subId?: string,
        breeds?: string[]
    }

    public async uploadImage(params: UploadImageParams ): Promise<[Response, IUploadedImageDto]> {
        const formData = new FormData();
        const file = fs.readFileSync(imagePath);
        // node 24.x
        const binaryFile = new File([new Uint8Array(file)], imageFileName, { type: 'image/jpeg' });

        // node 22.x
        // const binaryFile = new File([file], 'the_dog_1.jpg', { type: 'image/jpeg' });

        formData.append('file', binaryFile);
        subId && formData.append('sub_id', subId);
        breeds && formData.append('breeds', breeds.join(','));

        const response = await this.apiService.postForm('/images/upload', formData);
        // const response2 = await fetch (`${this.baseUrl}/images/upload`, { method: 'POST', body: formData });

        const jsonResponse = await response.json();

        return [response, jsonResponse];
    }

    public async getUploadedImages(): Promise<[Response, IUploadedImageDto[]]> {
        const response = await this.apiService.get('/images');
        const jsonResponse = await response.json();

        return [response, jsonResponse];
    }

    public async getUploadedImageById(imageId: string): Promise<[Response, IImageDto]> {
        const response = await this.apiService.get('/images/' + imageId);
        let jsonResponse;
        try {
            jsonResponse = await response.json();
        } catch (error) {
            console.log(`Error loading image ${imageId}: ${error}`);
            jsonResponse = { id: imageId };
        }

        return [response, jsonResponse];
    }

    public async uploadBreedToUploadedImage(imageId: string, breedId: string): Promise<[Response, IUploadedBreedDto]> {
        const response = await this.apiService.post(`/images/${imageId}/breeds`, { breed_id: breedId });
        const jsonResponse = await response.json();

        return [response, jsonResponse];
    }

    public async getUploadedBreeds(imageId: string): Promise<[Response, IBreedDto[]]> {
        const response = await this.apiService.get(`/images/${imageId}/breeds`);
        const jsonResponse = await response.json();

        return [response, jsonResponse];
    }

    public async deleteUploadedBreed(imageId: string, breedId: string): Promise<Response> {
        const response = await this.apiService.delete(`/images/${imageId}/breeds/${breedId}`);

        return response;
    }

    public async deleteUploadedImage(imageId: string): Promise<Response> {
        const response = await this.apiService.delete(`/images/${imageId}`);

        return response;
    }
}
