export interface ConfigDto {
    uiConfig: UiConfigDto;
    apiConfig: ApiConfigDto;
}

export interface UiConfigDto {
    playwrightBaseUrl: string;
}

export interface ApiConfigDto {
    playwrightApiUrl: string;
}
