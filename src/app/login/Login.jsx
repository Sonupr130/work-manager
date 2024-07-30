"use client"
import React, { useState } from 'react'


const Login = () => {

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })



    const loginFormSubmitted = (event) => {
        event.preventDefault();
        console.log(loginData);

        if(loginData.email.trim() === "" || loginData.password.trim() === "") {
            toast.info("Invalid Data!!", {
                position: "top-center"
            });
            return;
        }
    }


  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5">
        <div className="py-5"></div>

        <h1 className="text-3xl text-center">Login Here</h1>

        <form action="" onSubmit={loginFormSubmitted}>

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
                value={loginData.email}
                onChange={(event) => {
                  setLoginData({ ...loginData, email: event.target.value });
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
                value={loginData.password}
                onChange={(event) => {
                  setLoginData({ ...loginData, password: event.target.value });
                }}
                id="user_password"
                className="w-full p-3 rounded-md bg-[#d8cced] outline-none mb-2"
              />
            </div>

            {/* Button  */}
            <div className="mt-3 space-x-5 text-center">
              <button
                type="submit"
                className="px-3 py-2 bg-green-600 rounded-md hover:bg-green-400"
              >
                Login
              </button>
              <button
                // onClick={resetForm}
                className="px-3 py-2 bg-orange-600 rounded-md hover:bg-orange-400"
              >
                Reset
              </button>
            </div>
        </form>
        </div>
        </div>
  )
}

export default Login