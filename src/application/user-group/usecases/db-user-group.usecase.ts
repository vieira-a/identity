import { UserGroupDto } from 'src/domain/user-group/dtos';

import {
  CreateUserGroup,
  ReadUserGroups,
} from '../../../domain/user-group/usecases';
import { CreateUserGroupInput } from '../inputs/create-user-group.input';

export interface DbUserGroup extends CreateUserGroup, ReadUserGroups {
  create: (data: CreateUserGroupInput) => Promise<CreateUserGroupInput>;
  readAll: () => Promise<UserGroupDto[]>;
}
