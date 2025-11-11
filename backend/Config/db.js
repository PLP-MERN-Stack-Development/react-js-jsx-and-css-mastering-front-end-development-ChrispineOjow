import mongoose from 'mongoose';
import'dotenv/config';

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected successfully");
    }catch(error){
        console.error("Database connection failed:", error);
    }
}

export default connectDB;