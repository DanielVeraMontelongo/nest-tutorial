import { Category } from 'src/categories/entities/categories.entity';
import {
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    ManyToMany, 
    JoinTable
} from 'typeorm';


@Entity('books')
export class Book{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    description:string

    @Column()
    author:string

    @ManyToMany(() => Category, (category) => category.books)
    categories: Category[]
}