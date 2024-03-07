import { Injectable } from '@nestjs/common';

import { AssignGroupModuleService } from '../../../application/group-module/services/assign-group-module.service';
import { UserGroupEntity } from '../../../domain/user-group/entities/user-group.entity';
import { CreateUserGroup } from '../../../domain/user-group/usecases/create-user-group.usecase';
import { DbUserGroupRepository } from '../../../infrastructure/database/access/repositories/user-group/db-user-group.repository';

@Injectable()
export class CreateUserGroupService implements CreateUserGroup {
  constructor(
    private readonly userGroupRepository: DbUserGroupRepository,
    private readonly assignGroupModule: AssignGroupModuleService,
  ) {}

  async create(data: UserGroupEntity): Promise<UserGroupEntity> {
    const result = await this.userGroupRepository.create(data);

    data.modules.forEach(async (module) => {
      await this.assignGroupModule.assign({
        groupId: result.guid,
        moduleId: module,
      });
    });

    return result;
  }
}
