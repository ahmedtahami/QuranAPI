import { Injectable } from '@nestjs/common';
import { Word } from 'src/entities/Word.entity'
import { DataSource } from 'typeorm';
import { Pagination, PaginationOptionsInterface } from 'src/common/paginate';

@Injectable()
export class WordsService {
    constructor(private readonly dataSource: DataSource) {}

    async findAll() {
        const repository = this.dataSource.getRepository(Word);
        const result = await repository.find();
        return result;
    }

    async paginate(options: PaginationOptionsInterface): Promise<Pagination<Word>> {
        const repository = this.dataSource.getRepository(Word);
        const [results, total] = await repository.findAndCount({
            take: options.limit,
            skip: options.page * options.limit,
        });
        return new Pagination<Word>({
            results,
            total,
        });
    }

    async findByAyatId(ayatId: number, options: PaginationOptionsInterface): Promise<Pagination<Word>> {
        const repository = this.dataSource.getRepository(Word);
        const [results, total] = await repository.findAndCount({
            take: options.limit,
            skip: options.page * options.limit,
            where: {
                Ayat: { Id: ayatId }
            }
        });
        return new Pagination<Word>({
            results,
            total,
        });
    }

    async findById(id: number) {
        const repository = this.dataSource.getRepository(Word);
        const result = await repository.findOneBy({
            Id: id
        });
        return result;
    }
}
