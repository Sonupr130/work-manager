
import mongoose from "mongoose"
import { User } from "../models/user";

export const connectDb = async() => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "work_manager"
        });


        console.log("Databse Connected! 🔥");
        console.log(connection);
        // console.log("Connected with host ", connection.host);


        // testing and creating user
        const uuser = new User({
            name: "test name",
            email: "test@gmail.com",
            password: "test233",
            about: "this is simple testing"
        });
        await uuser.save();
        console.log("User is Created");
    } catch (error) {
        console.log("Failed to connect with databse ❌");
        console.log(error);
    }
} 