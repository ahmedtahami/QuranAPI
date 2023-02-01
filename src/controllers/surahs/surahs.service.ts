import { BadRequestException, Injectable } from '@nestjs/common';
import { Surah } from 'src/entities/Surah.entity'
import { DataSource } from 'typeorm';
import { Pagination, PaginationOptionsInterface } from 'src/common/paginate';

@Injectable()
export class SurahsService {
    constructor(private readonly dataSource: DataSource) {}

    async findAll() {
        const _surahRepository = this.dataSource.getRepository(Surah);
        const result = await _surahRepository.find();
        return result;
    }

    async paginate(options: PaginationOptionsInterface): Promise<Pagination<Surah>> {
        const _AyatRepository = this.dataSource.getRepository(Surah);
        const [results, total] = await _AyatRepository.findAndCount({
            take: options.limit,
            skip: options.page * options.limit,
        });
        return new Pagination<Surah>({
            results,
            total,
        });
    }

    async findById(id: number) {
        const _surahRepository = this.dataSource.getRepository(Surah);
        const result = await _surahRepository.findOneBy({
            id: id
        });
        return result;
    }
}
