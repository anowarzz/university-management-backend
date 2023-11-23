//userName type
export type UserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

// Creating a type for guardian
export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

//localGuardian type
export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

// Creating an Type for student
export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female' | 'other';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};
