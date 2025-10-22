export interface ApiUserPostTodosDto {
    user: ApiUsersDto;
    posts: ApiPostsDto[];
    todos: ApiTodosDto[];
}

export interface ApiUserWithPostsAndTodosDto {
    posts?: ApiPostsDto[];
    todos?: ApiTodosDto[];
}

export interface ApiUserWithShortPostAndTodosDto {
    id: number;
    username: string;
    posts: string[];
    todos: string[];
}

export interface ApiUsersDto {
    id: number;
    name: string;
    username: string;
    email: string;
    address: ApiUserAddressDto;
    phone: string;
    website: string;
    company: ApiUserCompanyDto;
}

export interface ApiUserAddressDto {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: ApiUserAddressGeoDto;
}

interface ApiUserAddressGeoDto {
    lat: string;
    lng: string;
}

export interface ApiUserCompanyDto {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface ApiPostsDto {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface ApiTodosDto {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
