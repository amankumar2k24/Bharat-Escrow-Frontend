import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import homeBgImg from "../../assets/Home/homeBgImg.jpg"

const OverviewDo = () => {

    return (
        <section className='container mx-auto mt-40 max-w-2xl flex justify-center px-4 md:px-0 '>
            <div>

                <h5 className="py-4 text-lg sm:text-2xl px-2 font-bold tracking-tight rounded-t bg-gray-600 w-full text-center text-white">
                    What factors lead to success on Bharat Escrow?
                </h5>

                <div className="block p-6 border rounded-b shadow bg-[#01426a] border-[#01426a]">
                    <p className="font-normal text-md sm:text-lg text-slate-100">
                        Craft a standout Bharat Escrow profile to make a lasting first impression because your profile is your key to standing out in the crowd.
                    </p>
                    <ol className='mt-6 text-slate-300 list-decimal px-4 flex flex-col gap-y-2 '>
                        <li>
                            Invest the time needed to craft your profile precisely the way you envision it because perfection deserves patience.
                        </li>
                        <li>
                            Effectively communicate your professional skills to enhance your opportunities for securing meaningful work.
                        </li>
                        <li>
                            Introduce yourself visually! Enhance your profile by uploading a clear and friendly profile picture that puts a face to your name.
                        </li>
                    </ol>
                    <Link to="/sellingOnboarding/overview/dont" className='flex justify-center mt-6 text-white font-bold '>
                        <button className={`w-[150px] py-2 bg-gray-600 hover:bg-gray-700 rounded-lg`}
                        >Continue
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default OverviewDo