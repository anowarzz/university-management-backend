import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

// when request hits this route -> will call controller function to create a student
router.post('/create-student', StudentControllers.createStudent);


export const StudentRoutes = router ;