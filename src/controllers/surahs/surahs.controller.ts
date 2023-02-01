import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SurahsService } from './surahs.service';
import { ApiTags } from '@nestjs/swagger';
import { PaginateDto, Pagination } from 'src/common/paginate';
import { Surah } from 'src/entities/Surah.entity';

@ApiTags('Surahs')
@Controller('surahs')
export class SurahsController {
    constructor(private readonly surahService: SurahsService) { }

    @Post()
    async index(@Body() dto: PaginateDto): Promise<Pagination<Surah>> {
        return await this.surahService.paginate({
            limit: dto.limit ?? 10,
            page: dto.page ?? 0,
        });
    }

    @Get()
    findAll() {
        return this.surahService.findAll();
    }

    @Get(':id')
    findById(@Param() params) {
        return this.surahService.findById(params.id);
    }
}
