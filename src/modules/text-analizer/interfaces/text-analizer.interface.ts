export interface TextAnalizer {
  text: string;
  score: number;
  magnitude: number;
  sentiment: string;
  createdAt: Date;
  updatedAt: Date;
}
