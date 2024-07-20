import { NextResponse } from "next/server";
import { connectDb } from "../../helper/db";

connectDb();
export function GET(req, res){

    const users = [{
        name: "Sonu Pradhan",
        phone: 123456789,
        course: "Nodejs",
    },{
        name: "Amit Kumar",
        phone: 123456789,
        course: "React",
    },{
        name: "Sourav Mahto",
        phone: 123456789,
        course: "JavaScript",
    },{
        name: "Nisha Kumari",
        phone: 123456789,
        course: "TypeScript",
    }];

    return NextResponse.json(users);

}


export async function POST(request){

    const body = request.body;
    console.log(body);
    // console.log(request.method);
    // console.log(request.cookies);
    // console.log(request.headers);
    // console.log(request.nextUrl.pathname);
    // console.log(request.nextUrl.searchParams);


    // const jsonData = await request.json();
    // console.log(jsonData);

    const textData = await request.text();
    console.log(textData);

    return NextResponse.json({
        message: "Posting User data...",
        status: 201,
    })
}


export function PUT(){}


export function DELETE(req, res){
    console.log("Deletd");

    return NextResponse.json({
        message: "Message deleted",
        status: 200,
    }, {status: 201, message: "Change text"})
}