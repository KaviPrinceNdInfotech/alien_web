import React from 'react'
import "./Mainpage.css"

import giftbox from "../img/XD Icon/Path.png"
import group from "../img/XD Icon/Group.png"
import chat from "../img/XD Icon/chat.png"
import share from "../img/XD Icon/share.png"
import view from "../img/view.png"
import play from "../img/play.png"
import pic from "../img/11.jpg"

function Mainpage(props) {
    return (
        <>
        <div className="mb-10 bg-black">
            <div className="container">
                <img src={props.img1} alt="Snow" style={{ width: "100%" }} />
                <div className="bottom-left">
                    <div className='bottom_div'>
                        <div className='overlay'>
                            <div className='flex -mt-5 w-full'>
                                <div className=' w-6/12'>
                                    <div>
                                        <div className='flex  '>
                                            <span className='text-sm p-2 ml-2 text-gray-200'>{props.name1}</span>
                                           
                                            <p className='text-sm p-2 text-gray-200'>{props.hours}</p>
                                            <button className='text-sm text-gray-200'>Follow</button>
                                            <button className='p-1 text-gray-200'>...</button>
                                        </div>
                                        <div className='flex  -mt-3 space-x-2'>
                                            <button>
                                            <img src={view} alt="jj" className='h-6 mt-1 ml-2' />
                                            </button>
                                            <button>
                                            <img src={play} alt="jj" className='h-6 mt-1 ml-2' />
                                            </button>

                                            <div className='text-sm text-gray-200 mt-1'>{props.song}</div>
                                            <button>
                                            <img src={view} alt="jj" className='h-6 mt-1 ml-2' />
                                            </button>

                                        </div>
                                    </div>
                                </div>
                                <div className=' w-6/12 '>
                                    <div className='float-right mt-2'>
                                        <img src={props.img3} alt="logo" className='h-12 rounded-md border border-white ' />
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="top-left">
                    <button>...</button>
                </div>
                <div className="top-right">
                    <div className='top_div'>
                        <div className='overlayy'>
                            <div className='Topbar'>
                                <div className='logo_section'>
                                    <button>
                                        <img src={group} alt="img" style={{ width: "25px", marginLeft: "40px" }} />
                                        <span className='text-sm ml-10 -mt-15'>15</span>
                                    </button>
                                    

                                </div>
                                <div className='logo_section'>
                                    <button>
                                        <img src={chat} alt="img" style={{ width: "25px", marginLeft: "40px", marginTop: "40px" }} />
                                        <span className='text-sm ml-10 -mt-15'>500</span>
                                    </button>

                                </div>
                                <div className='logo_section'>
                                    <button>
                                        <img src={giftbox} alt="img" style={{ width: "25px", marginLeft: "40px", marginTop: "40px" }} />
                                        <span className='text-sm ml-10 -mt-15'>1400</span>
                                    </button>

                                </div>
                                <div className='logo_section'>
                                    <button>
                                        <img src={share} alt="img" style={{ width: "25px", marginLeft: "40px", marginTop: "40px" }} />
                                    </button>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>



            </div>
            <div className='w-full  bg-black shadow-lg'>
                <div>
                    <p className='ml-2 text-white lg:text-sm'>{props.para}</p>
                    <button className='text-gray-200 text-sm ml-2 underline'>View more comment..</button>
                    <button className='text-sm text-white ml-2'>{props.comments}</button>
                    <div className='flex space-x-4 ml-2'>
                        <p className='text-white'>{props.p1}</p>
                        <p className='text-sm text-white p-1'>{props.p2}</p>
                    </div>
                    <div className='flex space-x-4 ml-2'>
                        <p className='text-white'>{props.p3}</p>
                        <p className='text-sm text-white p-1'>{props.p4}</p>
                    </div>

                </div>
                <div className='flex w-full bg-black pb-3'>
                    <div className='w-3/12 flex space-x-3 ml-5'>
                        <div>
                            <img src={pic} alt='ggg' className='h-10 rounded-full'/>
                        </div>
                        <button>
                        <div className='text-white'>+</div>
                        </button>
                        <button>
                        <div className='text-white'>play</div>
                        </button>
                       
                       

                    </div>
                    <div className='w-6/12 '>
                        <input type='text' placeholder='comment Here....'className=' w-full p-1 text-white bg-transparent mt-1 outline-none focus:outline-none  border-b border-white'/>
                    </div>
                    <div className='w-3/12'>home</div>
                   
                </div>
            </div>
        </div>
        </>
    )
}

export default Mainpage
