import { Request, Response } from 'express';
import { StudentServices } from './student.service';

// Student Profile Create
const createStudent = async (req: Request, res: Response) => {
  try {
    // creating a student
    const { student: studentData } = req.body;
    const result = await StudentServices.createStudentIntoDB(studentData);

    // sending response
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
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
    console.log(error);
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
    console.log(error);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
