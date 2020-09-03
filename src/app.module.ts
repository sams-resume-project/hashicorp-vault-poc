import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SecretsController } from './secrets/secrets.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    SecretsController,
  ],
  providers: [AppService],
})
export class AppModule { }
