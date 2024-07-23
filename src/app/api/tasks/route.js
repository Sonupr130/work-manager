
import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";



// CREATE TASK API (http://localhost:3000/api/tasks)
export async function POST(request){

    const { title, content, userId } = await request.json();

    try {
        
        const task = new Task({
            title,
            content,
            userId
        });

        const createdTask = await task.save();

        return NextResponse.json(createdTask, {
            message: "Task created successfully",
            status: 200
        })
    } catch(error) {
        console.log(error);
        return getResponseMessage("Task Creation Failed!", 500, false);
    }


}





// GET ALL TASKS
export async function GET(request){
    try {
        const tasks = await Task.find();
        return NextResponse.json(tasks);
    } catch (error) {
        console.log(error);
        return getResponseMessage("Error in fetching data!", 404, false);
    }
}


