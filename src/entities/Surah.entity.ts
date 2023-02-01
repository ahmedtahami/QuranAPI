import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Ayat } from "./Ayat.entity";

@Entity()
export class Surah {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    Title: string;
    @Column()
    Name: string;
    @Column()
    NameAr: string;
    @Column()
    Type: string;
    @OneToMany(() => Ayat, (p) => p.Surah)
    Ayats: Promise<Ayat[]>;
}
