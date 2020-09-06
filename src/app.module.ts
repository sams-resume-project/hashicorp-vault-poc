import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SecretsController } from './secrets/secrets.controller';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [
    AppController,
    SecretsController,
  ],
  providers: [
    AppService,
  ],
})
export class AppModule { }
