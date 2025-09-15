import mongoose from "mongoose";

//Function to connect tothe mongoDB database

export const connectDB = async ()=> {
    try {
        mongoose.connection.on('connected',()=> console.log("Database Connected"));
        await mongoose.connect(`${process.env.MONGODB_URI}/mern-chat-app`)

      }catch (error) {
        console.log(error);
    } 
}                                                 

