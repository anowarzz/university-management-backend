import { z } from 'zod';

const academicFacultyValidationSchema = z.object({
  name: z.string({
    required_error: 'Academic Faculty is Required',
    invalid_type_error: 'Academic Faculty Must be String',
  }),
});

export const AcademicFacultyValidations = {
  academicFacultyValidationSchema,
};
