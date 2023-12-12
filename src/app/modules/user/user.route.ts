import { createStudentValidationSchema } from './../student/student.validation';
import { createAdminValidationSchema } from '../Admin/admin.validation';
import express from 'express';
import { UserControllers } from './user.controller';

import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

// create student
router.post(
  '/create-student',
  validateRequest(createStudentValidationSchema),
  UserControllers.createStudent,
);

// create admin
router.post(
  '/create-admin',
  validateRequest(createAdminValidationSchema),
  UserControllers.createAdmin,
);

export const UserRoutes = router;
