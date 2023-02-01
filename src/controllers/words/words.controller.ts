import { Body, Controller, Get, Param, Post, Request } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Pagination, PaginateDto } from 'src/common/paginate';
import { Word } from '../../entities/Word.entity';
import { WordsService } from './words.service';

@ApiTags('Words')
    @Controller('words')
export class WordsController {
    constructor(private readonly service: WordsService) { }

    @Post()
    async index(@Body() dto: PaginateDto): Promise<Pagination<Word>> {
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
    findById(@Param() params) {
        return this.service.findById(params.id);
    }
}
