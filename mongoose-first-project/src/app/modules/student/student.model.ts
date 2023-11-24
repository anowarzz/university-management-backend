
// import { Schema, model } from 'mongoose';
// import { Guardian, LocalGuardian, Student, UserName } from './student.interface';
// import validator from 'validator';

// // creating a schema for userName
// const userNameSchema = new Schema<UserName>({
//   firstName: {
//     type: String,
//     required: [true, 'First Name Is Required'],
//     trim: true,
//     maxlength: [20, 'FirstName can not be longer than 20 characters'],
//     validate: {
//       validator: function (value: string) {
//         const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
//         return firstNameStr === value;
//       },
//       message: '{VALUE} is not in a Capitalized Format',
//     },
//   },
//   middleName: {
//     type: String,
//     trim: true,
//   },
//   lastName: {
//     type: String,
//     required: [true, 'Last Name Is Required'],
//     trim: true,
//     validate: {
//       validator: (value: string) => validator.isAlpha(value),
//       message: '{VALUE} is not a valid Last Name',
//     },
//   },
// });

// // creating Schema for guardian
// const guardianSchema = new Schema<Guardian>({
//   fatherName: {
//     type: String,
//     required: [true, 'Father Name is required'],
//     trim: true,
//   },
//   fatherOccupation: {
//     type: String,
//     required: [true, 'Father Occupation is required'],
//     trim: true,
//   },
//   fatherContactNo: {
//     type: String,
//     required: [true, 'Father Contact Number is required'],
//     trim: true,
//   },
//   motherName: {
//     type: String,
//     required: [true, 'Mother Name is required'],
//     trim: true,
//   },
//   motherOccupation: {
//     type: String,
//     required: [true, 'Mother Occupation is required'],
//     trim: true,
//   },
//   motherContactNo: {
//     type: String,
//     required: [true, 'Mother Contact Number is required'],
//     trim: true,
//   },
// });

// // creating Schema for localGuardian
// const localGuardianSchema = new Schema<LocalGuardian>({
//   name: { type: String, required: [true, 'Local Guardian Name is required'] },
//   occupation: {
//     type: String,
//     required: [true, 'Local Guardian Occupation is required'],
//     trim: true,
//   },
//   contactNo: {
//     type: String,
//     required: [true, 'Local Guardian Contact Number is required'],
//     trim: true,
//   },
//   address: {
//     type: String,
//     required: [true, 'Local Guardian Address is required'],
//     trim: true,
//   },
// });

// // Creating Student (Main) Schema
// const studentSchema = new Schema<Student>({
//   id: { type: String, required: true, unique: true },
//   name: {
//     type: userNameSchema,
//     required: [true, 'Student Name is required'],
//   },
//   gender: {
//     type: String,
//     enum: {
//       values: ['male', 'female', 'other'],
//       message: '{VALUE} is not valid',
//     },
//     required: true,
//   },
//   dateOfBirth: String,
//   email: {
//     type: String,
//     required: [true, 'Email is required'],
//     unique: true,
//     validate: {
//       validator: (value: string) => validator.isEmail(value),
//       message: '{VALUE} is not a valid email type',
//     },
//   },
//   contactNo: {
//     type: String,
//     required: [true, 'Contact Number is required'],
//     trim: true,
//   },
//   emergencyContactNo: {
//     type: String,
//     required: [true, 'Emergency Contact Number is required'],
//     trim: true,
//   },
//   bloodGroup: {
//     type: String,
//     enum: {
//       values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
//       message:
//         'Invalid blood group "${VALUE}". Please select from A+, A-, B+, B-, AB+, AB-, O+, or O-',
//     },
//   },
//   presentAddress: {
//     type: String,
//     required: [true, 'Present Address is required'],
//     trim: true,
//   },
//   permanentAddress: {
//     type: String,
//     required: [true, 'Permanent Address is required'],
//     trim: true,
//   },
//   guardian: {
//     type: guardianSchema,
//     required: [true, 'Guardian information is required'],
//   },
//   localGuardian: {
//     type: localGuardianSchema,
//     required: [true, 'Local Guardian information is required'],
//   },
//   profileImg: String,
//   isActive: {
//     type: String,
//     enum: ['active', 'blocked'],
//     default: 'active',
//   },
// });

// // Creating a MODEL for Student using the studentSchema

// export const StudentModel = model<Student>('Student', studentSchema);

// ===> Since i am using Joi validation , so the custom validation in model is not required ===> bellow is the simple version of model without custom validation

import { Schema, model } from 'mongoose';
import {
  StudentModel,
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName,
} from './student.interface';
import bcrypt from 'bcrypt'
import config from '../../config';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema<TStudent, StudentModel>({
  id: { type: String, required: [true, "Id is required"], unique: true },
  password: { type: String, required: [true, "Password is required"], unique: true, maxlength: [20, 'password can not be more than 20 characters'] },
  name: userNameSchema,
  gender: ['male', 'female', 'other'],
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: { type: String },
  isActive: ['active', 'blocked'],
});


// ===> Pre save middleware/hook ===> will work  on create() or save() function //
studentSchema.pre('save', async function (next) {

// eslint-disable-next-line @typescript-eslint/no-this-alias
const studentData = this ;

// hashing password and save into db
 studentData.password = await bcrypt.hash(studentData.password, Number(config.bcrypt_salt_rounds) )

next();

})



// ===> Post save middleware/hook ===> //
studentSchema.post('save', async function () {

  // console.log(this, 'post hook middleware, after saving the data');
  
})





// creating a custom static method
studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id });

  return existingUser;
};

// Creating a custom instance method
// studentSchema.methods.isUserExists = async function (id: string){
// const existingUser = await Student.findOne({id})
// return existingUser ;
// }

export const Student = model<TStudent, StudentModel>('Student', studentSchema);
