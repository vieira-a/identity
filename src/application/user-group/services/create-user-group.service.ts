import { Injectable } from '@nestjs/common';

import { AssignGroupModuleService } from '../../../application/group-module/services';
import { ReadSystemModuleByIdService } from '../../../application/system-module/services';
import { UserGroupEntity } from '../../../domain/user-group/entities';
import { CreateUserGroup } from '../../../domain/user-group/usecases';
import { DbUserGroupRepository } from '../../../infrastructure/database/access/repositories/user-group';

@Injectable()
export class CreateUserGroupService implements CreateUserGroup {
  constructor(
    private readonly userGroupRepository: DbUserGroupRepository,
    private readonly assignGroupModule: AssignGroupModuleService,
    private readonly readSystemModuleById: ReadSystemModuleByIdService,
  ) {}

  async create(data: UserGroupEntity): Promise<UserGroupEntity> {
    await Promise.all(
      data.modules.map(async (module) => {
        await this.readSystemModuleById.readById(module);
      }),
    );

    const createdGroup = await this.userGroupRepository.create(data);

    await Promise.all(
      data.modules.map(async (module) => {
        await this.assignGroupModule.assign({
          groupId: createdGroup.guid,
          moduleId: module,
        });
      }),
    );

    return createdGroup;
  }
}
