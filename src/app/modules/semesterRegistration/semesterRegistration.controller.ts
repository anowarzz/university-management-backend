import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SemesterRegistrationService } from './semesterRegistration.service';

// creating a semester registration
const createSemesterRegistration = catchAsync(async (req, res) => {
  const result =
    await SemesterRegistrationService.createSemesterRegistrationIntoDB(
      req.body,
    );

  // sending response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'semester registered successfully',
    data: result,
  });
});


// Get all semesters
const getAllSemesterRegistrations = catchAsync(async(req, res) => {
  const result = await SemesterRegistrationService.getAllSemesterRegistrationsFromDB(req.query) ;

    // sending response
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester Registration Retrieved Successfully',
      data: result,
    });
})





export const SemesterRegistrationController = {
  createSemesterRegistration,
  getAllSemesterRegistrations
};
