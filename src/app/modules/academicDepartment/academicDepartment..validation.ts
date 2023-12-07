import { z } from 'zod';

// Zod validation while creating academic department
const createAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Department Name  is Required',
      invalid_type_error: 'Department Name Must Has To Be a String!',
    }),
    academicFaculty: z.string({
      required_error: 'Academic Faculty Is Required',
      invalid_type_error: 'Academic Faculty Must Has to be a String',
    }),
  }),
});

// Zod validation while updating academic Department
const updateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Department Name Must Has To Be a String!',
      })
      .optional(),
    academicFaculty: z
      .string({
        invalid_type_error: 'Academic Faculty Must Has to be a String',
      })
      .optional(),
  }),
});

export const AcademicDepartmentValidations = {
  createAcademicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema,
};
