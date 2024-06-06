import mongoose from 'mongoose';
import { FormData } from '../interface/form.interface';

export const FormSchema = new mongoose.Schema<FormData>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    required: true,
    type: String,
  },
  profilePicture: {
    type: String,
    required: true,
  },
});
