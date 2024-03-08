import { BadRequestException, Injectable } from '@nestjs/common';

import { SystemModuleEntity } from '../../../domain/system-module/entities/system-module.entity';
import { ReadSystemModuleById } from '../../../domain/system-module/usecases/read-system-module-by-id.usecase';
import { DbSystemModuleRepository } from '../../../infrastructure/database/access/repositories/system-module/db-system-module.repository';

@Injectable()
export class ReadSystemModuleByIdService implements ReadSystemModuleById {
  constructor(
    private readonly systemModuleRepository: DbSystemModuleRepository,
  ) {}
  async readById(guid: string): Promise<SystemModuleEntity> {
    const result = await this.systemModuleRepository.readById(guid);

    if (!result) {
      throw new BadRequestException(`O código do módulo informado não existe`);
    } else {
      return result;
    }
  }
}
