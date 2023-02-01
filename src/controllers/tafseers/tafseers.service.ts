import { Injectable } from '@nestjs/common';
import { Tafseer } from 'src/entities/Tafseer.entity'
import { DataSource } from 'typeorm';
import { Pagination, PaginationOptionsInterface } from 'src/common/paginate';

@Injectable()
export class TafseerService {
    constructor(private readonly dataSource: DataSource) {}

    async findAll() {
        const repository = this.dataSource.getRepository(Tafseer);
        const result = await repository.find();
        return result;
    }

    async paginate(options: PaginationOptionsInterface): Promise<Pagination<Tafseer>> {
        const repository = this.dataSource.getRepository(Tafseer);
        const [results, total] = await repository.findAndCount({
            take: options.limit,
            skip: options.page * options.limit,
        });
        return new Pagination<Tafseer>({
            results,
            total,
        });
    }

    async findByAyatId(ayatId: number, options: PaginationOptionsInterface): Promise<Pagination<Tafseer>> {
        const repository = this.dataSource.getRepository(Tafseer);
        const [results, total] = await repository.findAndCount({
            take: options.limit,
            skip: options.page * options.limit,
            where: {
                Ayat: { Id: ayatId }
            }
        });
        return new Pagination<Tafseer>({
            results,
            total,
        });
    }

    async findById(id: number) {
        const repository = this.dataSource.getRepository(Tafseer);
        const result = await repository.findOneBy({
            Id: id
        });
        return result;
    }
}
