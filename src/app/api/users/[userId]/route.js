import { User } from "@/app/models/user";
import { NextResponse } from "next/server";



// GET SINGLE USER 
export async function GET(request, { params }) {
    try {

        // get userid from params
        const { userId } = params;

        const user = await User.findById({
            _id: userId,
        });

        return NextResponse.json(user,{
            status: 200,
        });
    } catch(error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to fetch user",
            success: false,
        });
    }
}







// DELETE SINGLE USER
export async function DELETE(request, { params }) {
    try{

        const { userId } = params;

        const user = await User.findByIdAndDelete({
            _id: userId,
        })

        return NextResponse.json({
            message: "User deleted successfully",
            success: true,
        })

    } catch(error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to delete user",
            success: false,
        })
    }
}






// UPDATE USER

export async function PUT(request, { params }) {
    try {
        const { userId } = params;

        const { name, about, password, profileURL } = await request.json();

        const user = await User.findByIdAndUpdate(
            { _id: userId },
            { name, about, password, profileURL },
            { new: true }
        );


        // const user = await User.findByIdAndUpdate(userId);
        // user.name = name;
        // user.about = about; 
        // user.password =  password;
        // user.profileURL = profileURL;
        // const updatedUser = await user.save();


        return NextResponse.json(user, {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to update user",
            success: false,
        });
    }
}