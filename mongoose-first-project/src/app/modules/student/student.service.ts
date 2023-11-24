import { Student } from './student.model';
import { TStudent } from './student.interface';

// Create a student profile on DB
const createStudentIntoDB = async (studentData: TStudent) => {
  // ===> custom static method ===>

  
  if(await Student.isUserExists(studentData.id)){
    throw new Error ('User already exists')
  }

  const result = await Student.create(studentData)
return result ;




  //===> using custom instance method ===>//
//   const student = new Student(studentData);
  
// if(await student.isUserExists(studentData.id)){
//   throw new Error ("User already exists")
// }
//   const result = await student.save();
//   return result;
};






//Get all students from DB
const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};





// Get Single student from database

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
