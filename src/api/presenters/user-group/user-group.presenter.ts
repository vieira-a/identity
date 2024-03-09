import { Injectable } from '@nestjs/common';
import { userGroupResponseMapper } from 'src/api/transports/user-group';

import {
  CreateUserGroupResponse,
  ReadUserGroupsResponse,
} from '../../../api/responses/user-group';
import { UserGroupOutput } from '../../../application/user-group/outputs';

@Injectable()
export class UserGroupPresenter {
  async createUserGroupResult(
    output: string,
  ): Promise<CreateUserGroupResponse> {
    if (output) {
      return {
        success: true,
        message: 'Grupo de usuários cadastrado com sucesso',
        data: output,
      };
    } else {
      return {
        success: false,
        message: 'Houve uma falha ao criar grupo de usuários',
      };
    }
  }

  async readUserGroupsResult(
    output: Partial<UserGroupOutput[]>,
  ): Promise<ReadUserGroupsResponse> {
    return {
      success: true,
      data: userGroupResponseMapper(output),
    };
  }
}
