import { TCourse } from './course.interface';
import { Course } from './course.model';

// Create a course into DB
const createCourseIntoDB = async (payload: TCourse) => {
  const result = await Course.create(payload);
  return result;
};

// Get all Courses from DB
const getAllCoursesFromDB = async () => {
  const result = await Course.find();
  return result;
};

// Get Single Course from DB
const getSingleCourseFromDB = async (id: string) => {
  const result = await Course.findById(id);
  return result;
};

// Delete a Course from DB
const deleteCourseFromDB = async (id: string) => {
  const result = await Course.findByIdAndUpdate(
    id,
    {
      isDeleted: true,
    },
    {
      new: true,
    },
  );
  return result;
};

export const CourseServices = {
  createCourseIntoDB,
  getAllCoursesFromDB,
  getSingleCourseFromDB,
  deleteCourseFromDB,
};
