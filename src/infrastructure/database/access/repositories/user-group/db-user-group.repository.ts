import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserGroupInput } from '../../../../../application/user-group/inputs/create-user-group.input';
import { UserGroupOutput } from '../../../../../application/user-group/outputs';
import { DbUserGroup } from '../../../../../application/user-group/usecases/db-user-group.usecase';
import { userGroupResponseMapper } from '../../../mappers';
import { UserGroupModel } from '../../models/user-group/user-group.model';

@Injectable()
export class DbUserGroupRepository implements DbUserGroup {
  constructor(
    @InjectRepository(UserGroupModel)
    private readonly repository: Repository<UserGroupModel>,
  ) {}

  async create(data: CreateUserGroupInput): Promise<UserGroupModel> {
    return await this.repository.save(data);
  }

  async readAll(): Promise<UserGroupOutput[]> {
    const result = await this.repository.find();
    return userGroupResponseMapper(result);
  }
}
