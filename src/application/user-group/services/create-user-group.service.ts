import { Injectable } from '@nestjs/common';

import { UserGroupEntity } from '../../../domain/user-group/entities/user-group.entity';
import { CreateUserGroup } from '../../../domain/user-group/usecases/create-user-group.usecase';
import { DbUserGroupRepository } from '../../../infrastructure/database/access/repositories/user-group/db-user-group.repository';

@Injectable()
export class CreateUserGroupService implements CreateUserGroup {
  constructor(private readonly userGroupRepository: DbUserGroupRepository) {}

  async create(data: UserGroupEntity): Promise<boolean> {
    return await this.userGroupRepository.create(data);
  }
}
