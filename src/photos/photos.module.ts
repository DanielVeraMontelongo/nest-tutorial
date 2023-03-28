import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Photo } from './entities/photo.entity';
import { PhotosController } from './photos.controller';
import { PhotosService } from './photos.service';

@Module({
  imports:[TypeOrmModule.forFeature([Photo, User])],
  controllers: [PhotosController],
  providers: [PhotosService]
})
export class PhotosModule {}
