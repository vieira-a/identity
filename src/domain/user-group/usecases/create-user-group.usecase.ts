import { CreateUserGroupInput } from '../../../application/user-group/inputs/create-user-group.input';

export interface CreateUserGroup {
  create: (data: CreateUserGroupInput) => Promise<boolean>;
}
