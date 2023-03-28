import { Book } from 'src/books/entities/books.entity';
import {
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    ManyToMany, 
    JoinTable
} from 'typeorm';


@Entity('categories')
export class Category{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    description:string

    @ManyToMany(() => Book, (book) => book.categories)
    @JoinTable({
        name: "books_entities",
        joinColumn:{
            name: "entity_id"
        }, inverseJoinColumn:{
            name:"book_id"
        }
    })
    books: Book[]
}