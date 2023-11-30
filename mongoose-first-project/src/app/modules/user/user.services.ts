import config from '../../config';
import { TStudent } from '../student/student.interface';
import { TNewUser } from './user.interface';
import { User } from './user.model';

// Create a student profile on DB
const createStudentIntoDB = async (password: string, studentData: TStudent) => {
 
// create a user object    
const user : TNewUser = {} ;


// if password is not given, use default password
user.password = password || (config.default_password as string) 

// set student role
user.role = 'student'

// set manually generated id
user.id = '2030100001'


// create a USER
  const result = await User.create(user);

// create a student
if(Object.keys(result).length){
// set id,  _id as user
studentData.id = result.id ;
studentData.user = result.id ;
}


  return result;



  
};

export const UserServices = {
  createStudentIntoDB,
};
