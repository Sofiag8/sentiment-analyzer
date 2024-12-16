import { IsString } from 'class-validator';

export class CreateTextAnalizerDto {
  @IsString()
  text: string;
}
