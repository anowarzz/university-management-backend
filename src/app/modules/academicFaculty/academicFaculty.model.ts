import { Schema, model } from 'mongoose';
import { TAcademicFaculty } from './academicFaculty.interface';

const academicFacultySchema = new Schema<TAcademicFaculty>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

// ===> Query Middlewares  ===> //

// excluding deleted document for find query
academicFacultySchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });

  next();
});
// excluding deleted document findOne query
academicFacultySchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });

  next();
});

// excluding document from aggregation method
academicFacultySchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });

  next();
});

export const AcademicFaculty = model<TAcademicFaculty>(
  'AcademicFaculty',
  academicFacultySchema,
);
