import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class TextAnalizer extends Document {
  @Prop()
  text: string;

  @Prop()
  score: number;

  @Prop()
  magnitude: number;
}

export const TextAnalizerSchema = SchemaFactory.createForClass(TextAnalizer);
