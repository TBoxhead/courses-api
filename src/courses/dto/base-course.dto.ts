import { CourseType } from "../types/course.type";
import { LocationType } from "../types/location.type";
import { TimeType } from "../types/time.type";

export class BaseCourseDto {
  title: string;

  type?: CourseType;

  profesorName?: string;

  time: TimeType;

  dayOfTheWeek: number;

  anyOtherDay?: boolean;

  specialEvent?: boolean;

  location?: LocationType;
}