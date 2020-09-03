// NestJs
import { NestFactory } from '@nestjs/core';

import * as compression from 'compression';

import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// TODO:  move to separate file
const API_PREFIX: string = 'api';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // global config and middleware injection
  app.setGlobalPrefix(API_PREFIX);
  app.use(compression());

  // swagger setup
  const options = new DocumentBuilder()
    .setTitle('Sam\'s resume builder, Hashicorp Vault POC')
    .setVersion('0.1.0')
    .addServer('http://')
    .addServer('https://')

    // oauth/authentication setup
    // header/apikey
    // .addBearerAuth({ type: 'apiKey', name: 'sres-user-id', in: 'header'})

    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(`${API_PREFIX}/swagger-ui`, app, document);

  await app.listen(3000);
}

bootstrap();
