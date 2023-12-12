import httpStatus from 'http-status';
import { StudentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

// Get all students from database
const getAllStudents = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentsFromDB(req.query);

  // sending response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Data Retrieved Successfully',
    data: result,
  });
});

// Get Single student from database
const getSingleStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(id);

  // sending response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single student data retrieved successfully',
    data: result,
  });
});

// Update student into database

const updateStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { student } = req.body;

  const result = await StudentServices.updateStudentIntoDB(id, student);

  // sending response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Is Updated Successfully',
    data: result,
  });
});

// Delete Single student from database

const deleteStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await StudentServices.deleteStudentFromDB(id);

  // sending response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'student deleted successfully',
    data: result,
  });
});

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
  updateStudent,
};
