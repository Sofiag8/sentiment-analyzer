import { Controller, Post, Body } from '@nestjs/common';
import { TextAnalizerService } from './text-analizer.service';
import { CreateTextAnalizerDto } from './dto/create.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { TextAnalizerResponse } from './interfaces/text-analizer.interface';

@ApiTags('text-analizer')
@Controller('text')
export class TextAnalizerController {
  constructor(private readonly sentimentService: TextAnalizerService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Sentiment analyzed successfully.',
    type: TextAnalizerResponse,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. The input data is invalid.',
    type: TextAnalizerResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error. An unexpected error occurred.',
  })
  async analyze(
    @Body() createTextAnalizerDto: CreateTextAnalizerDto,
  ): Promise<TextAnalizerResponse> {
    return this.sentimentService.analyzeSentiment(createTextAnalizerDto.text);
  }
}
