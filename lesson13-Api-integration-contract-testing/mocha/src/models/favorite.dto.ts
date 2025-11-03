import { IImageDto } from './index';

export interface IFavoriteDto {
    id: string;
    user_id: string;
    image_id: string;
    sub_id: string;
    created_at: string;
    image: IImageDto;
}
