import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Ayat } from "./Ayat.entity";

@Entity('ayat_word')
export class Word {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    Text: string;
    @Column()
    Tooltip: string;
    @Column()
    startTime: number;
    @Column()
    endTime: number;
    @ManyToOne(() => Ayat, (p) => p.Words)
    Ayat: Ayat;
}
