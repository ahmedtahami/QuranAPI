import { Module } from '@nestjs/common';
import { WordsController } from './words.controller';
import { WordsService } from './words.service';

@Module({
  imports: [],
    controllers: [WordsController],
    providers: [WordsService],
  exports: [],
})
export class WordsModule {}
