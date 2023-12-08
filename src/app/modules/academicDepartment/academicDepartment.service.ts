import { AcademicDepartment } from './academicDepartment..model';
import { TAcademicDepartment } from './academicDepartment.interface';

// Creating an academic Department into db
const createAcademicDepartmentIntoDB = async (payload: TAcademicDepartment) => {
  const result = await AcademicDepartment.create(payload);
  return result;
};

// Get all academic Department from DB
const getAllAcademicDepartmentsFromDB = async () => {
  const result = await AcademicDepartment.find().populate('academicFaculty');
  return result;
};

// Get a single Department from DB
const getSingleAcademicDepartmentFromDB = async (id: string) => {
  const result =
    await AcademicDepartment.findById(id).populate('academicFaculty');
  return result;
};

// Update an academic Department into DB
const updateAcademicDepartmentIntoDB = async (
  id: string,
  payload: Partial<TAcademicDepartment>,
) => {
  const result = await AcademicDepartment.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );
  return result;
};

export const AcademicDepartmentServices = {
  createAcademicDepartmentIntoDB,
  getAllAcademicDepartmentsFromDB,
  getSingleAcademicDepartmentFromDB,
  updateAcademicDepartmentIntoDB,
};
