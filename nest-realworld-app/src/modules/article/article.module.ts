import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ArticleEntity } from '../../entities/article.entity';
import { Comment } from '../../entities/comment.entity';
import { FollowsEntity } from '../../entities/follows.entity';
import { UserEntity } from '../../entities/user.entity';
import { UserModule } from '../user/user.module';

import { ArticleController } from './controller/article.controller';
import { ArticleService } from './service/article.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ArticleEntity,
      Comment,
      UserEntity,
      FollowsEntity,
    ]),
    UserModule,
  ],
  providers: [ArticleService],
  controllers: [ArticleController],
})
export class ArticleModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {}
}
