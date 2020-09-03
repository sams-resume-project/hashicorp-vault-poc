// NestJs
import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
// rxjs
import { Observable, of } from 'rxjs';

import { VaultResponse } from '../models/vault-response.model';

// json imports
import * as mockSecrets from '../assets/mocks/secrets.json';


@ApiTags('Secrets and stuff')
@ApiOkResponse({ type: VaultResponse })
@Controller('secrets')
export class SecretsController {
    @Get()
    public secrets(): Observable<VaultResponse> {
        return of(mockSecrets)
    }
}
