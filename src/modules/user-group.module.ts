import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CreateUserGroupController } from '../api/controllers/user-group/create-user-group.controller';
import { UserGroupPresenter } from '../api/presenters/user-group/user-group.presenter';
import { AssignGroupModuleService } from '../application/group-module/services/assign-group-module.service';
import { ReadSystemModuleByIdService } from '../application/system-module/services/read-system-module-by-id.service';
import { CreateUserGroupService } from '../application/user-group/services/create-user-group.service';
import { GroupModuleModel } from '../infrastructure/database/access/models/group-module/group-module.model';
import { SystemModuleModel } from '../infrastructure/database/access/models/system-module/system-module.model';
import { UserGroupModel } from '../infrastructure/database/access/models/user-group/user-group.model';
import { DbAssignGroupModuleRepository } from '../infrastructure/database/access/repositories/group-module/db-group-module.repository';
import { DbSystemModuleRepository } from '../infrastructure/database/access/repositories/system-module/db-system-module.repository';
import { DbUserGroupRepository } from '../infrastructure/database/access/repositories/user-group/db-user-group.repository';

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
    DbUserGroupRepository,
    AssignGroupModuleService,
    DbAssignGroupModuleRepository,
    DbSystemModuleRepository,
    ReadSystemModuleByIdService,
    UserGroupPresenter,
  ],
  controllers: [CreateUserGroupController],
})
export class UserGroupModule {}
