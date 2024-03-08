import { ReadSystemModuleById } from '../../../domain/system-module/usecases/read-system-module-by-id.usecase';
import { ReadSystemModuleByIdOutput } from '../output/read-system-module-by-id.output';

export class DbSystemModule extends ReadSystemModuleById {
  readById: (guid: string) => Promise<ReadSystemModuleByIdOutput>;
}
