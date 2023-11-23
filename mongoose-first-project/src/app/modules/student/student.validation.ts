import { z } from 'zod';

const userNameValidationSchema = z.object({
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

const guardianValidationSchema = z.object({
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

const localGuardianValidationSchema = z.object({
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

const studentValidationSchema = z.object({
  id: z.string().trim().min(1, { message: 'ID is required' }),

  name: userNameValidationSchema,

  gender: z.enum(['male', 'female', 'other']),

  dateOfBirth: z
    .string()
    .trim()
    .min(1, { message: 'Date of Birth is required' }),

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

  guardian: guardianValidationSchema,

  localGuardian: localGuardianValidationSchema,

  profileImg: z.string().trim().optional(),

  isActive: z.enum(['active', 'blocked']).default('active'),
});

export default studentValidationSchema;
