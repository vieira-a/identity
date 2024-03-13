import { UserGroupDto } from 'src/domain/user-group/dtos';

import {
  CreateUserGroup,
  ReadUserGroupById,
  ReadUserGroups,
} from '../../../domain/user-group/usecases';
import { CreateUserGroupInput } from '../inputs';

export interface DbUserGroup
  extends CreateUserGroup,
    ReadUserGroupById,
    ReadUserGroups {
  create: (data: CreateUserGroupInput) => Promise<CreateUserGroupInput>;
  readById: (guid: string) => Promise<UserGroupDto>;
  readAll: () => Promise<UserGroupDto[]>;
}
