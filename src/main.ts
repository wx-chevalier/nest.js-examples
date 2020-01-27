import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import csurf from 'csurf';
import helmet from 'helmet';

import { ApplicationModule } from './application/application.module';

async function bootstrap() {
  const appOptions = { cors: true };

  const app = await NestFactory.create(ApplicationModule, appOptions);
  app.setGlobalPrefix('api');
  app.use(helmet());
  app.enableCors();
  // app.use(csurf());

  const options = new DocumentBuilder()
    .setTitle('NestJS Realworld Example App')
    .setDescription('The Realworld API description')
    .setVersion('1.0')
    .setBasePath('api')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document);

  await app.listen(7001);
}

bootstrap();
