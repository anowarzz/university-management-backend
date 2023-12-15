import { Schema, model } from 'mongoose';
import { TAcademicSemester } from './academicSemester.interface';
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Months,
} from './academicSemester.constant';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

const academicSemesterSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    required: true,
    enum: AcademicSemesterName,
  },
  code: {
    type: String,
    required: true,
    enum: AcademicSemesterCode,
  },
  year: {
    type: String,
    required: true,
  },
  startMonth: {
    type: String,
    enum: Months,
    required: true,
  },
  endMonth: {
    type: String,
    enum: Months,
    required: true,
  },
});

// Middleware to check if the semester already exists

academicSemesterSchema.pre('save', async function (next) {
  const isSemesterExists = await AcademicSemester.findOne({
    year: this.year,
    name: this.name,
  });

  if (isSemesterExists) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Semester already exists !');
  }

  next();
});

// ===> Query Middlewares  ===> //

// excluding deleted document for find query
academicSemesterSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });

  next();
});
// excluding deleted document findOne query
academicSemesterSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });

  next();
});

// excluding deleted document from aggregation method
academicSemesterSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });

  next();
});

export const AcademicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);
