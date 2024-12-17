import { Test, TestingModule } from '@nestjs/testing';
import { TextAnalizerController } from './text-analizer.controller';
import { TextAnalizerService } from './text-analizer.service';
import { getModelToken } from '@nestjs/mongoose';

describe('TextAnalizerModule', () => {
  let controller: TextAnalizerController;
  let service: TextAnalizerService;

  const mockTextAnalizerModel = {
    find: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TextAnalizerController],
      providers: [
        TextAnalizerService,
        {
          provide: getModelToken('TextAnalizer'),
          useValue: mockTextAnalizerModel,
        },
      ],
    }).compile();

    controller = module.get<TextAnalizerController>(TextAnalizerController);
    service = module.get<TextAnalizerService>(TextAnalizerService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });
});
