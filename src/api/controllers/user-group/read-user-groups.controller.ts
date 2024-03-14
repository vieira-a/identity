import { Controller, Get, Query } from '@nestjs/common';

import { ReadUserGroupsService } from '../../../application/user-group/services';

@Controller('user-group')
export class ReadUserGroupsController {
  constructor(private readonly readUserGroupsService: ReadUserGroupsService) {}

  @Get()
  async handler(@Query('description') description: string) {
    const filter = { description };
    return await this.readUserGroupsService.readAll(filter);
  }
}
