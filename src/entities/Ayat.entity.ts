import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Translation } from "./Translation.entity";
import { Surah } from "./Surah.entity";
import { Audio } from "./Audio.entity";
import { Tafseer } from "./Tafseer.entity";
import { Word } from "./Word.entity";


@Entity()
export class Ayat {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    Text: string;
    @Column()
    Pronunciation: string;
    @ManyToOne(() => Surah, (p) => p.Ayats)
    Surah: Surah;

    @OneToMany(() => Word, (p) => p.Ayat)
    Words: Promise<Word[]>;

    @OneToMany(() => Audio, (p) => p.Ayat)
    Audios: Promise<Audio[]>;

    @OneToMany(() => Tafseer, (p) => p.Ayat)
    Tafseers: Promise<Tafseer[]>;

    @OneToMany(() => Translation, (p) => p.Ayat)
    Translations: Promise<Translation[]>;
}
