import { Injectable } from '@nestjs/common';

import {
  CreateUserGroupResponse,
  ReadUserGroupByIdResponse,
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
    if (output || output.length > 0) {
      return {
        data: output,
      };
    } else {
      return {
        data: [],
      };
    }
  }

  async readUserGroupByIdResult(
    output: UserGroupOutput,
  ): Promise<ReadUserGroupByIdResponse> {
    if (output) {
      return {
        data: output,
      };
    } else {
      return {
        data: null,
      };
    }
  }
}
