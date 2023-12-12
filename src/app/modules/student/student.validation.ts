import { z } from 'zod';

// ==> For creating a Student ==>

const createUserNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: 'First Name is required' })
    .max(20, { message: 'First Name cannot be longer than 20 characters' })
    .refine((value) => /^[A-Z]/.test(value), {
      message: 'First Name should start with a capital letter',
    }),
  middleName: z.string().trim(),
  lastName: z
    .string()
    .trim()
    .min(1, { message: 'Last Name is required' })
    .max(20, { message: 'Last Name cannot be longer than 20 characters' }),
});

const createGuardianValidationSchema = z.object({
  fatherName: z.string().trim().min(1, { message: 'Father Name is required' }),
  fatherOccupation: z
    .string()
    .trim()
    .min(1, { message: 'Father Occupation is required' }),
  fatherContactNo: z
    .string()
    .trim()
    .min(1, { message: 'Father Contact Number is required' }),
  motherName: z.string().trim().min(1, { message: 'Mother Name is required' }),
  motherOccupation: z
    .string()
    .trim()
    .min(1, { message: 'Mother Occupation is required' }),
  motherContactNo: z
    .string()
    .trim()
    .min(1, { message: 'Mother Contact Number is required' }),
});

const createLocalGuardianValidationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: 'Local Guardian Name is required' }),
  occupation: z
    .string()
    .trim()
    .min(1, { message: 'Local Guardian Occupation is required' }),
  contactNo: z
    .string()
    .trim()
    .min(1, { message: 'Local Guardian Contact Number is required' }),
  address: z
    .string()
    .trim()
    .min(1, { message: 'Local Guardian Address is required' }),
});

// student full profile validation to create a student
export const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20).optional(),
    student: z.object({
      name: createUserNameValidationSchema,

      gender: z.enum(['male', 'female', 'other']),

      dateOfBirth: z.string().optional(),

      email: z
        .string()
        .trim()
        .email('Invalid email format')
        .min(1, { message: 'Email is required' }),

      contactNo: z
        .string()
        .trim()
        .min(1, { message: 'Contact Number is required' }),

      emergencyContactNo: z
        .string()
        .trim()
        .min(1, { message: 'Emergency Contact Number is required' }),

      bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),

      presentAddress: z
        .string()
        .trim()
        .min(1, { message: 'Present Address is required' }),

      permanentAddress: z
        .string()
        .trim()
        .min(1, { message: 'Permanent Address is required' }),

      guardian: createGuardianValidationSchema,

      localGuardian: createLocalGuardianValidationSchema,
      admissionSemester: z.string(),

      profileImg: z.string().trim().optional(),
    }),
  }),
});

// ====> For Updating a student ===>
const updateUserNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20).optional(),
  middleName: z.string().optional(),
  lastName: z.string().optional(),
});

const updateGuardianValidationSchema = z.object({
  fatherName: z.string().optional(),
  fatherOccupation: z.string().optional(),
  fatherContactNo: z.string().optional(),
  motherName: z.string().optional(),
  motherOccupation: z.string().optional(),
  motherContactNo: z.string().optional(),
});

const updateLocalGuardianValidationSchema = z.object({
  name: z.string().optional(),
  occupation: z.string().optional(),
  contactNo: z.string().optional(),
  address: z.string().optional(),
});

export const updateStudentValidationSchema = z.object({
  body: z.object({
    student: z.object({
      name: updateUserNameValidationSchema,
      gender: z.enum(['male', 'female', 'other']).optional(),
      dateOfBirth: z.string().optional(),
      email: z.string().email().optional(),
      contactNo: z.string().optional(),
      emergencyContactNo: z.string().optional(),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z.string().optional(),
      permanentAddress: z.string().optional(),
      guardian: updateGuardianValidationSchema.optional(),
      localGuardian: updateLocalGuardianValidationSchema.optional(),
      admissionSemester: z.string().optional(),
      profileImg: z.string().optional(),
      academicDepartment: z.string().optional(),
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
  updateStudentValidationSchema,
};
