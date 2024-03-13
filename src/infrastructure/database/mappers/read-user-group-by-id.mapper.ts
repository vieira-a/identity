import { UserGroupModel } from '../access/models/user-group';

export const readUserGroupByIdMapper = (output: UserGroupModel) => {
  return {
    id: output.guid,
    description: output.description,
  };
};
