import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { TextAnalizerService } from './text-analizer.service';
import { TextAnalizer } from './entities/text-analizer.entity';

jest.mock('@google-cloud/language');

describe('TextAnalizerService', () => {
  let service: TextAnalizerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TextAnalizerService,
        {
          provide: getModelToken(TextAnalizer.name),
          useValue: {
            new: jest.fn().mockImplementation(() => ({
              save: jest.fn().mockResolvedValue({}),
            })),
            constructor: jest.fn().mockResolvedValue({}),
            save: jest.fn().mockResolvedValue({}),
          },
        },
      ],
    }).compile();

    service = module.get<TextAnalizerService>(TextAnalizerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
