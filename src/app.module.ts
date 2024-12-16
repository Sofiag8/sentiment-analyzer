import { Module } from '@nestjs/common';
import { DatabaseConfig } from './config/database.config';
import { TextAnalizerModule } from './modules/text-analizer/text-analizer.module';

@Module({
  imports: [DatabaseConfig, TextAnalizerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
