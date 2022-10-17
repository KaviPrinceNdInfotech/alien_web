import React, { useState } from 'react'
// import axios from "axios"
// import logo from "../../img/logo.jpeg"
import {Link } from "react-router-dom";

export default function Signup() {
    // const navigate = useNavigate();
    // const [user, setUser] = useState();
    // const [fname, setFname] = useState();
    // const [lname, setLname] = useState();
    // const [phone, setPhone] = useState();
    // const [gender, setGender] = useState();
    // const [birthday, setBirthday] = useState();


    // const lgnbtn = async () => {

    //     const regData = {
    //         user, fname, lname, gender, phone, birthday
    //     }
    //     const res = await axios.post("api here", regData);
    //     console.log(res.data)
    //     if (res.status === 200) {
    //         setFname("")
    //         setLname("")
    //         setUser("")
    //         setPhone("")

    //         setGender("")
    //         setBirthday('')

    //     }
    //     if (res.status === 200) {
    //         navigate("/otpverification")

    //     } else {
    //         console.log(res.data)
    //     }
    // }

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        {/* <img
                            className="mx-auto h-12 w-auto"
                            src={logo}
                            alt="Alien"
                        /> */}
                        <h2 className="mt-4 text-center text-2xl font-bold text-gray-900">
                            Create your account
                        </h2>

                    </div>
                    <div className="rounded-md pb-10 bg-white max-w-full rounded overflow-hidden shadow-xl p-5">
                        <form className="space-y-4">
                            <input type="hidden" name="remember" defaultValue="True" />
                            <div className=" -space-y-px">
                                <div className="grid gap-4">
                                  
                                    <div className=" col-span-12 mb-4">
                                        <label
                                            htmlFor="name"
                                            className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                                        >
                                            User Name
                                        </label>
                                        <div className="relative">
                                            <div className="absolute flex border border-transparent left-0 top-0 h-full w-10">
                                                <div className="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16"> <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" /> </svg>
                                                </div>
                                            </div>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                placeholder=" User Name"
                                                defaultValue=""
                                                className="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12"
                                            />
                                        </div>
                                    </div>

                                    <div className=" col-span-6 ">
                                        <label
                                            htmlFor="name"
                                            className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                                        >
                                           First Name
                                        </label>
                                        <div className="relative ">
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
                                                placeholder="First Name"
                                                defaultValue=""
                                                className="text-sm  sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12"
                                            />
                                        </div>
                                    </div>

                                    <div className=" col-span-6 mb-4">
                                        <label
                                            htmlFor="name"
                                            className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                                        >
                                          Last  Name
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
                                                placeholder="Last Name"
                                                defaultValue=""
                                                className="text-sm sm:text-base  w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12"
                                            />
                                        </div>
                                    </div>
                                    <div className=" col-span-6 mb-4">
                                        <label
                                            htmlFor="name"
                                            className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                                        >
                                            Mobile No:
                                        </label>
                                        <div className="relative">
                                            <div className="absolute flex border border-transparent left-0 top-0 h-full w-6">
                                                <div className="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16"> <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/> <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/> </svg>
                                                </div>
                                            </div>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                placeholder="+91 XXXXXX8978"
                                                defaultValue=""
                                                className="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12"
                                            />
                                        </div>
                                    </div>
                                   <div className=" col-span-6 mb-4">
                                        <label
                                            htmlFor="name"
                                            className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                                        >
                                            Date of Birthday
                                        </label>
                                        <div className="relative">
                                            <div className="absolute flex border border-transparent left-0 top-0 h-full w-10">
                                                <div className="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
                                              
                                                </div>
                                            </div>
                                            <input
                                                id="name"
                                                name="name"
                                                type="date"
                                                placeholder="Name"
                                                defaultValue=""
                                                className="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-4  text-gray-900 ">
                                    Gender:
                                </p>
                                <ul className="items-center w-full text-sm font-medium text-gray-300  border border-gray-200 sm:flex ">

                                    <li className="w-full border-b sm:border-b-0 sm:border-r ">
                                        <div className="flex items-center pl-3">
                                            <input
                                                // value={gender} onChange={(e) => setGender(e.target.value)}
                                                id="horizontal-list-radio-id"
                                                type="radio"
                                                defaultValue=""
                                                name="list-radio"
                                                className="w-4  text-gray-600 "
                                            />
                                            <label
                                                htmlFor="horizontal-list-radio-id"
                                                className="py-3 ml-2 w-full text-sm font-medium text-black"
                                            >
                                                Male
                                            </label>
                                        </div>
                                    </li>
                                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                        <div className="flex items-center pl-3">
                                            <input
                                                // value={gender} onChange={(e) => setGender(e.target.value)}
                                                id="horizontal-list-radio-millitary"
                                                type="radio"
                                                defaultValue=""
                                                name="list-radio"
                                                className="w-4  text-blue-600 bg-gray-100 border-gray-300  "
                                            />
                                            <label
                                                htmlFor="horizontal-list-radio-millitary"
                                                className="py-3 ml-2 w-full text-sm font-medium text-black "
                                            >
                                                Female
                                            </label>
                                        </div>
                                    </li>
                                    <li className="w-full dark:border-gray-600">
                                        <div className="flex items-center pl-3">
                                            <input
                                                // value={gender} onChange={(e) => setGender(e.target.value)}
                                                id="horizontal-list-radio-passport"
                                                type="radio"
                                                defaultValue=""
                                                name="list-radio"
                                                className="w-4  text-blue-600 bg-gray-100 border-gray-300 "
                                            />
                                            <label
                                                htmlFor="horizontal-list-radio-passport"
                                                className="py-3 ml-2 w-full text-sm font-medium text-black"
                                            >
                                                Other
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>





                            <div>
                                <Link to="/otppage">
                                    <button
                                        // onClick={(e) => lgnbtn()}
                                        type="submit"
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >

                                        Next
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
