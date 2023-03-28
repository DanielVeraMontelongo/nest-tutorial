import {
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    OneToOne,
    JoinColumn,
    OneToMany
} from 'typeorm';
import { Photo } from '../../photos/entities/photo.entity';

import { Profile } from './profile.entity';

@Entity({name: 'users'})
export class User {

    @PrimaryGeneratedColumn()
    id:number

    @Column({unique:true})
    username:string

    @Column()
    password:string

    @Column({type: 'datetime', default: ()=> 'CURRENT_TIMESTAMP'})
    createdAt:Date

    @Column({nullable: true})
    authStrategy:string

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile

    @OneToMany(() => Photo, (photo) => photo.user)
    photos: Photo[]
}