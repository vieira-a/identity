import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { LocationInterceptor } from 'src/api/interceptors/location.interceptor';

import { CreateUserGroupInput } from '../../../application/user-group/inputs/create-user-group.input';
import { CreateUserGroupOutput } from '../../../application/user-group/outputs/create-user-group.output';
import { CreateUserGroupService } from '../../../application/user-group/services/create-user-group.service';

@Controller('user-group')
export class CreateUserGroupController {
  constructor(
    private readonly createUserGroupService: CreateUserGroupService,
  ) {}

  @Post()
  @UseInterceptors(LocationInterceptor)
  async handler(
    @Body() data: CreateUserGroupInput,
  ): Promise<CreateUserGroupOutput> {
    const output = await this.createUserGroupService.create(data);
    if (output) {
      return {
        success: true,
        message: 'Grupo de usuário cadastrado com sucesso',
        data: output.guid,
      };
    }
  }
}
