import { Test, TestingModule } from '@nestjs/testing';
import { ArtificialHotService } from './artificial-hot.service';

describe('ArtificialHotService', () => {
  let service: ArtificialHotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArtificialHotService],
    }).compile();

    service = module.get<ArtificialHotService>(ArtificialHotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
