import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TextAnalizerController } from './text-analizer.controller';
import { TextAnalizerService } from './text-analizer.service';
import {
  TextAnalizer,
  TextAnalizerSchema,
} from './entities/text-analizer.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TextAnalizer.name, schema: TextAnalizerSchema },
    ]),
  ],
  controllers: [TextAnalizerController],
  providers: [TextAnalizerService],
})
export class TextAnalizerModule {}
