import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.services';

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
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserControllers = {
  createStudent,
};
