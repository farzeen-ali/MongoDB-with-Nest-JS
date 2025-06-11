import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    create(){
        return this.userService.createUser();
    }

    @Get()
    getAll(){
        return this.userService.findAll();
    }

}
