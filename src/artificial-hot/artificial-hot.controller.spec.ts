import { Test, TestingModule } from '@nestjs/testing';
import { ArtificialHotController } from './artificial-hot.controller';
import { ArtificialHotService } from './artificial-hot.service';

describe('ArtificialHotController', () => {
  let controller: ArtificialHotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArtificialHotController],
      providers: [ArtificialHotService],
    }).compile();

    controller = module.get<ArtificialHotController>(ArtificialHotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
