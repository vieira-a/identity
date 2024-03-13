import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserGroupInput } from '../../../../../application/user-group/inputs';
import { UserGroupOutput } from '../../../../../application/user-group/outputs';
import { DbUserGroup } from '../../../../../application/user-group/usecases';
import {
  userGroupByIdResponseMapper,
  userGroupResponseMapper,
} from '../../../mappers';
import { UserGroupModel } from '../../models/user-group';

@Injectable()
export class DbUserGroupRepository implements DbUserGroup {
  constructor(
    @InjectRepository(UserGroupModel)
    private readonly repository: Repository<UserGroupModel>,
  ) {}

  async create(data: CreateUserGroupInput): Promise<UserGroupModel> {
    return await this.repository.save(data);
  }

  async readById(guid: string): Promise<UserGroupOutput> {
    const result = await this.repository.findOne({ where: { guid } });
    return userGroupByIdResponseMapper(result);
  }

  async readAll(): Promise<UserGroupOutput[]> {
    const result = await this.repository.find();
    return userGroupResponseMapper(result);
  }
}
