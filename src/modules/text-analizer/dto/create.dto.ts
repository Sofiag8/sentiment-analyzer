import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTextAnalizerDto {
  @ApiProperty({ description: 'The text to analyze' })
  @IsNotEmpty()
  @IsString()
  text: string;
}
