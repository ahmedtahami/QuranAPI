import { Injectable } from '@nestjs/common';
import { Audio } from 'src/entities/Audio.entity'
import { DataSource } from 'typeorm';
import { Pagination, PaginationOptionsInterface } from 'src/common/paginate';

@Injectable()
export class AudiosService {
    constructor(private readonly dataSource: DataSource) {}

    async findAll() {
        const repository = this.dataSource.getRepository(Audio);
        const result = await repository.find();
        return result;
    }

    async paginate(options: PaginationOptionsInterface): Promise<Pagination<Audio>> {
        const repository = this.dataSource.getRepository(Audio);
        const [results, total] = await repository.findAndCount({
            take: options.limit,
            skip: options.page * options.limit,
        });
        return new Pagination<Audio>({
            results,
            total,
        });
    }

    async findByAyatId(ayatId: number, options: PaginationOptionsInterface): Promise<Pagination<Audio>> {
        const repository = this.dataSource.getRepository(Audio);
        const [results, total] = await repository.findAndCount({
            take: options.limit,
            skip: options.page * options.limit,
            where: {
                Ayat: { Id: ayatId }
            }
        });
        return new Pagination<Audio>({
            results,
            total,
        });
    }

    async findById(id: number) {
        const repository = this.dataSource.getRepository(Audio);
        const result = await repository.findOneBy({
            Id: id
        });
        return result;
    }
}
