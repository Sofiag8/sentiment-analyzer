import { Module } from '@nestjs/common';
import { DatabaseConfig } from './config/database.config';

@Module({
  imports: [DatabaseConfig],
  controllers: [],
  providers: [],
})
export class AppModule {}
