import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('user_profile')
export class Profile{

    @PrimaryGeneratedColumn()
    id:number

    @Column({unique:true})
    first_name:string

    @Column()
    last_name:string

    @Column({nullable:true})
    age:number
}