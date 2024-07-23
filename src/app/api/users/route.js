import { User } from "@/models/user";
import { NextResponse } from "next/server";







// CREATE USER API (http://localhost:3000/api/users)
export async function POST(request) {
  try {
    // fetch user detail from request
    const { name, email, password, about, profileURL } = await request.json();

    // create user object with usermodel
    const user = new User({
      name,
      email,
      password,
      about,
      profileURL,
    });

    // save the object to the database
    const createdUser = user.save();
    const response = NextResponse.json(user, {
      message: "User created successfully",
      status: 200,
    });
    return response;

  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Failed to Create user",
      status: false,
    });
  }
}





// GET ALL USER API (http://localhost:3000/api/users)
export async function GET(req, res) {
  

    let users = [];
    try {
        // users = await User.find();
        users = await User.find().select("-password");


    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to fetch users",
            status: false,
        });
    }

  return NextResponse.json(users);
}















