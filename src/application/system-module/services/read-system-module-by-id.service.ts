import { BadRequestException, Injectable } from '@nestjs/common';

import { SystemModuleEntity } from '../../../domain/system-module/entities';
import { ReadSystemModuleById } from '../../../domain/system-module/usecases';
import { DbSystemModuleRepository } from '../../../infrastructure/database/access/repositories/system-module';

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
