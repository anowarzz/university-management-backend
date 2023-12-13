import { Types } from 'mongoose';

// Type definition for Pre Requisite Courses
export type TPreRequisiteCourses = {
  course: Types.ObjectId;
  isDeleted: boolean;
};

// Type definition for Course
export type TCourse = {
  title: string;
  prefix: string;
  code: number;
  credits: number;
  preRequisiteCourses: [TPreRequisiteCourses];
  isDeleted: boolean;
};
