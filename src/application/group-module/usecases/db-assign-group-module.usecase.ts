import { AssignGroupModule } from '../../../domain/group-module/usecases';
import { AssignGroupModuleInput } from '../inputs';

export interface DbAssignGroupModule extends AssignGroupModule {
  assign: (data: AssignGroupModuleInput) => Promise<void>;
}
