import { Schema } from "mongoose";
import mongoose from "mongoose";
import ModelI from "../interfaces/model.interface";
import UserSI from "../interfaces/user.interface";
import { injectable, singleton } from "tsyringe";

@singleton()
@injectable()
export default class UserModel implements ModelI {
  schema: mongoose.Schema<any> = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      posts: {
        type: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "posts",
          },
        ],
      },
    },
    {
      timestamps: true,
    }
  );
  model: mongoose.Model<any, {}> = mongoose.model<UserSI>("users", this.schema);
}
