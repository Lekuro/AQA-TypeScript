export interface ConfigDto {
    auth: AuthConfigDto;
    api: ApiConfigDto;
}

export interface AuthConfigDto {
    theCatApi?: TheCatApiAuthConfigDto;
}

export interface ApiConfigDto {
    theCatApi: TheCatApiConfigDto;
}

export interface TheCatApiAuthConfigDto {
    apiKey?: string;
}

export interface TheCatApiConfigDto {
    baseUrl: string;
}
