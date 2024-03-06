import { UserGroupEntity } from '../../../domain/user-group/entities/user-group.entity';
import { CreateUserGroup } from '../../../domain/user-group/usecases/create-user-group.usecase';

export interface DbUserGroup extends CreateUserGroup {
  create: (data: UserGroupEntity) => Promise<UserGroupEntity>;
}
