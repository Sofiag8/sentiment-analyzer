import { Injectable } from '@nestjs/common';
import { LanguageServiceClient } from '@google-cloud/language';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TextAnalizerResponse } from './interfaces/text-analizer.interface';
import { TextAnalizer } from './entities/text-analizer.entity';

@Injectable()
export class TextAnalizerService {
  private client = new LanguageServiceClient();

  constructor(
    @InjectModel(TextAnalizer.name)
    private sentimentModel: Model<TextAnalizer>,
  ) {}

  async analyzeSentiment(text: string): Promise<TextAnalizerResponse> {
    const [result] = await this.client.analyzeSentiment({
      document: { content: text, type: 'PLAIN_TEXT' },
    });

    const sentimentData = new this.sentimentModel({
      text,
      score: result.documentSentiment.score,
      magnitude: result.documentSentiment.magnitude,
    });
    const savedSentiment = await sentimentData.save();
    return {
      score: savedSentiment.score,
      magnitude: savedSentiment.magnitude,
    };
  }
}
