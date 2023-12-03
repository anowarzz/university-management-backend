import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt';

// Creating USER Schema
const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['student', 'faculty', 'admin'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// Pre save middleware/hook ===> will work  on create() or save() function //
userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const studentData = this;

  // hashing password and save into db
  studentData.password = await bcrypt.hash(
    studentData.password,
    Number(config.bcrypt_salt_rounds),
  );

  next();
});

//   // Post save middleware/hook //
//   userSchema.post('save', async function (doc, next) {
//     doc.password = '';
//     next();
//   });

// creating USER model
export const User = model<TUser>('User', userSchema);
