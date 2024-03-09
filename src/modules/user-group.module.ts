import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  CreateUserGroupController,
  ReadUserGroupsController,
} from '../api/controllers/user-group';
import { UserGroupPresenter } from '../api/presenters/user-group';
import { AssignGroupModuleService } from '../application/group-module/services';
import { ReadSystemModuleByIdService } from '../application/system-module/services';
import {
  CreateUserGroupService,
  ReadUserGroupsService,
} from '../application/user-group/services';
import { GroupModuleModel } from '../infrastructure/database/access/models/group-module';
import { SystemModuleModel } from '../infrastructure/database/access/models/system-module';
import { UserGroupModel } from '../infrastructure/database/access/models/user-group';
import { DbAssignGroupModuleRepository } from '../infrastructure/database/access/repositories/group-module';
import { DbSystemModuleRepository } from '../infrastructure/database/access/repositories/system-module';
import { DbUserGroupRepository } from '../infrastructure/database/access/repositories/user-group';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserGroupModel,
      GroupModuleModel,
      SystemModuleModel,
    ]),
  ],
  providers: [
    CreateUserGroupService,
    ReadUserGroupsService,
    DbUserGroupRepository,
    AssignGroupModuleService,
    DbAssignGroupModuleRepository,
    DbSystemModuleRepository,
    ReadSystemModuleByIdService,
    UserGroupPresenter,
  ],
  controllers: [CreateUserGroupController, ReadUserGroupsController],
})
export class UserGroupModule {}
