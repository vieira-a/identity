import { UserGroupModel } from '../access/models/user-group';

export const readUserGroupsMapper = (output: UserGroupModel[]) => {
  return output.map((group) => ({
    id: group.guid,
    description: group.description,
  }));
};
