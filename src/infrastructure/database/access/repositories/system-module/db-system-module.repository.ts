import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ReadSystemModuleByIdOutput } from '../../../../../application/system-module/output/read-system-module-by-id.output';
import { DbSystemModule } from '../../../../../application/system-module/usecases/db-system-module.usecase';
import { SystemModuleModel } from '../../models/system-module/system-module.model';

@Injectable()
export class DbSystemModuleRepository implements DbSystemModule {
  constructor(
    @InjectRepository(SystemModuleModel)
    private readonly repository: Repository<SystemModuleModel>,
  ) {}
  async readById(guid: string): Promise<ReadSystemModuleByIdOutput> {
    return await this.repository.findOne({
      where: { guid },
    });
  }
}
