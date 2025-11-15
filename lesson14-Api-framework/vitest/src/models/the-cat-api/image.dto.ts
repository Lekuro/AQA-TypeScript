import { IBreedDto } from './index';

export interface IImageDto {
    breeds: IBreedDto[];
    categories?: ICategoryDto[];
    id: string;
    url: string;
    width: number;
    height: number;
    sub_id?: string;
}

export interface IImageAnalysisDto {
    labels: ILabelDto[];
    moderation_labels: ILabelDto[];
    vendor: string;
    image_id: string;
    created_at: string;
}

export interface IUploadedImageDto {
    id: string;
    url: string;
    sub_id?: string;
    width: number;
    height: number;
    original_filename: string;
    pending: number;
    approved: number;
}

export interface IUploadedBreedDto {
    id: string;
}

interface ICategoryDto {
    id: number;
    name: string;
}

interface ILabelDto {
    Name: string;
    Confidence: number;
}
