import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CourseValidations } from './course.validation';
import { CourseControllers } from './course.controller';

const router = express.Router();

// Creating A Course
router.post(
  '/create-course',
  validateRequest(CourseValidations.createCourseValidationSchema),
  CourseControllers.createCourse,
);

// Get all Courses
router.get('/', CourseControllers.getAllCourses);

// Get single Course
router.get('/:id', CourseControllers.getSingleCourse);

// Update One Academic Faculty
// router.patch(
//   '/:facultyId',
//   validateRequest(
//     AcademicFacultyValidations.updateAcademicFacultyValidationSchema,
//   ),
//   AcademicFacultyControllers.updateAcademicFaculty,
// );

router.delete('/:id', CourseControllers.deleteCourse);

export const CourseRoutes = router;
