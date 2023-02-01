import { Module } from '@nestjs/common';
import { TranslationService } from './translations.service';
import { TranslationsController } from './translations.controller';

@Module({
  imports: [],
    controllers: [TranslationsController],
    providers: [TranslationService],
  exports: [],
})
export class TranslationsModule {}
