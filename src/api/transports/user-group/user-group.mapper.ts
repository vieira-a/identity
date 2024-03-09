import { UserGroupOutput } from '../../../application/user-group/outputs';

export const userGroupResponseMapper = (output: Partial<UserGroupOutput[]>) => {
  return output.map((group) => ({
    id: group.guid,
    description: group.description,
    modules: group.modules,
  }));
};
