import { Injectable } from '@nestjs/common';

import { UserGroupEntity } from '../../../domain/user-group/entities';
import { ReadUserGroups } from '../../../domain/user-group/usecases';
import { DbUserGroupRepository } from '../../../infrastructure/database/access/repositories/user-group';

@Injectable()
export class ReadUserGroupsService implements ReadUserGroups {
  constructor(private readonly userGroupRepository: DbUserGroupRepository) {}

  async readAll(): Promise<UserGroupEntity[]> {
    return await this.userGroupRepository.readAll();
  }
}
