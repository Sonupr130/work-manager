"use client";

import React from "react";
import Image from "next/image";
import Signup from "../../assets/signup.svg"

const SignUp = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5">
        <div className="py-5">
        <div className="m-5 flex justify-center">
          <Image src={Signup} alt="signup-image" style={{ width: "50%" }} />
        </div>
          <h1 className="text-3xl text-center">SignUp Here</h1>
          <form action="" className="mt-5">
            <div className="mt-3">
            {/* username  */}
              <label className="block text-sm font-medium mb-2" htmlFor="user_name">Username</label>
              <input type="text" placeholder="enter here" name=""   className="w-full p-3 rounded-md bg-[#d8cced] outline-none mb-2" />
            </div>


            {/* email  */}
            <div>
            <label className="block text-sm font-medium mb-2" htmlFor="user_email">Email</label>
              <input type="email" placeholder="enter here" id="user_email"   className="w-full p-3 rounded-md bg-[#d8cced] outline-none mb-2" />
            </div>


            {/* password  */}
            <div>
            <label className="block text-sm font-medium mb-2" htmlFor="user_password">Password</label>
              <input type="password" placeholder="enter here" id="user_password"   className="w-full p-3 rounded-md bg-[#d8cced] outline-none mb-2" />
            </div>


            {/* about section  */}
            <div>
            <label className="block text-sm font-medium mb-2" htmlFor="user_about">About</label>
            <textarea
              rows={8}
              id="user_about"
              className="w-full p-3 rounded-md bg-[#d8cced] outline-none"
              type="text"
            ></textarea>
            </div>

            <div className="mt-3 space-x-5 text-center">
                <button className="px-2 py-3 bg-green-600 rounded-md hover:bg-green-400">SignUp</button>
                <button className="px-2 py-3 bg-orange-600 rounded-md hover:bg-orange-400">SignUp</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
