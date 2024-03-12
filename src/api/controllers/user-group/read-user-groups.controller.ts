import { Controller, Get } from '@nestjs/common';

import { ReadUserGroupsService } from '../../../application/user-group/services';
import { UserGroupPresenter } from '../../presenters/user-group';

@Controller('user-group')
export class ReadUserGroupsController {
  constructor(
    private readonly readUserGroupsService: ReadUserGroupsService,
    private readonly userGroupPresenter: UserGroupPresenter,
  ) {}

  @Get()
  async handler() {
    const output = await this.readUserGroupsService.readAll();
    return await this.userGroupPresenter.readUserGroupsResult(output);
  }
}
