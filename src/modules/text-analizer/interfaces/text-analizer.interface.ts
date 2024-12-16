import { ApiProperty } from '@nestjs/swagger';

export class TextAnalizerResponse {
  @ApiProperty()
  magnitude: number;

  @ApiProperty()
  score: number;
}
