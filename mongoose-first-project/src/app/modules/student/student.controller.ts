import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import studentValidationSchema from './student.validation';

// Student Profile Create
const createStudent = async (req: Request, res: Response) => {
  try {
    // receiving and validating request data
    const { student: studentData } = req.body;

    // Creating a schema validation using zod

    const zodParsedData = studentValidationSchema.parse(studentData);

    // creating student
    const result = await StudentServices.createStudentIntoDB(zodParsedData);

    // sending response
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

// Get all students
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Student Data Retrieved Successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

// Get Single student from database
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Single student data retrieved',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
