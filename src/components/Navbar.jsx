"use client";
import Link from "next/link";
import React from "react";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-[#7E57C2] h-12 py-2 px-36 text-white">
      <div className="brand">
        <h1 className="text-2xl font-semibold">
          <a href="#!">Work Manager</a>
        </h1>
      </div>
      <div className="">
        <ul className="flex space-x-3">
          <li>
            <Link href={"/"} className="hover:text-blue-600">Home</Link>
          </li>
          <li>
            <Link href={"/add-task"} className="hover:text-blue-600">Add Task</Link>
          </li>
          <li>
            <Link href={"/show-tasks"}className="hover:text-blue-600">Show Tasks</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex space-x-3">
          <li>
            <Link href="#!">Login</Link>
          </li>
          <li>
            <Link href="#!">SignUp</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
