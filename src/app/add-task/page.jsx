import React from 'react'
import loginSvg from "../../assets/loginSVG.svg"
import Image from 'next/image';

export const metadata = {
    title: "Add Task : Work Manager",
  };


const AddTask = () => {
  return (
    <div className='grid grid-cols-12 justify-center mt-4'>
        <div className='col-span-4 col-start-5 p-5 shadow-sm'>

        <div className='my-8 flex justify-center'>
          <Image src={loginSvg} style={{width:"50%"}} />
        </div>
        <h1 className='text-3xl text-center'>Add your task here!</h1>

        <form action="">

        {/* task-title  */}
          <div>
            <label className='block text-sm font-medium mb-2' htmlFor="task_title">Title</label>
            <input id='task_title' className='w-full p-3 rounded-md bg-[#d8cced] outline-none mb-2' type="text" />
          </div>

          {/* task-content  */}
          <div>
            <label className='block text-sm font-medium mb-2' htmlFor="task_content">Content</label>
            <textarea rows={5} id='task_content' className='w-full p-3 rounded-md bg-[#d8cced] outline-none' type="text" />
          </div>

          {/* task-status  */}
          <div>
            <label className='block text-sm font-medium mb-2' htmlFor="task_status">Status</label>
            <select id="task_status" className='w-full p-3 rounded-md bg-[#d8cced] outline-none'>
              <option value="none" selected disabled>--Select Status--</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>

            {/* Action Button  */}
            <div className='flex justify-center space-x-3 mt-4 text-white'>
              <button className='bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800'>Add Todo</button>
              <button className='bg-red-600 py-2 px-3 rounded-lg hover:bg-red-800'>Clear</button>
            </div>
          </div>
        </form>
        </div>

        
    </div>
  )
}

export default AddTask