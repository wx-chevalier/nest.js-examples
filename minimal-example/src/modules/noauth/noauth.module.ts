import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserEntity } from '../../entities/user.entity';
import { UserModule } from '../user/user.module';

import { LoginController } from './controller/login.controller';
import { RegisterController } from './controller/register.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), UserModule],
  controllers: [LoginController, RegisterController],
})
export class NoAuthModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {}
}
