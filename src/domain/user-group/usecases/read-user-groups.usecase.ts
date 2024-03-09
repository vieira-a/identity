import { UserGroupDto } from '../dtos';

export interface ReadUserGroups {
  readAll: () => Promise<UserGroupDto[]>;
}
