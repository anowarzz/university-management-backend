/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction } from 'express';
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

// Parser
app.use(express.json());
app.use(cors());

// Application routes
app.use('/api/v1', router);

// Testing API HomeRoute
const test = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to P-HERO University Server',
    note: 'Winter is coming',
  });
};

app.get('/', test);

// Error Handlers
app.use(globalErrorHandler);
app.use(notFound);

export default app;
