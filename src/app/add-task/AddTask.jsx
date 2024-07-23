"use client";

import React, { useState } from "react";
import loginSvg from "../../assets/loginSVG.svg";
import Image from "next/image";
import { addTask } from "@/services/taskService";
import { toast } from "react-toastify";



const AddTask = () => {

  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "669bea336250194d1f930440",
  });

  const handleAddTask = (event) => {
    event.preventDefault();
    console.log(task);

    try {
      const result = addTask(task);
      console.log(result);
      toast.success("Task is added!", {
        position: "top-center",
      });

      setTask({
        title: "",
        content: "",
        status: "none",
      });
    } catch (error) {
      console.log(error);
      toast.error("Task not added!", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="grid grid-cols-12 justify-center mt-4">
      <div className="col-span-4 col-start-5 p-5 shadow-sm">
        <div className="my-8 flex justify-center">
          <Image src={loginSvg} alt="login-image" style={{ width: "50%" }} />
        </div>
        <h1 className="text-3xl text-center">Add your task here!</h1>

        <form action="" onSubmit={handleAddTask}>
          {/* task-title  */}
          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="task_title"
            >
              Title
            </label>
            <input
              name="task_title"
              onChange={(event) => {
                setTask({
                  ...task,
                  title: event.target.value,
                });
              }}
              value={task.title}
              id="task_title"
              className="w-full p-3 rounded-md bg-[#d8cced] outline-none mb-2"
              type="text"
            />
          </div>

          {/* task-content  */}
          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="task_content"
            >
              Content
            </label>
            <textarea
              rows={5}
              id="task_content"
              name="task_content"
              onChange={(event) => {
                setTask({
                  ...task,
                  content: event.target.value,
                });
              }}
              value={task.content}
              className="w-full p-3 rounded-md bg-[#d8cced] outline-none"
              type="text"
            />
          </div>

          {/* task-status  */}
          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="task_status"
            >
              Status
            </label>
            <select
              id="task_status"
              name="task_status"
              onChange={(event) => {
                setTask({
                  ...task,
                  status: event.target.value,
                });
              }}
              value={task.status}
              className="w-full p-3 rounded-md bg-[#d8cced] outline-none"
            >
              <option value="none" disabled>
                --Select Status--
              </option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>

            {/* Action Button  */}
            <div className="flex justify-center space-x-3 mt-4 text-white">
              <button className="bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800">
                Add Task
              </button>
              <button className="bg-red-600 py-2 px-3 rounded-lg hover:bg-red-800">
                Clear
              </button>
            </div>

            {JSON.stringify(task)}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
