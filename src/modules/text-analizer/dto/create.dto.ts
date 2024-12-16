import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTextAnalizerDto {
  @ApiProperty({ description: 'The text to analyze' })
  @IsString()
  text: string;
}
