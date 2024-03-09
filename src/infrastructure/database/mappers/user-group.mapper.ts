import { UserGroupModel } from '../access/models/user-group/user-group.model';

export const userGroupResponseMapper = (output: UserGroupModel[]) => {
  return output.map((group) => ({
    id: group.guid,
    description: group.description,
  }));
};
