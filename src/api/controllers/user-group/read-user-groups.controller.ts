import { Controller, Get } from '@nestjs/common';

import { UserGroupPresenter } from '../../../api/presenters/user-group/user-group.presenter';
import { ReadUserGroupsService } from '../../../application/user-group/services';

@Controller('user-group')
export class ReadUserGroupsController {
  constructor(
    private readonly readUserGroupsService: ReadUserGroupsService,
    private readonly userGroupPresenter: UserGroupPresenter,
  ) {}

  @Get()
  async handler() {
    try {
      const output = await this.readUserGroupsService.readAll();
      return await this.userGroupPresenter.readUserGroupsResult(output);
    } catch (error) {
      console.log(error);
    }
  }
}
