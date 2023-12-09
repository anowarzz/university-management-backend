/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // Setting default values
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Something went wrong';

  type TErrorSource = {
    path: string | number;
    message: string;
  }[];

  const errorSource: TErrorSource = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ];

  if (err instanceof ZodError) {
    statusCode = 400;
    message = 'Ami zod error';
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSource,
    error: err,
  });
};

export default globalErrorHandler;

/*/ 
success
message
errorSource: [
  path: ' ',
  message: ' '
]
stack
 /*/
