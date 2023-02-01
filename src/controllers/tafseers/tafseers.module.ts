import { Module } from '@nestjs/common';
import { TafseersController } from './tafseers.controller';
import { TafseerService } from './tafseers.service';

@Module({
  imports: [],
    controllers: [TafseersController],
    providers: [TafseerService],
  exports: [],
})
export class TafseersModule {}
