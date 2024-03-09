import { UserGroupOutput } from '../../../application/user-group/outputs';

export class ReadUserGroupsResponse {
  success?: boolean;
  data: Partial<UserGroupOutput[]>;
}
