import { connectDb } from "@/app/helper/db";
import { getResponseMessage } from "@/app/helper/responseMessage";
import { Task } from "@/app/models/task";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    try {
        const { userId } = params;

        const tasks = await Task.find({
            userId: userId,
        })

        return NextResponse.json(tasks);
    } catch (error) {
        console.log(error);
        return getResponseMessage("Failed to get tasks", 404, false);
    }
}