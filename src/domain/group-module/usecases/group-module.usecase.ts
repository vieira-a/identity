import { GroupModuleEntity } from '../entities';

export class AssignGroupModule {
  assign: (data: GroupModuleEntity) => Promise<void>;
}
