import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentValidations } from './academicDepartment..validation';
import { AcademicDepartmentControllers } from './academicDepartment.controller';

const router = express.Router();

// Creating A Department
router.post(
  '/create-academic-department',
  // validateRequest(
  //   AcademicDepartmentValidations.createAcademicDepartmentValidationSchema,
  // ),
  AcademicDepartmentControllers.createAcademicDepartment,
);

// Get all Academic Departments
router.get('/', AcademicDepartmentControllers.getAllAcademicDepartment);

// Get single Academic Department
router.get(
  '/:departmentId',
  AcademicDepartmentControllers.getSingleAcademicDepartment,
);

// Update One Academic Department
router.patch(
  '/:departmentId',
  validateRequest(
    AcademicDepartmentValidations.updateAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentControllers.updateAcademicDepartment,
);

export const AcademicDepartmentRoutes = router;
