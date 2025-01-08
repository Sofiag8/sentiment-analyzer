import { Module } from '@nestjs/common';
import { DatabaseConfig } from './config/database.config';
import { TextAnalizerModule } from './modules/text-analizer/text-analizer.module';
import { LoggerModule } from './shared/logger/logger.module';

@Module({
  imports: [DatabaseConfig, TextAnalizerModule, LoggerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
