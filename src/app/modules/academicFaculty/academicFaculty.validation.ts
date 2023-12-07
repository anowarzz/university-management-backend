import { z } from 'zod';

// Zod Validation for creating Academic Faculty
const createAcademicFacultyValidationSchema = z.object({
  name: z.string({
    required_error: 'Academic Faculty is Required',
    invalid_type_error: 'Academic Faculty Must be String',
  }),
});

// Zod Validation for Updating Academic Faculty
const updateAcademicFacultyValidationSchema = z.object({
  name: z.string({
    invalid_type_error: 'Academic Faculty Must be String',
  }),
});

export const AcademicFacultyValidations = {
  createAcademicFacultyValidationSchema,
  updateAcademicFacultyValidationSchema,
};
