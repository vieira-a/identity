import { Injectable } from '@nestjs/common';

import { PageDto } from '../../../domain/data/pagination/dto';
import { UserGroupDto } from '../../../domain/user-group/dtos';
import { ReadUserGroups } from '../../../domain/user-group/usecases';
import { DbUserGroupRepository } from '../../../infrastructure/database/access/repositories/user-group';

@Injectable()
export class ReadUserGroupsService implements ReadUserGroups {
  constructor(private readonly userGroupRepository: DbUserGroupRepository) {}

  async readAll(): Promise<PageDto<UserGroupDto>> {
    return await this.userGroupRepository.readAll();
  }
}
