import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from 'src/books/entities/books.entity';
import { Category } from './entities/categories.entity';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

@Module({
  imports:[TypeOrmModule.forFeature([Category, Book])],
  controllers: [CategoriesController],
  providers: [CategoriesService]
})
export class CategoriesModule {}
