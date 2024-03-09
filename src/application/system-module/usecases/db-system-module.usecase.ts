import { ReadSystemModuleById } from '../../../domain/system-module/usecases';
import { ReadSystemModuleByIdOutput } from '../output';

export class DbSystemModule extends ReadSystemModuleById {
  readById: (guid: string) => Promise<ReadSystemModuleByIdOutput>;
}
