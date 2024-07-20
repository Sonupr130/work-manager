import { NextResponse } from "next/server";


// we destructe the params
export function DELETE(req, {params}){

    // console.log(params);

    // const userId = params.userId;
    const { userId } = params;
    console.log("User ID: "+userId);

    return NextResponse.json({
        message: "Testing Delete Response"
    })
}