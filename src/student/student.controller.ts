import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.schema';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService){}

    @Post()
    async addStudent(@Body() data: Partial<Student>){
        return this.studentService.createStudent(data);
    }
    @Get()
    async getStudents(){
        return this.studentService.getAllStudents();
    }
    @Get(':id')
     async getStudent(@Param('id') id: string){
        return this.studentService.getStudentById(id);
    }
    @Put(':id')
    async updateStudent(
        @Param('id') id: string,
        @Body() data: Partial<Student>,
    ){
        return this.studentService.updateStudent(id,data);
    }
    @Patch(':id')
    async patchStudent(
        @Param('id') id: string,
        @Body() data: Partial<Student>,
    ){
        return this.studentService.patchStudent(id,data);
    }
}
