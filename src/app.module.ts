import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SurahsModule } from './controllers/surahs/surahs.module';
import { S3Module } from './s3/s3.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AyatsModule } from './controllers/ayats/ayats.module';
import { WordsModule } from './controllers/words/words.module';
import { TafseersModule } from './controllers/tafseers/tafseers.module';
import { TranslationsModule } from './controllers/translations/translations.module';
import { AudiosModule } from './controllers/audios/audios.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRoot({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "",
            entities: [
                "dist/**/*.entity{.ts,.js}",
                "src/entity/*.entity.ts}"
            ],
            database: "MyIslamDB",
            synchronize: false,
            logging: false,
        }),
        SurahsModule,
        AyatsModule,
        WordsModule,
        TafseersModule,
        TranslationsModule,
        AudiosModule,
        S3Module,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
