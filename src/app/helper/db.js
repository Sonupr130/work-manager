
import mongoose from "mongoose"

export const connectDb = async() => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "work_manager"
        });

        console.log("Databse Connected! 🔥");
        console.log(connection);
        // console.log("Connected with host ", connection.host);
    } catch (error) {
        console.log("Failed to connect with databse ❌");
        console.log(error);
    }
} 