import path from 'path';
import fs from 'fs';
import { ConfigDto } from '../models/config.dto';

export class ConfigService {
    public get config(): ConfigDto {
        return this._config ?? this.initConfig();
    }
    private _config: ConfigDto | undefined;

    public constructor() {
        this.initConfig();
    }

    private initConfig(): ConfigDto {
        this.readFileConfig();
        return this._config as ConfigDto;
    }

    private readFileConfig(): void {
        const filePath = path.resolve(__dirname, '../config/playwright-site.config.json');
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        this._config = { ...this._config, ...JSON.parse(fileContent) } as ConfigDto;
    }
}
