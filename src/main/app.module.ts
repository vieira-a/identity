import { Module } from '@nestjs/common';

import { DataModule } from '../infrastructure/database/data.module';
import { UserGroupModule } from '../modules/user-group.module';
import { AppConfigModule } from './config/config.module';

@Module({
  imports: [AppConfigModule, DataModule, UserGroupModule],
})
export class AppModule {}
