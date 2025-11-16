import { IApiService } from '../../services/abstraction/i-api-service';
import { IDeleteDto, IVoteDto, IVoteWithImageDto } from '../../models/the-cat-api/index';

export class TheCatVotesApi {
    public constructor(private readonly apiService: IApiService<Response>) {}

    public async uploadVoteToImage(imageId: string, value: number, subId?: string): Promise<[Response, IVoteDto]> {
        const response = await this.apiService.post('/votes', { image_id: imageId, value: value, sub_id: subId });
        const jsonResponse = await response.json();

        return [response, jsonResponse];
    }

    public async getVoteById(voteId: number): Promise<[Response, IVoteWithImageDto]> {
        const response = await this.apiService.get(`/votes/${voteId}`);
        const jsonResponse = await response.json();

        return [response, jsonResponse];
    }

    public async getVotes(): Promise<[Response, IVoteWithImageDto[]]> {
        const response = await this.apiService.get('/votes');
        const jsonResponse = await response.json();

        return [response, jsonResponse];
    }

    public async deleteVoteById(voteId: number): Promise<[Response, IDeleteDto]> {
        const response = await this.apiService.delete(`/votes/${voteId}`);
        const jsonResponse = await response.json();

        return [response, jsonResponse];
    }
}
