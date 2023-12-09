import React, { useState } from 'react'
import LoginImg from "../../assets/login/loginImg.jpg"
import { FiMail } from "react-icons/fi"
import { AiOutlineSend } from "react-icons/ai"
import { toast } from 'react-toastify'
import axios from 'axios'
import { SERVER_URL } from '../../constants'
import { NavLink, useNavigate } from 'react-router-dom'



const ForgetPassword = () => {
    const navigate = useNavigate()
    const [changeScreen, setChangeScreen] = useState(true)
    const [credentials, setCredentials] = useState({
        email: "",
    })

    const [initialData, setInitialData] = useState({
        email: localStorage.getItem("localEmail"),
        otp: ""
    })



    const handleSendOTP = async () => {
        if (!credentials.email) return toast.error("Please enter the email")
        else if (!/^[a-z0-9.]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(credentials.email)) return toast.error("Please enter the correct email ")

        try {
            const res = await axios.post(`${SERVER_URL}/user/sendOTP`, credentials)
            toast.success(res.data.message)
            localStorage.setItem("localEmail", res.data.email)
            setChangeScreen(!changeScreen)
        } catch (err) {
            console.log(err.response.data.message)
        }
    }

    const handleVerifyOTP = async () => {
        if (!initialData.email) return toast.error("Please enter the email")
        else if (!/^[a-z0-9.]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(initialData.email)) return toast.error("Please enter the correct email ")
        else if (!initialData.otp) return toast.error("Please enter the otp")

        try {
            const res = await axios.post(`${SERVER_URL}/user/verifyOTP`, initialData)
            toast.success(res.data.message)
            navigate("/changePassword")
        } catch (err) {
            console.log(err.response.data.message)
        }
    }


    return (
        <>
            <section className="loginForm">
                <div className=' bg-gray-600 '>
                    <>
                        <div className=" border h-screen border-t-2 border-x-0 border-b-0 border-white bg-gradient-to-r row from-[rgb(1,66,106)] to-[#096aa6]  flex items-center justify-center px-5 py-10 pt-[6.55rem]">
                            <div
                                className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl py-[3px] w-full overflow-hidden"
                                style={{ maxWidth: 1000 }}
                            >
                                <div className="md:flex w-full">
                                    <div className='hidden md:block sm:w-[500px] sm:h-[500px]'>
                                        <img className='' src={LoginImg} alt='Login' />
                                    </div>

                                    <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                                        <div className="text-center mb-10">
                                            <h1 className="font-bold text-3xl text-gray-900">Forget Password</h1>

                                            {changeScreen ?
                                                <p className='text-sm'>Enter your email to get OTP</p>
                                                :
                                                <p className='text-sm'>Enter your OTP</p>
                                            }


                                        </div>

                                        <div className="flex -mx-3 flex-col">
                                            {changeScreen ?
                                                <>

                                                    <div className="w-full px-3 mb-5 flex flex-col gap-5">
                                                        <label htmlFor="" className="text-md font-semibold px-1">Email</label>
                                                        <div className="flex">
                                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                                <FiMail />
                                                            </div>
                                                            <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900" placeholder="johnsmith@example.com"
                                                                id='email'
                                                                onChange={(e) => setCredentials(prevState => ({ ...prevState, email: e.target.value }))}
                                                            />
                                                        </div>
                                                    </div>


                                                    <div className="flex -mx-3">
                                                        <div className="w-full px-3 mb-5">
                                                            <button className="block w-full max-w-xs mx-auto bg-[#096aa6] transition-all 0.5s ease-in-out hover:bg-[rgb(1,66,106)]  text-white rounded-lg px-3 py-3 font-semibold"
                                                                onClick={handleSendOTP}
                                                            >
                                                                Send OTP
                                                            </button>
                                                        </div>
                                                    </div>
                                                </>

                                                :

                                                <>

                                                    <div className="w-full px-3 mb-5 flex flex-col gap-5">
                                                        <label htmlFor="" className="text-md font-semibold px-1">Email</label>
                                                        <div className="flex">
                                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                                <AiOutlineSend />
                                                            </div>
                                                            <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900" placeholder="Please enter the email"
                                                                id='email'
                                                                // value={initialData.email}
                                                                onChange={(e) => setInitialData(prevState => ({ ...prevState, email: e.target.value }))}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="w-full px-3 mb-5 flex flex-col gap-5">
                                                        <label htmlFor="" className="text-md font-semibold px-1">Enter OTP</label>
                                                        <div className="flex">
                                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                                <AiOutlineSend />
                                                            </div>
                                                            <input type="otp" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900" placeholder="Please enter the otp"
                                                                id='otp'
                                                                onChange={(e) => setInitialData(prevState => ({ ...prevState, otp: e.target.value }))}
                                                            />
                                                        </div>
                                                    </div>


                                                    <div className="flex -mx-3">
                                                        <div className="w-full px-3 mb-5">
                                                            <button className="block w-full max-w-xs mx-auto bg-[#096aa6] transition-all 0.5s ease-in-out hover:bg-[rgb(1,66,106)]  text-white rounded-lg px-3 py-3 font-semibold"
                                                                onClick={handleVerifyOTP}
                                                            >
                                                                Verify OTP
                                                            </button>
                                                        </div>
                                                    </div>
                                                </>

                                            }


                                            <div className="text-black text-center">Have an account?
                                                <NavLink to="/login" className='  cursor-pointer text-[#096aa6] hover:text-[rgb(1,66,106)]'> Login</NavLink>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                </div>
            </section>
        </>
    )
}

export default ForgetPassword