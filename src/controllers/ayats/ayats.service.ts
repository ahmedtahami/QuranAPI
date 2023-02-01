import { Injectable } from '@nestjs/common';
import { Ayat } from 'src/entities/Ayat.entity'
import { DataSource } from 'typeorm';
import { Pagination, PaginationOptionsInterface } from 'src/common/paginate';

@Injectable()
export class AyatsService {
    constructor(private readonly dataSource: DataSource) {}

    async findAll() {
        const repository = this.dataSource.getRepository(Ayat);
        const result = await repository.find();
        return result;
    }

    async paginate(options: PaginationOptionsInterface): Promise<Pagination<Ayat>> {
        const repository = this.dataSource.getRepository(Ayat);
        const [results, total] = await repository.findAndCount({
            take: options.limit,
            skip: options.page * options.limit,
        });
        return new Pagination<Ayat>({
            results,
            total,
        });
    }

    async findBySurahId(surahId : number, options: PaginationOptionsInterface): Promise<Pagination<Ayat>> {
        const repository = this.dataSource.getRepository(Ayat);
        const [results, total] = await repository.findAndCount({
            take: options.limit,
            skip: options.page * options.limit,
            where: {
                Surah: { id: surahId }
            }
        });
        return new Pagination<Ayat>({
            results,
            total,
        });
    }

    async findById(id: number) {
        const repository = this.dataSource.getRepository(Ayat);
        const result = await repository.findOneBy({
            Id: id
        });
        return result;
    }
}
