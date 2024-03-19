import { UserGroupDto } from '../dtos';

export interface ReadUserGroupById {
  readById: (guid: string) => Promise<UserGroupDto>;
}
