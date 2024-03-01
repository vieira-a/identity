import { Module } from '@nestjs/common';

import { DataModule } from '../infrastructure/database/data.module';
import { AppConfigModule } from './config/config.module';

@Module({
  imports: [AppConfigModule, DataModule],
})
export class AppModule {}
