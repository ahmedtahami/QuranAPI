import { ApiProperty } from '@nestjs/swagger';

export class PaginateDto {
    @ApiProperty()
    limit: number;

    @ApiProperty()
    page: number;
}
