import { Controller, Get } from '@nestjs/common';

import { ReadUserGroupsService } from '../../../application/user-group/services';

@Controller('user-group')
export class ReadUserGroupsController {
  constructor(private readonly readUserGroupsService: ReadUserGroupsService) {}

  @Get()
  async handler() {
    return await this.readUserGroupsService.readAll();
  }
}
