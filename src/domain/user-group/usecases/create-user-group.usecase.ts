import { UserGroupEntity } from '../entities/user-group.entity';

export interface CreateUserGroup {
  create: (data: UserGroupEntity) => Promise<UserGroupEntity>;
}
