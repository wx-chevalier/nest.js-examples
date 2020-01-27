import { UserEntity } from '../../../entities/user.entity';
import { BaseDO } from '../../../utils/BaseDO';

export class UserRespDto extends BaseDO {
  user: UserEntity;
  token: string;
}
