import { IImageDto } from './index';

export interface IVoteDto {
    id: string;
    user_id: string;
    image_id: string;
    sub_id: string;
    created_at: string;
    value: number;
    country_code: string | null;
    image: IImageDto;
}
