import { GroupModuleEntity } from '../entities/group-module.entity';

export class AssignGroupModule {
  assign: (data: GroupModuleEntity) => Promise<void>;
}
