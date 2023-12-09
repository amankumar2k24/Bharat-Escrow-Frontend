import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import LoginImg from "../../assets/login/loginImg.jpg"
import { RiLockPasswordFill } from "react-icons/ri"
import { FiMail } from "react-icons/fi"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
import { toast } from 'react-toastify'
import axios from 'axios'
import { SERVER_URL } from '../../constants'



const ChangePassword = () => {
    const navigate = useNavigate()
    const [hide, setHide] = useState(true)

    const [initialData, setInitialData] = useState({
        email: localStorage.getItem("localEmail") || "",
        password: "",
    })

    useEffect(() => {
        setInitialData((prevState) => ({ ...prevState, email: localStorage.getItem("localEmail") }))
    }, [])


    const handleSavePassword = async () => {
        if (!initialData.email) return toast.error("Please enter the email")
        else if (!/^[a-z0-9.]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(initialData.email)) return toast.error("Please enter the correct email ")

        else if (!initialData.password) return toast.error("Password is missing")
        else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@]).{8,16}/.test(initialData.password)) {
            alert("Password should contain 8 character with one uppercase, one lowercase, one digit, @ symbol")
            return toast.error("Please enter the correct password ")
        }
        try {
            const res = await axios.post(`${SERVER_URL}/user/changePassword`, initialData)
            toast.success(res.data.message)
            navigate("/login")
            localStorage.removeItem("localEmail")
        } catch (err) {
            toast.error(err.response.data.message)
        }
    }




    return (
        <>
            <section className="loginForm">
                <div className=' bg-gray-600 '>
                    <>
                        <div className=" border border-t-2 border-x-0 border-b-0 border-white bg-gradient-to-r row from-[rgb(1,66,106)] to-[#096aa6]  flex items-center justify-center px-5 py-10 pt-[6.55rem]">
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
                                            <h1 className="font-bold text-3xl text-gray-900">Reset Password</h1>
                                            <p>Enter your information to reset your password</p>
                                        </div>
                                        <div>


                                            <div className="flex -mx-3">
                                                <div className="w-full px-3 mb-12">
                                                    <label htmlFor="" className="text-xs font-semibold px-1">Email</label>
                                                    <div className="flex w-full">
                                                        <div className="flex w-full">
                                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                                <FiMail />
                                                            </div>
                                                            <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900" placeholder="Please enter the email"
                                                                id='email'
                                                                value={initialData.email}
                                                                onChange={(e) => setInitialData(prevState => ({ ...prevState, email: e.target.value }))}
                                                            />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>


                                            <div className="flex -mx-3">
                                                <div className="w-full px-3 mb-12">
                                                    <label htmlFor="" className="text-xs font-semibold px-1">New Password</label>
                                                    <div className="flex">
                                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                            <RiLockPasswordFill />
                                                        </div>
                                                        <input type={`${hide ? "password" : "text"}`} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-s-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900" placeholder="************"
                                                            id='confirmPassword'
                                                            onChange={(e) => setInitialData(prevState => ({ ...prevState, password: e.target.value }))}
                                                        />
                                                        <div onClick={() => setHide(!hide)} className='w-10 h-11 flex justify-center items-center bg-gray-400 rounded-e-lg'>
                                                            {hide ?
                                                                <AiFillEyeInvisible className='text-black ' size={20} />
                                                                :
                                                                <AiFillEye className='text-black ' size={20} />
                                                            }
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex -mx-3">
                                                <div className="w-full px-3 mb-5">
                                                    <button className="block w-full max-w-xs mx-auto bg-[#096aa6] transition-all 0.5s ease-in-out hover:bg-[rgb(1,66,106)]  text-white rounded-lg px-3 py-3 font-semibold"
                                                        onClick={handleSavePassword}
                                                    >
                                                        Save Password
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="text-black text-center">Have an account? <br />
                                                <NavLink to="/login" className='  cursor-pointer text-[#096aa6] hover:text-[rgb(1,66,106)]'>Login</NavLink>
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

export default ChangePassword