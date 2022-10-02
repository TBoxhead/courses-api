import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CourseType } from '../types/course.type';
import { LocationType } from '../types/location.type';
import { TimeType } from '../types/time.type';

export type CourseDocument = Course & Document;

@Schema()
export class Course {
  @Prop({ required: true })
  title: string;

  @Prop()
  type?: CourseType;

  @Prop()
  profesorName?: string;

  @Prop({ required: true })
  time: TimeType;

  @Prop({ required: true })
  dayOfTheWeek: number;

  @Prop()
  anyOtherDay?: boolean;

  @Prop()
  specialEvent?: boolean;

  @Prop({ required: true })
  location?: LocationType;

}

export const CourseSchema = SchemaFactory.createForClass(Course);