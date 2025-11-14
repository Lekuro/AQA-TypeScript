import { IBreedDto } from './index';

export interface IImageDto {
    breeds: IBreedDto[];
    categories?: CategoryDto[];
    id: string;
    url: string;
    width: number;
    height: number;
}

interface CategoryDto {
    id: number;
    name: string;
}
