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

// Update a Course
router.patch(
  '/:id',
  validateRequest(CourseValidations.updateCourseValidationSchema),
  CourseControllers.updateCourse,
);

// assign faculties to a course
router.put(
  '/:courseId/assign-faculties',
  validateRequest(CourseValidations.facultiesWithCourseValidationSchema),
  CourseControllers.assignFacultiesWithCourse,
);
// remove faculties to a course
router.delete(
  '/:courseId/remove-faculties',
  validateRequest(CourseValidations.facultiesWithCourseValidationSchema),
  CourseControllers.removeFacultiesFromCourse,
);

router.delete('/:id', CourseControllers.deleteCourse);

export const CourseRoutes = router;
