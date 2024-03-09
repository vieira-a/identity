import { SystemModuleEntity } from '../entities';

export class ReadSystemModuleById {
  readById: (guid: string) => Promise<SystemModuleEntity>;
}
