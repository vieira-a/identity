import { Injectable } from '@nestjs/common';

import { GroupModuleEntity } from '../../../domain/group-module/entities/group-module.entity';
import { AssignGroupModule } from '../../../domain/group-module/usecases/group-module.usecase';
import { DbAssignGroupModuleRepository } from '../../../infrastructure/database/access/repositories/group-module/db-group-module.repository';

@Injectable()
export class AssignGroupModuleService implements AssignGroupModule {
  constructor(
    private readonly groupModuleRepository: DbAssignGroupModuleRepository,
  ) {}
  async assign(data: GroupModuleEntity): Promise<void> {
    await this.groupModuleRepository.assign(data);
  }
}
