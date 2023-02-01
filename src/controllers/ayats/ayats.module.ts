import { Module } from '@nestjs/common';
import { AyatsController } from './ayats.controller';
import { AyatsService } from './ayats.service';

@Module({
  imports: [],
    controllers: [AyatsController],
    providers: [AyatsService],
  exports: [],
})
export class AyatsModule {}
