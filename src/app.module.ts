import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { Profile } from './users/entities/profile.entity';
import { Photo } from './photos/entities/photo.entity';
import { PhotosModule } from './photos/photos.module';
import { CategoriesModule } from './categories/categories.module';
import { BooksModule } from './books/books.module';
import { Book } from './books/entities/books.entity';
import { Category } from './categories/entities/categories.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'codenotch',
      database:'nestprueba',
      entities: [User, Profile, Photo, Book, Category],
      synchronize:true
    }),
    UsersModule,
    PhotosModule,
    CategoriesModule,
    BooksModule
  ]
})
export class AppModule {}
