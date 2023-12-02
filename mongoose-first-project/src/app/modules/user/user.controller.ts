import httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.services';
import sendResponse from '../../utils/sendResponse';

// Creating a Student Profile
const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // receiving and validating request data
    const { password, student: studentData } = req.body;

    // Creating a schema validation using zod
    //   const zodParsedData = studentValidationSchema.parse(studentData);

    // creating student
    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );

    // sending response
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student Is Created Successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserControllers = {
  createStudent,
};
