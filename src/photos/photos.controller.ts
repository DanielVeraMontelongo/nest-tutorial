import { Body, Controller, Get, Post } from '@nestjs/common';
import { PhotoDto } from './dto/photo.dto';
import { PhotosService } from './photos.service';
import { UserDto } from 'src/users/dto/user.dto';
@Controller('photos')
export class PhotosController {

    constructor(private photoService: PhotosService){}

    @Get()
    getPhotos():Promise<PhotoDto[]>{
        return this.photoService.getPhotos();
    }

    @Post()
    postPhoto(@Body() photo: PhotoDto):Promise<PhotoDto>{
        return this.photoService.postPhoto(photo)
    }
}
