import { MongooseModule } from '@nestjs/mongoose';

export const DatabaseConfig = MongooseModule.forRoot(
  process.env.MONGODB_URI || 'mongodb://root:example@localhost:27017',
);
