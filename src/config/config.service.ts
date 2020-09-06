import { Injectable, Global } from '@nestjs/common';
import { VaultConfigInterface } from './vault-config.model';


@Injectable()
export class ConfigService {
  constructor(private _vaultConfig: VaultConfigInterface) { }

  /**
   * @method getVaultConfig
   * @returns vault configuration
   */
  public getVaultConfig(): VaultConfigInterface {
    return this._vaultConfig;
  }
}
