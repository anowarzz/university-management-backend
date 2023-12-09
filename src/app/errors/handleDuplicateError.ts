import { TErrorSources, TGenericErrorResponse } from '../interface/error';

const handleDuplicateError = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
): TGenericErrorResponse => {
  const statusCode = 400;

  //Extract error message from duplicate error.
  const match = err.message.match(/"([^"]*)"/);

  const extractedMessage = match && match[1];

  const errorSources: TErrorSources = [
    {
      path: '',
      message: `${extractedMessage} already exists !`,
    },
  ];

  return {
    statusCode,
    message: 'Invalid Input or ID',
    errorSources,
  };
};

export default handleDuplicateError;
