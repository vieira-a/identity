import { CreateUserGroup } from '../../../domain/user-group/usecases/create-user-group.usecase';
import { CreateUserGroupInput } from '../inputs/create-user-group.input';

export interface DbUserGroup extends CreateUserGroup {
  create: (data: CreateUserGroupInput) => Promise<CreateUserGroupInput>;
}
