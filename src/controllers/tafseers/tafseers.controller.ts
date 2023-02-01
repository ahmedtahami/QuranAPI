import { Body, Controller, Get, Param, Post, Request } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Pagination, PaginateDto } from 'src/common/paginate';
import { Tafseer } from '../../entities/Tafseer.entity';
import { TafseerService } from './tafseers.service';

@ApiTags('Tafseers')
@Controller('tafseers')
export class TafseersController {
    constructor(private readonly service: TafseerService) { }

    @Post()
    async index(@Body() dto: PaginateDto): Promise<Pagination<Tafseer>> {
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
