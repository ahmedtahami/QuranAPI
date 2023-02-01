import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Ayat } from "./Ayat.entity";

@Entity("ayat_translation")
export class Translation {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    Text: string;
    @Column()
    AuthorName: string;
    @ManyToOne(() => Ayat, (p) => p.Translations)
    Ayat: Ayat;
}
