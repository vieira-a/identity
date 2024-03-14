import { PageDto } from '../../../domain/data/pagination/dto';
import { UserGroupDto } from '../dtos';

export interface ReadUserGroups {
  readAll: () => Promise<PageDto<UserGroupDto>>;
}
