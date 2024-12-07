import mongoose from 'mongoose';
import { IUser } from '../interfaces/user.interface';

const UserSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true, 
    unique: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

export const User = mongoose.model<IUser>('User', UserSchema);
