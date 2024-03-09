import { UserGroupEntity } from '../../../domain/user-group/entities';

export const userGroupResponseMapper = (output: Partial<UserGroupEntity[]>) => {
  return output.map((group) => ({
    id: group.guid,
    description: group.description,
  }));
};
