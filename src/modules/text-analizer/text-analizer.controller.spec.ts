import { Test, TestingModule } from '@nestjs/testing';
import { TextAnalizerController } from './text-analizer.controller';
import { TextAnalizerService } from './text-analizer.service';
import { CreateTextAnalizerDto } from './dto/create.dto';
import { TextAnalizerResponse } from './interfaces/text-analizer.interface';
import { validate } from 'class-validator';

describe('TextAnalizerController', () => {
  let controller: TextAnalizerController;
  let service: TextAnalizerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TextAnalizerController],
      providers: [
        {
          provide: TextAnalizerService,
          useValue: {
            analyzeSentiment: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<TextAnalizerController>(TextAnalizerController);
    service = module.get<TextAnalizerService>(TextAnalizerService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should analyze sentiment successfully', async () => {
    const dto: CreateTextAnalizerDto = { text: 'I love coding!' };
    const response: TextAnalizerResponse = {
      score: 0.30000001192092896,
      magnitude: 0.30000001192092896,
    };

    jest.spyOn(service, 'analyzeSentiment').mockResolvedValue(response);

    expect(await controller.analyze(dto)).toEqual(response);
    expect(service.analyzeSentiment).toHaveBeenCalledWith(dto.text);
  });

  it('should validate that text is not empty', async () => {
    const dto = new CreateTextAnalizerDto();
    dto.text = '';

    const errors = await validate(dto);
    expect(errors.length).toBe(1);
    expect(errors[0].constraints).toHaveProperty('isNotEmpty');
    expect(errors[0].constraints.isNotEmpty).toBe('text should not be empty');
  });

  it('should validate successfully with valid input', async () => {
    const dto = new CreateTextAnalizerDto();
    dto.text = 'I love coding!';

    const errors = await validate(dto);
    expect(errors.length).toBe(0);
  });
});
