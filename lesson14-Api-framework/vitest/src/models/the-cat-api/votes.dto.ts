export interface IVoteDto {
    message: string;
    id: number;
    image_id: string;
    sub_id: string;
    value: number;
    country_code: string;
}

export interface IVoteWithImageDto {
    id: number;
    user_id: string;
    image_id: string;
    sub_id: string;
    created_at: string;
    value: number;
    country_code: string;
    image: {
        id: string;
        url: string;
    };
}

export interface IDeleteDto {
    message: string;
}
