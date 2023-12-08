import express from 'express';
import { StudentControllers } from './student.controller';
import validateRequest from '../../middlewares/validateRequest';
import { updateStudentValidationSchema } from './student.validation';

const router = express.Router();

// get all students route
router.get('/', StudentControllers.getAllStudents);

//get a single student
router.get('/:studentId', StudentControllers.getSingleStudent);

//update a single student
router.patch(
  '/:studentId',
  validateRequest(updateStudentValidationSchema),
  StudentControllers.updateStudent,
);

//get a single student
router.delete('/:studentId', StudentControllers.deleteStudent);

export const StudentRoutes = router;
