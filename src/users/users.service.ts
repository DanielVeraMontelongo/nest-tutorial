import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { Profile } from './entities/profile.entity';
import { ProfileDto } from './dto/profile.dto';
@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) 
        private userRepository: Repository<User>,
        @InjectRepository(Profile)
        private profileRepository: Repository<Profile>
    ){}

    createUser(user:UserDto): Promise<UserDto>{

       let newUser = this.userRepository.create(user);
       
       return this.userRepository.save(newUser); 
    }

    getUsers(): Promise<UserDto[]>{
       return this.userRepository.find();
    }

    getUser(id:number): Promise<UserDto> {
        return this.userRepository.findOne({
            where: {
                id: id
            }
        })
    }

    deleteUser(id:number){
       return this.userRepository.delete({ id });
    }

    updateUser(user:UserDto){
        return this.userRepository.update({id: user.id}, user);
    }

    async createProfile(profileDto:ProfileDto){
        let user: User = await this.userRepository.findOne({
            where: {
                id: profileDto.id_usuario
            }
        })

        let profile = this.profileRepository.create(profileDto);
        let profileSaved = await this.profileRepository.save(profile)
        user.profile = profileSaved;

        return this.userRepository.save(user);
    }
}
