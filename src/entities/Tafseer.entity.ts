import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Ayat } from "./Ayat.entity";

@Entity("ayat_tafseer")
export class Tafseer {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    Text: string;
    @Column()
    AuthorName: string;
    @ManyToOne(() => Ayat, (p) => p.Tafseers)
    Ayat: Ayat;
}
