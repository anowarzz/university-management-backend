import httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';

// Get all students
const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    // sending response
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student Data Retrieved Successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// Get Single student from database
const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.getSingleStudentFromDB(studentId);

    // sending response
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single student data retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// Get Single student from database
const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.deleteStudentFromDB(studentId);

    // sending response
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'student deleted successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err) {
    next(err);
  }
};

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
