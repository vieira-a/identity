import { UserGroupEntity } from '../entities';

export interface CreateUserGroup {
  create: (data: UserGroupEntity) => Promise<UserGroupEntity>;
}
