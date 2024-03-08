import {
  CreateUserGroup,
  ReadUserGroups,
} from '../../../domain/user-group/usecases';
import { CreateUserGroupInput } from '../inputs/create-user-group.input';
import { UserGroupOutput } from '../outputs';

export interface DbUserGroup extends CreateUserGroup, ReadUserGroups {
  create: (data: CreateUserGroupInput) => Promise<CreateUserGroupInput>;
  readAll: () => Promise<Partial<UserGroupOutput[]>>;
}
