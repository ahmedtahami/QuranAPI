import { Test, TestingModule } from '@nestjs/testing';
import { SurahsController } from './surahs.controller';

describe('SurahsController', () => {
  let controller: SurahsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurahsController],
    }).compile();

    controller = module.get<SurahsController>(SurahsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
