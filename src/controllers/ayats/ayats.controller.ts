import { Body, Controller, Get, Param, Post, Request } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Pagination, PaginateDto } from 'src/common/paginate';
import { Ayat } from 'src/entities/Ayat.entity';
import { AyatsService } from './ayats.service';

@ApiTags('Ayats')
@Controller('ayats')
export class AyatsController {
    constructor(private readonly service: AyatsService) { }

    @Post()
    async index(@Body() dto: PaginateDto): Promise<Pagination<Ayat>> {
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
