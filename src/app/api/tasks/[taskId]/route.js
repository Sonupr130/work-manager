import { connectDb } from "@/app/helper/db";
import { getResponseMessage } from "@/app/helper/responseMessage";
import { Task } from "@/app/models/task";
import { NextResponse } from "next/server";
connectDb();


// GET SINGLE TASK
export async function GET(request, {params}){

    try {
        const { taskId } = params;

        const task = await Task.findById(taskId);
        return NextResponse.json(task);
    } catch (error) {
        console.log(error);
        return getResponseMessage("Failed to get task", 404, false);
    }
}






// UPDATE TASK
export async function PUT(request, {params}){
    try {
        const { taskId } = params;

        const { title, content, status } = await request.json();

        const task = await Task.findById(taskId);
        task.title = title;
        task.content = content;
        task.status = status;

        console.log(task);

        const updatedTask = await task.save();
        return NextResponse.json(updatedTask);

    } catch (error) {
        console.log(error);
        return getResponseMessage("Failed to update task", 404, false);
    }
}


export async function DELETE(request, {params}){
    try {
        
        const { taskId } = params;

        await Task.deleteOne({
            _id: taskId,
        })
        return getResponseMessage("Task deleted successfully", 200, true);
    } catch (error) {
        console.log(error);
        return getResponseMessage("Failed to delete task", 404, false);
    }
}