export interface ConfigDto {
    auth: AuthConfigDto;
    api: ApiConfigDto;
}

export interface AuthConfigDto {
    theDogsApi?: TheDogsApiAuthConfigDto;
}

export interface ApiConfigDto {
    theDogsApi: TheDogsApiConfigDto;
}

export interface TheDogsApiAuthConfigDto {
    apiKey?: string;
}

export interface TheDogsApiConfigDto {
    baseUrl: string;
}
