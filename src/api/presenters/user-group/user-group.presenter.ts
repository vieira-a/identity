import { Injectable } from '@nestjs/common';

import { CreateUserGroupResponse } from '../../../api/responses/user-group/create-user.group.response';

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
}
