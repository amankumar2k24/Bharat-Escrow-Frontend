import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import LoginImg from "../../assets/login/loginImg.jpg"
import { FiMail } from "react-icons/fi"
import { RiLockPasswordFill } from "react-icons/ri"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
import { toast } from 'react-toastify'
import axios from 'axios'
import { SERVER_URL } from '../../constants'


const Login = () => {
    const [hide, setHide] = useState(true)
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const handleInput = (event) => {
        const { id, value } = event.target
        setCredentials(preVal => ({ ...preVal, [id]: value }))
    }

    const validation = () => {
        if (!credentials.email) return { isError: false, message: "Email is missing" }
        else if (!credentials.password) return { isError: false, message: "Password is missing" }
        else {
            return { isError: true }
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        if (validation().isError) {
            try {
                let res = await axios?.post(`${SERVER_URL}/user/login`, credentials)
                // console.log(res)
                toast.success(res.data.message)
                localStorage.setItem("token", res.data.token)
                if (res && res.data.user.type !== "user") {
                    localStorage.setItem("user", JSON.stringify(res?.data?.user))
                    navigate("/dashboard")
                } else {
                    // } else if (res.data.user.type === "user") {
                    localStorage.setItem("user", JSON.stringify(res?.data?.user))
                    navigate("/home")
                }
            } catch (err) {
                toast.error(err?.response?.data?.message)
            }
        } else {
            toast.error(validation().message)
        }
    }

    return (
        <>
            <section className="loginForm">
                <div className=' bg-gray-600 '>
                    <>
                        <div className=" border border-t-2 border-x-0 border-b-0 h-screen border-white bg-gradient-to-r row from-[rgb(1,66,106)] to-[#096aa6]  flex items-center justify-center px-5 pb-8 pt-[6.55rem]">
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
                                            <h1 className="font-bold text-3xl text-gray-900">LOGIN</h1>
                                            <p>Enter your information to login</p>
                                        </div>
                                        <div>

                                            <div className="flex -mx-3">
                                                <div className="w-full px-3 mb-5">
                                                    <label htmlFor="" className="text-xs font-semibold px-1">Email</label>
                                                    <div className="flex">
                                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                            <FiMail />
                                                        </div>
                                                        <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900" placeholder="johnsmith@example.com"
                                                            id='email'
                                                            value={credentials.email}
                                                            onChange={handleInput}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex -mx-3">
                                                <div className="w-full px-3 mb-12">
                                                    <label htmlFor="" className="text-xs font-semibold px-1">Password</label>
                                                    <div className="flex">
                                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                            <RiLockPasswordFill />
                                                        </div>
                                                        <input type={`${hide ? "password" : "text"}`} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-s-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900" placeholder="************"
                                                            id='password'
                                                            value={credentials.password}
                                                            onChange={handleInput}
                                                        />
                                                        <div onClick={() => setHide(!hide)} className='w-10 h-11 flex justify-center items-center bg-gray-400 rounded-e-lg'>
                                                            {hide ?
                                                                <AiFillEyeInvisible className='text-black ' size={20} />
                                                                :
                                                                <AiFillEye className='text-black ' size={20} />
                                                            }
                                                        </div>

                                                    </div>
                                                    <Link to="/forgetPassword" className='text-sm text-semibold cursor-pointer  hover:text-black'>Forget Password</Link>
                                                </div>
                                            </div>
                                            <div className="flex -mx-3">
                                                <div className="w-full px-3 mb-5">
                                                    <button className="block w-full max-w-xs mx-auto bg-[#096aa6] transition-all 0.5s ease-in-out hover:bg-[rgb(1,66,106)]  text-white rounded-lg px-3 py-3 font-semibold"
                                                        onClick={handleLogin}
                                                    >
                                                        LOGIN
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="text-black text-center">Don't have an account? <br />
                                                <NavLink to="/register" className='  cursor-pointer text-[#096aa6] hover:text-[rgb(1,66,106)]'>Register now</NavLink>
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

export default Login