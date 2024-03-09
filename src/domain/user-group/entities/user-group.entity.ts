import { EntityBase } from '../../../domain/data/entities';

export class UserGroupEntity extends EntityBase {
  description: string;
  modules: string[];
}
