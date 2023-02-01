import { Test, TestingModule } from '@nestjs/testing';
import { SurahsService } from './surahs.service';

describe('SurahsService', () => {
  let service: SurahsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SurahsService],
    }).compile();

    service = module.get<SurahsService>(SurahsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
