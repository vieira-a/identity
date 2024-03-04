import { Body, Controller, Post } from '@nestjs/common';

import { CreateUserGroupInput } from '../../../application/user-group/inputs/create-user-group.input';
import { CreateUserGroupOutput } from '../../../application/user-group/outputs/create-user-group.output';
import { CreateUserGroupService } from '../../../application/user-group/services/create-user-group.service';

@Controller('user-group')
export class CreateUserGroupController {
  constructor(
    private readonly createUserGroupService: CreateUserGroupService,
  ) {}

  @Post()
  async handler(
    @Body() data: CreateUserGroupInput,
  ): Promise<CreateUserGroupOutput> {
    const output = await this.createUserGroupService.create(data);
    if (output) {
      return {
        success: true,
        message: 'Grupo de usuário cadastrado com sucesso',
      };
    }
  }
}
