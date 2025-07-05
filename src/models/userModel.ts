import mongoose, { Schema, Document, model, models } from 'mongoose';

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  role?: 'user' | 'admin'; 
}

// 2. Create the Mongoose schema
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

// 3. Create (or reuse) the model to avoid "OverwriteModelError"
const UserModel = models.User || model<User>('User', userSchema);

// 4. Export the model to use it in your routes
export default UserModel;
