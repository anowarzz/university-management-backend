import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

// create student route
router.post('/create-student', StudentControllers.createStudent);

// get all students route
router.get('/', StudentControllers.getAllStudents);

//get a single student
router.get('/:studentId', StudentControllers.getSingleStudent);

//get a single student
router.delete('/:studentId', StudentControllers.deleteStudent);

export const StudentRoutes = router;
