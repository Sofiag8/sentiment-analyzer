import { MongooseModule } from '@nestjs/mongoose';

// TODO: Add env variables for different environments
export const DatabaseConfig = MongooseModule.forRoot(
  process.env.MONGODB_URI || 'mongodb://root:example@localhost:27017',
);
