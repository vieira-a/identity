import { EntityBase } from '../../../domain/data/entities/base.entity';

export class UserGroupEntity extends EntityBase {
  description: string;
  modules: string[];
}
