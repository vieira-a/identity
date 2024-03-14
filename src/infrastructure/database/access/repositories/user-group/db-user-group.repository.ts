import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserGroupInput } from '../../../../../application/user-group/inputs';
import { UserGroupOutput } from '../../../../../application/user-group/outputs';
import { DbUserGroup } from '../../../../../application/user-group/usecases';
import {
  PageDto,
  PageMetaDto,
  PageOptionsDto,
} from '../../../../../domain/data/pagination/dto';
import {
  readUserGroupByIdMapper,
  readUserGroupsMapper,
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
    return readUserGroupByIdMapper(result);
  }

  async readAll(): Promise<PageDto<UserGroupOutput>> {
    const pageOptionsDto = new PageOptionsDto();

    const queryBuilder = this.repository
      .createQueryBuilder('identity_groups')
      .orderBy('ds_group', pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    const pageMetaDto = new PageMetaDto({
      itemCount,
      pageOptionsDto,
    });

    return new PageDto(readUserGroupsMapper(entities), pageMetaDto);
  }
}
