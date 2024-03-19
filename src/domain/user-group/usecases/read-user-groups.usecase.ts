import { PageDto } from '../../../domain/data/pagination/dto';
import { UserGroupDto, UserGroupFilterDto } from '../dtos';

export interface ReadUserGroups {
  readAll: (filter?: UserGroupFilterDto) => Promise<PageDto<UserGroupDto>>;
}
