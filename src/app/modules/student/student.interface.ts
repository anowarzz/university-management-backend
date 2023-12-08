import { Model, Types } from 'mongoose';

//userName type
export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

// Creating a type for guardian
export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

//localGuardian type
export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

// Creating an Type for student
export type TStudent = {
  id: string;
  user: Types.ObjectId;
  name: TUserName;
  gender: 'male' | 'female' | 'other';
  dateOfBirth: Date;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImg?: string;
  admissionSemester: Types.ObjectId;
  academicDepartment: Types.ObjectId;
  isDeleted: boolean;
};

// For creating custom static method
export interface StudentModel extends Model<TStudent> {
  // eslint-disable-next-line no-unused-vars
  isUserExists(id: string): Promise<TStudent | null>;
}

// Declaring types and returns  for custom instance
// export type StudentMethods = {
//   isUserExists(id: string) : Promise<TStudent | null>
// }

// export for custom instance
// export type StudentModel = Model<TStudent, Record<string, never>, StudentMethods>
