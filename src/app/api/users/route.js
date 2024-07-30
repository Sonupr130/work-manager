import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
  // fetch user detail from request
  const { name, email, password, about, profileURL } = await request.json();

  // Check if user with the same email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json(
      {
        message: "User with this email already exists",
        status: false,
      },
      { status: 409 }
    );
  }

  // create user object with usermodel
  const user = new User({
    name,
    email,
    password,
    about,
    profileURL,
  });

  try {


    // to hash a password
    user.password = bcrypt.hashSync(user.password, parseInt(process.env.BCRYPT_SALT));




    // save the object to the database
    const createdUser = await user.save();
    const response = NextResponse.json(user, {
      message: "User created successfully",
      status: 201,
    });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Create user",
        status: false,
      },
      { status: 500 }
    );
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
