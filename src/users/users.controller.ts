import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProfileDto } from './dto/profile.dto';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){}

    @Post()
    createUser(@Body() newUser:UserDto): Promise<UserDto>{
        return this.userService.createUser(newUser)
    }

    @Get()
    getUsers(): Promise<UserDto[]>{
        return this.userService.getUsers();
    }

    @Get(':id')
    getUser(@Param('id',ParseIntPipe) id:number): Promise<UserDto>{
        return this.userService.getUser(id);
    }

    @Delete()
    deleteUser(@Body('id',ParseIntPipe) id:number){
        return this.userService.deleteUser(id)
    }

    @Put()
    putUser(@Body() user:UserDto){
        return this.userService.updateUser(user);
    }

    @Post('/profile')
    postProfile(@Body()profile:ProfileDto){
        return this.userService.createProfile(profile)
    }
}
