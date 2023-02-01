import { Body, Controller, Get, Param, Post, Request } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { Pagination, PaginateDto } from 'src/common/paginate';
import { Audio } from '../../entities/Audio.entity';
import { AudiosService } from './audios.service';

@ApiTags('Audios')
@Controller('audios')
export class AudiosController {
    constructor(private readonly service: AudiosService) { }

    @Post()
    async index(@Body() dto: PaginateDto): Promise<Pagination<Audio>> {
        return await this.service.paginate({
            limit: dto.limit ?? 10,
            page: dto.page ?? 0,
        });
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(':id')
    @ApiParam({
        name: 'id',
    })
    findById(@Param('id') id: number) {
        return this.service.findById(id);
    }

    @Get('ByAyat:ayatId')
    @ApiParam({
        name: 'ayatId',
    })
    @ApiParam({
        name: 'limit',
    })
    @ApiParam({
        name: 'page',
    })
    findByAyatId(@Param('ayatId') ayatId: number, @Param('limit') limit: number, @Param('ayatId') page: number) {
        return this.service.findByAyatId(ayatId, {
            limit: limit ?? 10,
            page: page ?? 0
        });
    }
}
