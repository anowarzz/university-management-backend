import httpStatus from 'http-status';
import { UserServices } from './user.services';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

// Creating a Student Profile
const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;

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

// create Admin
const createAdmin = catchAsync(async (req, res) => {
  const { password, admin: adminData } = req.body;

  const result = await UserServices.createAdminIntoDB(password, adminData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin is created successfully',
    data: result,
  });
});

export const UserControllers = {
  createStudent,
  createAdmin,
};
