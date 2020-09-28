import { Module } from '@nestjs/common';
import { BoardModule } from './board/board.module';
import { PostModule } from './post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // type of our database
      host: 'localhost', // database host
      port: 3308, // database host
      username: 'ricky', // username
      password: 'password', // user password
      database: 'db', // name of our database,
      autoLoadEntities: true, // models will be loaded automatically (you don't have to explicitly specify the entities: [] array)
      synchronize: true, // your entities will be synced with the database (ORM will map entity definitions to corresponding SQL tabled), every time you run the application (recommended: disable in the production)
      logging: true,
      cli: {
        migrationsDir: 'src/migrations',
      },
    }),
    BoardModule,
    PostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
