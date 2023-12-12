import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setFormValue } from '../../store/slice/formSlice'
import { toast } from 'react-toastify'
import { SERVER_URL } from '../../constants'

const AccountSecurity = () => {
    const userDetails = JSON.parse(localStorage.getItem("user"))
    const [counter, setCounter] = useState(0);
    const [sendOTP, setSendOTP] = useState(false)
    const [verifiedOTP, setVerifiedOTP] = useState(false)
    const navigate = useNavigate()
    //redux-toolkit
    const dispatch = useDispatch()
    const { personalInfo, professionalInfo, accountSecurity } = useSelector((state) => state.form)

    //for countDown Timer
    useEffect(() => {
        const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    const handleSendOTP = async (e) => {
        e.preventDefault()
        await axios.post(`http://localhost:4100/seller/sendOtp`, { phone: accountSecurity.phone })
            .then((res) => {
                setCounter(60)
                console.log(res)
                setSendOTP(true)
            }).catch((err) => console.log(err))
    }


    const handleVerifiedOTP = async (e) => {
        e.preventDefault()
        await axios.post(`http://localhost:4100/seller/verifyOtp`, { phone: accountSecurity.phone, otp: accountSecurity.otp })
            .then((res) => {
                console.log(res)
                if (res.data.success) {
                    setCounter(0)
                    setVerifiedOTP(true)
                    setSendOTP(false)
                }
            }).catch((err) => console.log(err))
    }


    const handleFinishButton = async () => {
        let tempData = { ...personalInfo, ...professionalInfo, ...accountSecurity, email: userDetails.email }

        const formData = new FormData();

        // Append other data
        Object.keys(tempData).forEach((key) => {
            formData.append(key, tempData[key]);
        });

        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };
        //FormData---------------------------------------->

        try {
            let res = await axios.post(`${SERVER_URL}/seller/create-seller`, formData, config)
            console.log(res)
            if (res) {
                navigate("/home")
                toast.success(res.data.message)
            }
        } catch (err) {
            toast.success(err.response.data.message)
        }
    }

    return (
        <div className='mt-36 md:mt-32 pb-10 container mx-auto w-full flex justify-center font-roboto'>
            <div className='max-w-[1024px] w-full rounded-lg'>
                {/* form  */}
                <div className=' bg-gray-600 w-full rounded-t-lg text-center text-white leadt py-5 mt-8  '>
                    <div className='font-bold uppercase text-3xl sm:text-4xl md:text-4xl '>
                        Account Security
                    </div>
                    <div className=' w-full'>
                        <p className='px-2 sm:px-10 text-sm sm:text-base text-gray-300'>
                            Ensuring trust and safety within our community is paramount. Kindly verify your email and phone number to enhance the security of your account and uphold the integrity of our platform.                        </p>
                    </div>
                </div>

                <form className="w-full px-10 flex rounded-b-lg justify-between flex-col bg-gradient-to-r from-[rgb(1,66,106)] to-[#096aa6]">
                    {/* occupation  */}
                    <div className="md:flex md:items-center mb-6 mt-10">
                        <div className="md:w-1/3">
                            <label className="block text-slate-200 font-bold mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                Email
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <div className='flex flex-row justify-between'>
                                <input className="bg-gray-200 w-9/12 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-600"
                                    id="email"
                                    type="text"
                                    disabled
                                    defaultValue={userDetails.email}
                                    placeholder="Enter your phone number"
                                />
                                <button disabled className='flex justify-center rounded-md items-center w-2/12 bg-gray-600 text-slate-100 font-bold'>
                                    Verified
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* // skills  */}
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-slate-200 font-bold mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                                Phone number
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <div className='flex flex-row justify-between'>
                                <input className="bg-gray-200 w-9/12 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-600"
                                    id="phone"
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    onChange={(e) => dispatch(setFormValue({ section: "accountSecurity", key: "phone", value: e.target.value }))}
                                />

                                <button className='flex justify-center rounded-md items-center w-2/12 bg-gray-600 text-slate-100 hover:bg-gray-500 font-bold'
                                    disabled={counter > 0 || verifiedOTP}
                                    onClick={(e) => handleSendOTP(e)}
                                >
                                    {counter !== 0 ? counter : verifiedOTP ? "Verified" : "sendOTP"}
                                </button>
                            </div>
                        </div>
                    </div>

                    {sendOTP &&
                        <div className="md:flex md:items-center justify-center mb-6">
                            <div className="md:w-1/3">
                                <div className='flex flex-row justify-between'>
                                    <input className="bg-gray-200 w-5/12 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-600"
                                        id="otp"
                                        type="tel"
                                        placeholder="Enter OTP"
                                        onChange={(e) => dispatch(setFormValue({ section: "accountSecurity", key: "otp", value: e.target.value }))}
                                    />
                                    <button className='flex justify-center rounded-md items-center w-2/12 bg-gray-600 text-slate-100 hover:bg-gray-500 font-bold'
                                        onClick={(e) => handleVerifiedOTP(e)}
                                    >
                                        Verify
                                    </button>
                                </div>
                            </div>
                        </div>
                    }

                </form>
                {/* //button  */}
                <Link to="/home" onClick={handleFinishButton} className='flex justify-center mt-6 text-white font-bold '>
                    <button className={`w-[150px] py-2 bg-gray-600 hover:bg-gray-700 rounded-lg`}
                    >Finish
                    </button>
                </Link>

            </div>

        </div>
    )
}

export default AccountSecurity