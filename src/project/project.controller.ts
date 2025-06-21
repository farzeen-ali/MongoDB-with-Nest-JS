import { Controller, Get, Post } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
    constructor(private readonly service: ProjectService){}

    @Post('seed')
    seedData(){
        return this.service.seed();
    }
    @Get('developers')
    getDevelopers(){
        return this.service.getDevelopers();
    }
    @Get()
    getProject(){
        return this.service.getProjects();
    }
}
