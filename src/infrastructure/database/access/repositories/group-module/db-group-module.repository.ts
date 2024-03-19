import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AssignGroupModuleInput } from '../../../../../application/group-module/inputs';
import { DbAssignGroupModule } from '../../../../../application/group-module/usecases';
import { GroupModuleModel } from '../../models/group-module';

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
