import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FollowsEntity } from '../../entities/follows.entity';
import { UserEntity } from '../../entities/user.entity';
import { AuthMiddleware } from '../../shared/middlewares/auth.middleware';
import { UserModule } from '../user/user.module';

import { ProfileController } from './controller/profile.controller';
import { ProfileService } from './service/profile.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, FollowsEntity]), UserModule],
  providers: [ProfileService],
  controllers: [ProfileController],
  exports: [],
})
export class ProfileModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {}
}
