/* eslint-disable no-console */
import mongoose from 'mongoose';
import config from './app/config';
import app from './app';
import { Server } from 'http';

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    server = app.listen(config.port, () => {
      console.log(
        `PH University Development Server Running On Port ${config.port}`,
      );
    });
  } catch (error) {
    console.log(error);
  }
}

main();

// Server shutdown for unhandled Rejection
process.on('unhandledRejection', () => {
  console.log(`🥺 unhandledRejection is Detected ! shutting down ... `);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

// Server shutdown for uncaught exception
process.on('uncaughtException', () => {
  console.log(`🥺 uncaught exception is Detected ! shutting down ... `);
  process.exit(1);
});
