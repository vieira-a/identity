import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';

import { LocationInterceptor } from '../../../api/interceptors/location.interceptor';
import { UserGroupPresenter } from '../../../api/presenters/user-group';
import { CreateUserGroupInput } from '../../../application/user-group/inputs';
import { CreateUserGroupOutput } from '../../../application/user-group/outputs';
import { CreateUserGroupService } from '../../../application/user-group/services';

@Controller('user-group')
export class CreateUserGroupController {
  constructor(
    private readonly createUserGroupService: CreateUserGroupService,
    private readonly userGroupPresenter: UserGroupPresenter,
  ) {}

  @Post()
  @UseInterceptors(LocationInterceptor)
  async handler(
    @Body() data: CreateUserGroupInput,
  ): Promise<CreateUserGroupOutput> {
    const output = await this.createUserGroupService.create(data);
    return await this.userGroupPresenter.createUserGroupResult(output.guid);
  }
}
