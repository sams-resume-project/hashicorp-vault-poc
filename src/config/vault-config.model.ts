import { ApiProperty } from '@nestjs/swagger';

export interface VaultConfigInterface {
  vaultScheme: string;
  vaultHost: string;
  vaultPath: string;
}

export class VaultConfig implements VaultConfigInterface {
  public vaultScheme: string;
  public vaultHost: string;
  public vaultPath: string;
}