import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { booksDto } from './dto/book.dto';
import { Book } from './entities/books.entity';

@Controller('books')
export class BooksController {

    constructor(private bookService:BooksService){}

    @Post()
    postBook(@Body() book:booksDto):Promise<Book>{
        return this.bookService.postBook(book)
    }

    @Get(':id')
    getBook(@Param('id', ParseIntPipe) id:number):Promise<Book[]>{
        console.log(id);
        
        return this.bookService.getFullBook(id)
    }
}
