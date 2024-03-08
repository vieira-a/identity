import { AssignGroupModule } from '../../../domain/group-module/usecases/group-module.usecase';
import { AssignGroupModuleInput } from '../inputs/assign-group-module.input';

export interface DbAssignGroupModule extends AssignGroupModule {
  assign: (data: AssignGroupModuleInput) => Promise<void>;
}
