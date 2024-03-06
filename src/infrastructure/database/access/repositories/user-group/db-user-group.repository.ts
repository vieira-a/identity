import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserGroupInput } from '../../../../../application/user-group/inputs/create-user-group.input';
import { DbUserGroup } from '../../../../../application/user-group/usecases/db-user-group.usecase';
import { UserGroupModel } from '../../models/user-group/user-group.model';

@Injectable()
export class DbUserGroupRepository implements DbUserGroup {
  constructor(
    @InjectRepository(UserGroupModel)
    private readonly repository: Repository<UserGroupModel>,
  ) {}

  async create(data: CreateUserGroupInput): Promise<CreateUserGroupInput> {
    return await this.repository.save(data);
  }
}
