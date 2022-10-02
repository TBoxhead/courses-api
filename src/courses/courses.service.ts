import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/upate-course.dto';
import { Course, CourseDocument } from './schema/course.schema';

@Injectable()
export class CoursesService {
    constructor(@InjectModel(Course.name) private readonly model: Model<CourseDocument>) {}

    async findAll(): Promise<Course[]> {
        return await this.model.find().exec();
    }
    
    async findOne(id: string): Promise<Course | null> {
        return await this.model.findById(id).exec();
    }

    async create(createTodoDto: CreateCourseDto): Promise<Course> {
        return await new this.model({
            ...createTodoDto,
            createdAt: new Date(),
        }).save();
    }

    async update(id: string, updateTodoDto: UpdateCourseDto): Promise<Course | null> {
        return await this.model.findByIdAndUpdate(id, updateTodoDto).exec();
    }

    async delete(id: string): Promise<Course | null> {
        return await this.model.findByIdAndDelete(id).exec();
    }
}
