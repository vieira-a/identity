import { UserGroupEntity } from '../entities/user-group.entity';

export interface ReadUserGroups {
  readAll: () => Promise<Partial<UserGroupEntity[]>>;
}
