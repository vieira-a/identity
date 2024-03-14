import { Injectable } from '@nestjs/common';

import { PageDto } from '../../../domain/data/pagination/dto';
import {
  UserGroupDto,
  UserGroupFilterDto,
} from '../../../domain/user-group/dtos';
import { ReadUserGroups } from '../../../domain/user-group/usecases';
import { DbUserGroupRepository } from '../../../infrastructure/database/access/repositories/user-group';

@Injectable()
export class ReadUserGroupsService implements ReadUserGroups {
  constructor(private readonly userGroupRepository: DbUserGroupRepository) {}

  async readAll(filter?: UserGroupFilterDto): Promise<PageDto<UserGroupDto>> {
    return await this.userGroupRepository.readAll(filter);
  }
}
