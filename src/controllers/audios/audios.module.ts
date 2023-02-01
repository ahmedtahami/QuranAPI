import { Module } from '@nestjs/common';
import { AudiosController } from './audios.controller';
import { AudiosService } from './audios.service';

@Module({
  imports: [],
    controllers: [AudiosController],
    providers: [AudiosService],
  exports: [],
})
export class AudiosModule {}
