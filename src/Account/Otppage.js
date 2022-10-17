import React from 'react'
import { Link } from 'react-router-dom'

export default function OtpVerification() {
    return (
        <div>
            <div>
                <div className="bg-gray-100 h-screen">

                    <div className="flex flex-col w-full pt-28 items-center justify-center">
                        <div>
                            <div className="bg-white rounded-sm py-10 px-12 shadow-lg">
                                <h1 className="text-xl mt-2 text-center font-semibold text-gray-600">
                                    OTP - Verification
                                </h1>
                                <div className="mt-6 flex space-x-4 m-10 justify-center">

                                    <input
                                        placeholder="6 Digit OTP"
                                        className="bg-gray-100 rounded-sm py-2 px-4 border outline-none"

                                    />
                                  
                                    <button
                                        className="bg-blue-800 px-4 rounded-sm font-semibold text-white"

                                    >
                                          <Link to="/">
                                        Verify
                                        </Link>
                                    </button>
                            
                                </div>
                                <p />
                            </div>




                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}
