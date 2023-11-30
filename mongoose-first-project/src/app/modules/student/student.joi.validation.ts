// import Joi from 'joi';

// // creating a schema validation using joi
// const userNameValidationSchema = Joi.object({
//   firstName: Joi.string()
//     .trim()
//     .required()
//     .max(20)
//     .regex(/^[A-Z][a-z]*$/, { name: 'capitalized', invert: false })
//     .message(
//       'First Name must start with a capital letter and contain only letters',
//     ),
//   middleName: Joi.string().trim(),
//   lastName: Joi.string()
//     .trim()
//     .required()
//     .regex(/^[A-Za-z]+$/, { name: 'alpha', invert: false })
//     .message('Last Name must contain only letters'),
// });

// // Joi schema for guardian
// const guardianValidationSchema = Joi.object({
//   fatherName: Joi.string().trim().required(),
//   fatherOccupation: Joi.string().trim().required(),
//   fatherContactNo: Joi.string().trim().required(),
//   motherName: Joi.string().trim().required(),
//   motherOccupation: Joi.string().trim().required(),
//   motherContactNo: Joi.string().trim().required(),
// });

// // Joi schema for localGuardian
// const localGuardianValidationSchema = Joi.object({
//   name: Joi.string().trim().required(),
//   occupation: Joi.string().trim().required(),
//   contactNo: Joi.string().trim().required(),
//   address: Joi.string().trim().required(),
// });

// // Joi schema for blood group
// const bloodGroupValidationSchema = Joi.string()
//   .trim()
//   .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-');

// // Joi schema for student
// const studentValidationSchema = Joi.object({
//   id: Joi.string().trim().required(),
//   name: userNameValidationSchema.required(),
//   gender: Joi.string().trim().valid('male', 'female', 'other').required(),
//   dateOfBirth: Joi.string().trim(),
//   email: Joi.string().trim().email().required(),
//   contactNo: Joi.string().trim().required(),
//   emergencyContactNo: Joi.string().trim().required(),
//   bloodGroup: bloodGroupValidationSchema,
//   presentAddress: Joi.string().trim().required(),
//   permanentAddress: Joi.string().trim().required(),
//   guardian: guardianValidationSchema.required(),
//   localGuardian: localGuardianValidationSchema.required(),
//   profileImg: Joi.string().trim(),
//   isActive: Joi.string().trim().valid('active', 'blocked').default('active'),
// });

// export default studentValidationSchema;
