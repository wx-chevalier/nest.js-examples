import {
  CacheInterceptor,
  CacheModule,
  MiddlewareConsumer,
  Module,
  Req,
  RequestMethod,
} from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule } from 'nest-winston';
import { Connection } from 'typeorm';

import * as entitiesMap from '../entities';
import { ArticleModule } from '../modules/article/article.module';
import { CatsModule } from '../modules/cat/cats.module';
import { NoAuthModule } from '../modules/noauth/noauth.module';
import { ProfileModule } from '../modules/profile/profile.module';
import { TagModule } from '../modules/tag/tag.module';
import { UserModule } from '../modules/user/user.module';
import { isDev } from '../shared/configs/env';
import { loggerConfig } from '../shared/configs/logger';
import { AuthMiddleware } from '../shared/middlewares/auth.middleware';

import { AppController } from './application.controller';

@Module({
  imports: [
    WinstonModule.forRoot({
      ...loggerConfig,
    }),
    CacheModule.register({
      ttl: 5,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'roottoor',
      database: 'test',
      synchronize: false,
      entities: Object.keys(entitiesMap).map(e => entitiesMap[e]),
      logging: isDev,
    }),
    ArticleModule,
    CatsModule,
    NoAuthModule,
    ProfileModule,
    TagModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class ApplicationModule {
  // eslint-disable-next-line @typescript-eslint/member-naming
  constructor(private readonly connection: Connection) {}

  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      // 针对用户的请求加密
      .forRoutes({ path: '/users/*', method: RequestMethod.ALL });
  }
}
