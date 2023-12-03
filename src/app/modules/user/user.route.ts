import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';
import { AnyZodObject } from 'zod';

const router = express.Router();



const validateRequest = (schema : AnyZodObject) => {

return async (req: Request, res:Response, next:NextFunction) => {


  // Creating a schema validation using zod
    const zodParsedData = await studentValidationSchema.parseAsync({
        body: req.body 
    });
    // next()
}
}



router.post('/create-student', validateRequest("ValidateRequest"), UserControllers.createStudent);

export const UserRoutes = router;
