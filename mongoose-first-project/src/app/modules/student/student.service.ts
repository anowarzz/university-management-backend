import { StudentModel } from './student.model';
import { Student } from './student.interface';

// Create a student profile on DB
const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

//Get all students from DB
const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

// Get Single student from database

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
