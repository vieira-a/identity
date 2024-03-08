import { SystemModuleEntity } from '../entities/system-module.entity';

export class ReadSystemModuleById {
  readById: (guid: string) => Promise<SystemModuleEntity>;
}
