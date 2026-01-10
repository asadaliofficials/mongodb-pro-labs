import mongoose from "mongoose";
import { MONGODB_URI } from "./env.config.js";

const connectDB = () =>{
  mongoose.connect(MONGODB_URI).then(() => {
    console.log("Database connected");
  }).catch((err) => {
    console.log(err);
  });
};

export default connectDB;