import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('photos')
export class Photo{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    text:string

    @Column()
    url:string

    @ManyToOne(() => User, (user) => user.photos)
    user: User
}