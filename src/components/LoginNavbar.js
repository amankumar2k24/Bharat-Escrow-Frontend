import React, { useEffect, useRef, useState } from 'react'
import BeIMg from "../assets/Home/BE.png"
import { Link } from 'react-router-dom'
import { BiUserCircle } from 'react-icons/bi'

const LoginNavbar = () => {
    const [user, setUser] = useState(true)

    const dropdownRef = useRef(null)
    const profileIconRef = useRef(null)

    useEffect(() => {

        function handleDocumentClick(event) {
            if (dropdownRef.current &&
                !dropdownRef.current.contains(event.target) && !profileIconRef.current.contains(event.target)) {
                setUser(true);
            }
        }

        document.addEventListener("mousedown", handleDocumentClick)

        return () => {
            document.addEventListener("mousedown", handleDocumentClick)
        }
    }, [])


    return (
        <section className='navbar'>
            <nav className=" fixed top-0 left-0 right-0  border-gray-200 dark:bg-white-900 border-none py-3 z-50 bg-gradient-to-r from-[#01426a] to-[#096aa6]">
                <div className="max-w-screen-xl justify-center flex flex-wrap items-center sm:justify-between mx-auto p-4">
                    <div className="flex items-center">
                        <img
                            src={BeIMg}
                            className="h-8 mr-3 bg-yellow-600 rounded-lg"
                            alt="Flowbite Logo"
                        />
                        <Link to="/home" className="self-center text-2xl font-semibold flex-wrap text-yellow-600 font-roboto ">
                            BHARAT<span className='text-white'>ESCROW</span>
                        </Link>
                    </div>

                    {/* <Middle Slider > */}
                    <div className='hidden lg:block textShopHubParent'>
                        <div className='textShopHubChild text-white text-xl tracking-widest'>Welcome to BHARAT<span className='text-yellow-500'>ESCROW</span></div>
                    </div>


                    {/* -----End Text ----- */}
                    <div className="flex items-center md:order-2 gap-1">
                        <div ref={profileIconRef} onClick={() => setUser(!user)}>
                            <BiUserCircle size={30} className='cursor-pointer text-white relative ' />
                        </div>

                        {/* Dropdown menu */}
                        <div
                            ref={dropdownRef}
                            className={`${user ? "hidden" : "block"} z-50  mt-4 text-base absolute top-16 right-12 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700`}
                            id="user-dropdown"
                        >
                            <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900 dark:text-white">
                                    Admin
                                </span>
                                <span className="block text-sm  text-black-500 truncate dark:text-gray-400">
                                    bharatescrow.com
                                </span>
                            </div>
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                <li>
                                    <Link to="/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        onClick={() => setUser(!user)}
                                    >
                                        Register
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        onClick={() => setUser(!user)}
                                    >
                                        Login
                                    </Link>
                                </li>

                            </ul>
                        </div>

                    </div>

                </div>
            </nav>
        </section>

    )
}

export default LoginNavbar