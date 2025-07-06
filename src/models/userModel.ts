import mongoose, { Schema, Document, model, models } from 'mongoose';

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  role?: 'user' | 'admin'; 
}

const userSchema = new Schema<User>({
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
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
}, { timestamps: true }); 

const UserModel = models.User || model<User>('User', userSchema);

export default UserModel;
