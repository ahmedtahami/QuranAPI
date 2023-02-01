import { Injectable } from '@nestjs/common';
import { Translation } from 'src/entities/Translation.entity'
import { DataSource } from 'typeorm';
import { Pagination, PaginationOptionsInterface } from 'src/common/paginate';

@Injectable()
export class TranslationService {
    constructor(private readonly dataSource: DataSource) {}

    async findAll() {
        const repository = this.dataSource.getRepository(Translation);
        const result = await repository.find();
        return result;
    }

    async paginate(options: PaginationOptionsInterface): Promise<Pagination<Translation>> {
        const repository = this.dataSource.getRepository(Translation);
        const [results, total] = await repository.findAndCount({
            take: options.limit,
            skip: options.page * options.limit,
        });
        return new Pagination<Translation>({
            results,
            total,
        });
    }

    async findByAyatId(ayatId: number, options: PaginationOptionsInterface): Promise<Pagination<Translation>> {
        const repository = this.dataSource.getRepository(Translation);
        const [results, total] = await repository.findAndCount({
            take: options.limit,
            skip: options.page * options.limit,
            where: {
                Ayat: { Id: ayatId }
            }
        });
        return new Pagination<Translation>({
            results,
            total,
        });
    }

    async findById(id: number) {
        const repository = this.dataSource.getRepository(Translation);
        const result = await repository.findOneBy({
            Id: id
        });
        return result;
    }
}
