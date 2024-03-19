import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserGroupInput } from '../../../../../application/user-group/inputs';
import { ReadUserGroupInput } from '../../../../../application/user-group/inputs/read-user-group-filter.input';
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

  async readAll(
    filter?: ReadUserGroupInput,
  ): Promise<PageDto<UserGroupOutput>> {
    const pageOptionsDto = new PageOptionsDto();

    const queryBuilder = this.repository
      .createQueryBuilder('identity_groups')
      .orderBy('ds_group', pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take);

    if (filter?.description) {
      queryBuilder.andWhere(
        'LOWER(identity_groups.ds_group) LIKE LOWER(:ds_group)',
        {
          ds_group: `%${filter.description}%`,
        },
      );
    }
    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    const pageMetaDto = new PageMetaDto({
      itemCount,
      pageOptionsDto,
    });

    return new PageDto(readUserGroupsMapper(entities), pageMetaDto);
  }
}
