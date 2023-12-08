import httpStatus from 'http-status';
import config from '../../config';
import AppError from '../../errors/AppError';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utils';

// Create a student profile on DB
const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  // if password is not given, use default password
  userData.password = password || (config.default_password as string);

  // set student role
  userData.role = 'student';

  // Find academic semester info
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );

  if (!admissionSemester) {
    throw new AppError(httpStatus.NOT_FOUND, 'No Admission Semester Found');
  }

  // set generated id
  userData.id = await generateStudentId(admissionSemester);

  // create a USER
  const newUser = await User.create(userData);

  // create a student
  if (Object.keys(newUser).length) {
    // set id,  _id as user
    payload.id = newUser.id;
    payload.user = newUser._id; //reference id

    const newStudent = await Student.create(payload);

    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
