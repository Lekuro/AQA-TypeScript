import { IApiService } from '../../services/abstraction/i-api-service';
import { IDeleteDto, IFavoriteDto, IFavoriteWithImageDto } from '../../models/the-cat-api/index';

export class TheCatFavoritesApi {
    public constructor(private readonly apiService: IApiService<Response>) {}

    public async uploadFavoriteToImage(imageId: string, subId?: string): Promise<[Response, IFavoriteDto]> {
        const response = await this.apiService.post('/favourites', { image_id: imageId, sub_id: subId });
        const jsonResponse = await response.json();

        return [response, jsonResponse];
    }

    public async getFavoriteById(favoriteId: number): Promise<[Response, IFavoriteWithImageDto]> {
        const response = await this.apiService.get(`/favourites/${favoriteId}`);
        let jsonResponse;
        try {
            jsonResponse = await response.json();
        } catch (error) {
            console.log(`Error loading favorite ${favoriteId}: ${error}`);
            jsonResponse = { id: favoriteId };
        }

        return [response, jsonResponse];
    }

    public async getFavorites(): Promise<[Response, IFavoriteWithImageDto[]]> {
        const response = await this.apiService.get('/favourites');
        const jsonResponse = await response.json();

        return [response, jsonResponse];
    }

    public async deleteFavoriteById(favoriteId: number): Promise<[Response, IDeleteDto]> {
        const response = await this.apiService.delete(`/favourites/${favoriteId}`);
        const jsonResponse = await response.json();

        return [response, jsonResponse];
    }
}
