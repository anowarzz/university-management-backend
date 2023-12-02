import httpStatus from 'http-status'; 
import { UserServices } from './user.services';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

// Creating a Student Profile
const createStudent = catchAsync(async (req, res) => {

  const { password, student: studentData } = req.body;

  // Creating a schema validation using zod
  //   const zodParsedData = studentValidationSchema.parse(studentData);

  // creating student
  const result = await UserServices.createStudentIntoDB(password, studentData);

  // sending response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Is Created Successfully',
    data: result,
  });
});

export const UserControllers = {
  createStudent,
};
