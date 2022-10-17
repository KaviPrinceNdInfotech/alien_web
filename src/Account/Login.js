import React, { useState } from 'react'
// import axios from 'axios'
// import logo from "../../img/logo.jpeg"
import { Link } from 'react-router-dom'
// import { useNavigate } from "react-router-dom";

export default function Login() {
  // const navigate = useNavigate();

  // const [user, setUser] = useState();
  // const [phone, setPhone] = useState();


  // const lgnbtn = async () => {
  //   const formData = {
  //     user,
  //     phone
  //   }

  //   const loginApi = await axios.post("api here", formData)

  //   if (loginApi.status === 200) {
  //     navigate("/home")

  //   } else {
  //     console.log(loginApi.data)
  //   }
  // }


  return (
    <div>
      <section className="bg-gray-200">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link to="/"

            className="flex items-center mb-6 text-2xl font-semibold text-black "
          >
            {/* <img
              className="w-8 h-8 mr-2"
              src={logo}
              alt="logo"
            /> */}
            Alien
          </Link>
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
               
                <div className="flex flex-col mb-4">
                  <label
                    htmlFor="name"
                    className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <div className="absolute flex border border-transparent left-0 top-0 h-full w-10">
                      <div className="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
                        <svg
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx={12} cy={7} r={4} />
                        </svg>
                      </div>
                    </div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Name"
                      defaultValue=""
                      className="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12"
                    />
                  </div>
                </div>

                {/* <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Phone Number
                  </label>
                  <input
                  value={phone} onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    name="password"
                    id="password"
                    placeholder='+91 000000XXXX'
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div> */}
                <div className="flex flex-col mb-4">
                  <label
                    htmlFor="name"
                    className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  >
                    phone
                  </label>
                  <div className="relative">
                    <div className="absolute flex border border-transparent left-0 top-0 h-full w-10">
                      <div className="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16"> <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" /> <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /> </svg>
                      </div>
                    </div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="+91 XXXXXX7898"
                      defaultValue=""
                      className="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>

                </div>
                <button
                  // onClick={(e) => lgnbtn()}
                  type="submit"
                  className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <Link to="/">
                  Sign in
                  </Link>
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link to="/signup"
                   
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}




