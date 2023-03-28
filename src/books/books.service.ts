import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/entities/categories.entity';
import { In, Repository } from 'typeorm';
import { booksDto } from './dto/book.dto';
import { Book } from './entities/books.entity';

@Injectable()
export class BooksService {

    constructor(
        @InjectRepository(Book) private bookRepository:Repository<Book>,
        @InjectRepository(Category) private categoryRepository:Repository<Category>
        ){}

        async postBook(book:booksDto):Promise<Book>{

         let categories: Category[] = await this.categoryRepository.find({where:{id: In(book.categoryIds)}})

         let newBook:Book = this.bookRepository.create(book);
         newBook.categories = categories
         return this.bookRepository.save(newBook)
      
        }

        getBook(id:number):Promise<Book[]>{
            return this.bookRepository.find({where:{id:id}})
        }

        getFullBook(id:number):Promise<Book[]>{
            return this.bookRepository.find({
                relations:{
                    categories:true
                },
                where:{
                    id:id
                }
            })
        }
}
