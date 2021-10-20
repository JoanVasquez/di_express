import mongoose, { ConnectOptions } from "mongoose";

const uri = `mongodb://127.0.0.1:27017/di_db`;

export default async () => {
  try {
    const connection = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex: true,
    } as ConnectOptions);
    console.log("Conneted to MONGO");
    return connection;
  } catch (error: any) {
    console.error(error);
  }
};
