// NestJs
import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
// rxjs
import { Observable, of } from 'rxjs';

import { VaultResponse } from '../models/vault-response.model';

// json imports
import * as mockSecrets from '../assets/mocks/secrets.json';
import { VaultConfigInterface } from 'src/config/vault-config.model';
import { ConfigService } from 'src/config/config.service';


@ApiTags('Secrets and stuff')
@ApiOkResponse({ type: VaultResponse })
@Controller('secrets')
export class SecretsController {
    constructor(private _config: ConfigService) { }

    @Get()
    public secrets(): Observable<VaultResponse> {
        return of(mockSecrets)
    }

    @Get('/vault-config')
    public getVaultConfig(): VaultConfigInterface {
        return this._config.getVaultConfig();
    }
}
