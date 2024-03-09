import { Injectable } from '@nestjs/common';

import { GroupModuleEntity } from '../../../domain/group-module/entities';
import { AssignGroupModule } from '../../../domain/group-module/usecases';
import { DbAssignGroupModuleRepository } from '../../../infrastructure/database/access/repositories/group-module';

@Injectable()
export class AssignGroupModuleService implements AssignGroupModule {
  constructor(
    private readonly groupModuleRepository: DbAssignGroupModuleRepository,
  ) {}
  async assign(data: GroupModuleEntity): Promise<void> {
    await this.groupModuleRepository.assign(data);
  }
}
