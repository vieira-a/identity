import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AssignGroupModuleInput } from '../../../../../application/group-module/inputs/assign-group-module.input';
import { DbAssignGroupModule } from '../../../../../application/group-module/usecases/db-assign-group-module.usecase';
import { GroupModuleModel } from '../../models/group-module/group-module.model';

@Injectable()
export class DbAssignGroupModuleRepository implements DbAssignGroupModule {
  constructor(
    @InjectRepository(GroupModuleModel)
    private readonly repository: Repository<GroupModuleModel>,
  ) {}
  async assign(data: AssignGroupModuleInput): Promise<void> {
    await this.repository.save(data);
  }
}
