import { z } from 'zod';

const PreRequisiteCourseValidationSchema = z.object({
  course: z.string(),
  isDeleted: z.boolean().optional(),
});

// Create Course ==> Zod Validation
const createCourseValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    prefix: z.string(),
    code: z.number(),
    credits: z.number(),
    preRequisiteCourses: z.array(PreRequisiteCourseValidationSchema).optional(),
    isDeleted: z.boolean().optional(),
  }),
});

// Update course ==> zod validation
const updateCourseValidationSchema = createCourseValidationSchema.partial();

export const CourseValidations = {
  createCourseValidationSchema,
  updateCourseValidationSchema,
};
