import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CreateUserGroupController } from '../api/controllers/user-group/create-user-group.controller';
import { UserGroupPresenter } from '../api/presenters/user-group/user-group.presenter';
import { CreateUserGroupService } from '../application/user-group/services/create-user-group.service';
import { UserGroupModel } from '../infrastructure/database/access/models/user-group/user-group.model';
import { DbUserGroupRepository } from '../infrastructure/database/access/repositories/user-group/db-user-group.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserGroupModel])],
  providers: [
    CreateUserGroupService,
    DbUserGroupRepository,
    UserGroupPresenter,
  ],
  controllers: [CreateUserGroupController],
})
export class UserGroupModule {}
