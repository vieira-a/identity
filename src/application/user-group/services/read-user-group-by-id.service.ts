import { Injectable } from '@nestjs/common';

import { UserGroupDto } from '../../../domain/user-group/dtos';
import { ReadUserGroupById } from '../../../domain/user-group/usecases';
import { DbUserGroupRepository } from '../../../infrastructure/database/access/repositories/user-group';

@Injectable()
export class ReadUserGroupByIdService implements ReadUserGroupById {
  constructor(private readonly userGroupRepository: DbUserGroupRepository) {}

  async readById(guid: string): Promise<UserGroupDto> {
    return await this.userGroupRepository.readById(guid);
  }
}
