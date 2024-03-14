import { PageDto } from '../../../domain/data/pagination/dto';
import { UserGroupDto } from '../../../domain/user-group/dtos';
import {
  CreateUserGroup,
  ReadUserGroupById,
  ReadUserGroups,
} from '../../../domain/user-group/usecases';
import { CreateUserGroupInput } from '../inputs';
import { ReadUserGroupInput } from '../inputs/read-user-group-filter.input';

export interface DbUserGroup
  extends CreateUserGroup,
    ReadUserGroupById,
    ReadUserGroups {
  create: (data: CreateUserGroupInput) => Promise<CreateUserGroupInput>;
  readById: (guid: string) => Promise<UserGroupDto>;
  readAll: (filter?: ReadUserGroupInput) => Promise<PageDto<UserGroupDto>>;
}
