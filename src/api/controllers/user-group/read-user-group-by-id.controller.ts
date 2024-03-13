import { Controller, Get, Param } from '@nestjs/common';

import { ReadUserGroupByIdService } from '../../../application/user-group/services';
import { UserGroupPresenter } from '../../presenters/user-group';

@Controller('user-group')
export class ReadUserGroupByIdController {
  constructor(
    private readonly readUserGroupByIdService: ReadUserGroupByIdService,
    private readonly userGroupPresenter: UserGroupPresenter,
  ) {}

  @Get(':id')
  async handler(@Param('id') id: string) {
    const output = await this.readUserGroupByIdService.readById(id);
    return await this.userGroupPresenter.readUserGroupByIdResult(output);
  }
}
