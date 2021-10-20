import mongoose from "mongoose";

export interface UserI {
  name: string;
  email: string;
  password: string;
}

export default interface UserSI extends UserI, mongoose.Document {}
