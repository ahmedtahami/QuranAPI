import { Body, Controller, Get, Param, Post, Request } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Pagination, PaginateDto } from 'src/common/paginate';
import { Translation } from '../../entities/translation.entity';
import { TranslationService } from './translations.service';

@ApiTags('Translations')
@Controller('translations')
export class TranslationsController {
    constructor(private readonly service: TranslationService) { }

    @Post()
    async index(@Body() dto: PaginateDto): Promise<Pagination<Translation>> {
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
