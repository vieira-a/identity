import { UserGroupModel } from '../access/models/user-group';

export const userGroupByIdResponseMapper = (output: UserGroupModel) => {
  return {
    id: output.guid,
    description: output.description,
  };
};
