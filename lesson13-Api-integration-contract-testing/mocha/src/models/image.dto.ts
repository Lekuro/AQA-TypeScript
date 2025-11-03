import { IBreedDto } from './index';

export interface IImageDto {
    id: string;
    url: string;
    width: number;
    height: number;
    breeds: IBreedDto[];
}
