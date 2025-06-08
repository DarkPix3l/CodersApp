import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

export const startDatabase = async () =>{
   try {
     await mongoose.connect(MONGO_URL);
     console.log("connected to database");
   } catch (error) {
    console.log("not connectded to database", error.message);
   }
}