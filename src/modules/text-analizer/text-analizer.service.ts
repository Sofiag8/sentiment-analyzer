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
    private textAnalizerModel: Model<TextAnalizer>,
  ) {}

  async analyzeSentiment(text: string): Promise<TextAnalizerResponse> {
    try {
      const [result] = await this.client.analyzeSentiment({
        document: { content: text, type: 'PLAIN_TEXT' },
      });

      const sentimentData = new this.textAnalizerModel({
        text,
        score: result.documentSentiment.score,
        magnitude: result.documentSentiment.magnitude,
      });
      const savedSentiment = await sentimentData.save();

      console.log('Sentiment analysis successful:', savedSentiment);

      return {
        score: savedSentiment.score,
        magnitude: savedSentiment.magnitude,
      };
    } catch (error) {
      console.error('Error analyzing sentiment:', error);
      throw new Error('Failed to analyze sentiment');
    }
  }
}
