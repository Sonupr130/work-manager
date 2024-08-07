import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required!"],
    },
    password: {
        type: String,
        required: [true, "Password is required!"],
    },
    about: String,
    profileURL: String,
    // address: {
    //     street: String,
    //     city: String,
    //     state: String,
    //     country: String
    // }
})


export const User = mongoose.models.users || mongoose.model('users', userSchema);
// users is collection name