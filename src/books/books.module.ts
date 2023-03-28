import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/categories/entities/categories.entity';
import { BooksController } from './books.controller';
import { Book } from './entities/books.entity';
import { BooksService } from './books.service';

@Module({
  imports:[TypeOrmModule.forFeature([Book,Category])],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
