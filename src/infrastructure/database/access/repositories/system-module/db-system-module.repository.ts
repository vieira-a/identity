import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ReadSystemModuleByIdOutput } from '../../../../../application/system-module/output';
import { DbSystemModule } from '../../../../../application/system-module/usecases';
import { SystemModuleModel } from '../../models/system-module';

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
