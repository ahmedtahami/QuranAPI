import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Ayat } from "./Ayat.entity";

@Entity("ayat_audio")
export class Audio {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    Url: string;
    @Column()
    NarratorName: string;
    @ManyToOne(() => Ayat, (p) => p.Audios)
    Ayat: Ayat;
}
