
import studentValidationSchema from "../student/student.validation";
import { UserServices } from "./user.services";

// Creating a Student Profile
const createStudent = async (req: Request, res: Response) => {
    try {
      // receiving and validating request data
      const { password ,student: studentData } = req.body;
  
      // Creating a schema validation using zod
    //   const zodParsedData = studentValidationSchema.parse(studentData);
  
      // creating student
      const result = await UserServices.createStudentIntoDB(
        password, 
        studentData
      );
  
      // sending response
      res.status(200).json({
        success: true,
        message: 'Student is created successfully',
        data: result,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message || 'Something went wrong',
        error: err,
      });
    }
  };
  