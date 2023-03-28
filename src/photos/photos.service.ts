import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { PhotoDto } from './dto/photo.dto';
import { Photo } from './entities/photo.entity';

@Injectable()
export class PhotosService {

    constructor(
        @InjectRepository(Photo)
        private photoRepository: Repository<Photo>,

        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}


    getPhotos():Promise<PhotoDto[]>{
        return this.photoRepository.find();
    }

    async postPhoto(photo:PhotoDto):Promise<PhotoDto>{

        let user: User = await this.userRepository.findOne({
            where: {
                id: photo.userId
            }
        })

        let newPhoto = this.photoRepository.create(photo)
        newPhoto.user = user;
        
        return this.photoRepository.save(newPhoto);
    }
}
