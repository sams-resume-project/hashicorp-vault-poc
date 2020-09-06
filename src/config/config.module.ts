import { Module, DynamicModule, Global } from '@nestjs/common';
import { ConfigService } from './config.service';

import * as VAULT_CONFIG from '../assets/config/vault-config.json';

@Global()
@Module({ 
})
export class ConfigModule {
  public static forRoot(): DynamicModule {
    return {
      module: ConfigModule,
      exports: [ConfigService],
      providers: [
        {
          provide: ConfigService,
          useFactory: () => {
            return new ConfigService({
              vaultScheme: VAULT_CONFIG.VAULT_SCHEME,
              vaultHost: VAULT_CONFIG.VAULT_HOST,
              vaultPath: VAULT_CONFIG.VAULT_PATH,
            });
          },
        },
      ],
    };
  }
}
