"use client";

import React, { useState } from "react";
import Image from "next/image";
import Signup from "../../assets/signup.svg";
import { toast } from "react-toastify";
import { signUp } from "@/services/userService";


const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL: "https://i.sstatic.net/YaL3s.jpg",
  });

  const handleSignUp = async (event) => {
    event.preventDefault();
    console.log(data);

    if (data.name.trim() === "" || data.name == null) {
      toast.warning("Name is required!", { position: "top-center" });
      return;
    }


    try {
      const result = await signUp(data);
      console.log(result);

      toast.success("User signed up successfully", { position: "top-center" });

      setData({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL: "https://i.sstatic.net/YaL3s.jpg",
      });
    } catch (error) {
        console.log(error);
        console.log(error.response.data.message);
        toast.error("Signup Error !! " + error.response.data.message, {
          position: "top-center",
        });
      }
    };

  const resetForm = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
      profileURL: "https://i.sstatic.net/YaL3s.jpg",
    });
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5">
        <div className="py-5">
          <div className="m-5 flex justify-center">
            <Image src={Signup} alt="signup-image" style={{ width: "50%" }} />
          </div>
          <h1 className="text-3xl text-center">SignUp Here</h1>
          <form action="" className="mt-5" onSubmit={handleSignUp}>
            <div className="mt-3">
              {/* username  */}
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="user_name"
              >
                Username
              </label>
              <input
                type="text"
                placeholder="enter here"
                name="user_name"
                value={data.name}
                onChange={(event) => {
                  setData({ ...data, name: event.target.value });
                }}
                className="w-full p-3 rounded-md bg-[#d8cced] outline-none mb-2"
              />
            </div>

            {/* email  */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="user_email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={(event) => {
                  setData({ ...data, email: event.target.value });
                }}
                placeholder="enter here"
                id="user_email"
                className="w-full p-3 rounded-md bg-[#d8cced] outline-none mb-2"
              />
            </div>

            {/* password  */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="user_password"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="enter here"
                name="password"
                value={data.password}
                onChange={(event) => {
                  setData({ ...data, password: event.target.value });
                }}
                id="user_password"
                className="w-full p-3 rounded-md bg-[#d8cced] outline-none mb-2"
              />
            </div>

            {/* about section  */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="user_about"
              >
                About
              </label>
              <textarea
                rows={8}
                id="user_about"
                name="user_about"
                value={data.about}
                onChange={(event) => {
                  setData({ ...data, about: event.target.value });
                }}
                className="w-full p-3 rounded-md bg-[#d8cced] outline-none"
                type="text"
              ></textarea>
            </div>

            <div className="mt-3 space-x-5 text-center">
              <button
                type="submit"
                className="px-2 py-3 bg-green-600 rounded-md hover:bg-green-400"
              >
                SignUp
              </button>
              <button
                onClick={resetForm}
                className="px-2 py-3 bg-orange-600 rounded-md hover:bg-orange-400"
              >
                Reset
              </button>
              {JSON.stringify(data)}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
