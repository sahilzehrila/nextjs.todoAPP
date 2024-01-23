import mongoose from "mongoose";

export const CDB = async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/todoapp");
    console.log("Connected to database (☞ﾟヮﾟ)☞")
}