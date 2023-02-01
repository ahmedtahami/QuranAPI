import { Module } from '@nestjs/common';
import { SurahsController } from './surahs.controller';
import { SurahsService } from './surahs.service';

@Module({
  imports: [],
  controllers: [SurahsController],
  providers: [SurahsService],
  exports: [],
})
export class SurahsModule {}
