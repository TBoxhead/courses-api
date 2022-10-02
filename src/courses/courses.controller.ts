import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/upate-course.dto';

@Controller('courses')
export class CoursesController {
    constructor(private readonly service: CoursesService) {}

    @Get()
    async index() {
        return await this.service.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return await this.service.findOne(id);
    }

    @Post()
    async create(@Body() createTodoDto: CreateCourseDto) {
        return await this.service.create(createTodoDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateTodoDto: UpdateCourseDto) {
        return await this.service.update(id, updateTodoDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.service.delete(id);
    }
}
