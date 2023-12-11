import React, { useEffect, useRef, useState } from 'react'
import LogoImg from "../assets/Home/logo.jpg"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BiUserCircle } from 'react-icons/bi'
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross2 } from "react-icons/rx"

const Navbar = () => {
    const [hide, setHide] = useState(true)
    const [user, setUser] = useState(true)
    const [isScrolled, setIsScrolled] = useState(true);
    const location = useLocation();
    const currentPath = location.pathname;
    const navigate = useNavigate()
    const userDetails = JSON.parse(localStorage.getItem("user"))

    const menuItem = {
        buySell: { to: "/buy-sell", text: "Buy or Sell" },
        howitworks: { to: "/howitworks", text: "How it works" },
        faq: { to: "/faqs", text: "Faqs" },
        contact: { to: "/contact", text: "Contact" }
    }


    const handleSignOut = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        navigate("/login")
    }

    // ------------------------DropDown removal on click on screen-------------------
    const dropdownRef = useRef(null);
    const profileIconRef = useRef(null);

    useEffect(() => {
        function handleDocumentClick(event) {
            if (dropdownRef.current &&
                !dropdownRef.current.contains(event.target) && !profileIconRef.current.contains(event.target)) {
                setUser(true);
            }
        }
        document.addEventListener('mousedown', handleDocumentClick);


        // OnScroll Background color change
        function handleScroll() {
            if (window.pageYOffset > 100) {
                setIsScrolled(false)
            }
            else {
                setIsScrolled(true)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            document.removeEventListener('mousedown', handleDocumentClick);
            window.removeEventListener("scroll", handleScroll)
        };
    }, []);



    return (
        <section className='navbar '>
            <nav className={`fixed top-0 left-0 right-0 border-gray-200 border-none py-3 z-50  ${location.pathname === "/home" && isScrolled ? "bg-transparent" : "bg-gradient-to-r from-[#01426a] to-[#096aa6]"}  `}>
                <div className="container justify-between flex flex-wrap items-center sm:justify-between mx-auto p-4">
                    <Link to="/home" className="flex items-center">
                        <img
                            src={LogoImg}
                            className="h-14 text-white w-48 mr-3 rounded-lg"
                            alt="Logo"
                        />
                    </Link>

                    {/* -----End Text ----- */}
                    {currentPath !== "/sellerForm" &&
                        <div className="flex items-center md:order-2 gap-1">

                            <div ref={profileIconRef} onClick={() => setUser(!user)}>
                                <BiUserCircle size={30} className='text-white cursor-pointer relative' />
                            </div>

                            {/* Dropdown menu */}
                            <div
                                ref={dropdownRef}
                                className={`${user ? "hidden" : "block"} z my-4 text-base list-none absolute top-12 right-12 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700`}
                                id="user-dropdown"
                            >
                                <div className="px-4 py-3">
                                    <span className="block text-sm text-gray-900 dark:text-white capitalize">
                                        {userDetails?.username} ({userDetails?.role})
                                    </span>
                                    <span className="block text-sm  text-black-500 truncate dark:text-gray-400">
                                        {userDetails?.email}
                                    </span>
                                </div>
                                <ul className="py-2" aria-labelledby="user-menu-button">

                                    {/* // if admin then show Go To Dashboard else not  */}
                                    {userDetails?.type !== "user" &&
                                        <li>
                                            <Link
                                                to={userDetails?.type === "admin" ? "/admin-dashboard/user" :
                                                    userDetails?.type === "freelancer" ? "/freelancer-dashboard" :
                                                        userDetails?.type === "buyer" ? "/buyer-dashboard" : "/default-dashboard"}
                                                className="block px-4 w-full py-2 text-center text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                onClick={() => setUser(!user)}
                                            >
                                                Go to Dashboard
                                            </Link>
                                        </li>
                                    }

                                    <li>
                                        <button className="block px-4 w-full py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                            onClick={handleSignOut}
                                        >
                                            Sign out
                                        </button>
                                    </li>
                                </ul>
                            </div>


                            <button data-collapse-toggle="navbar-user" type="button"
                                className=" inline-flex items-center p-2 w-10  justify-center text-sm text-white rounded-lg md:hidden focus:outline-none dark:text-black-400 "
                                onClick={() => setHide(!hide)}
                            >
                                {
                                    hide ?
                                        <GiHamburgerMenu size={20} />
                                        :
                                        <RxCross2 size={20} />
                                }
                            </button>
                        </div>
                    }

                    {/* ----Middle Text---- */}
                    <div className={`${hide ? "hidden" : "visible"} items-center border border-1 border-solid border-black shadow-black shadow-lg rounded-lg md:border-none md:shadow-none justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-user">

                        {currentPath !== "/sellerForm" &&
                            <ul className=" text-[17px] flex flex-col font-medium p-4 md:p-0 mt-4 border border-none rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0dark:border-gray-700 ">
                                <li>
                                    <Link
                                        to="/home"
                                        className={`${currentPath === "/home" ? "text-yellow-600 " : currentPath === "/buy-sell" ? "text-white" : "text-white hover:text-yellow-600"} block py-2 pl-3 pr-4 hover:bg-black  md:hover:bg-transparent  text-[16px] rounded md:bg-transparent  md:p-0 `}
                                        aria-current="page"
                                        onClick={() => setHide(!hide)}
                                    >
                                        Home
                                    </Link>
                                </li>
                                {
                                    Object.values(menuItem).map((item, index) => (
                                        <Link to={item.to}
                                            onClick={() => setHide(!hide)}
                                            className={` ${currentPath === item.to ? "text-yellow-600" : "text-white"} block py-2 pl-3 pr-4  text-[16px] rounded hover:text-yellow-600 md:hover:bg-transparent  md:p-0  md:dark:hover:text-yellow-600 hover:bg-black dark:hover:text-yellow-600 md:dark:hover:bg-transparent dark:border-gray-700" `}
                                            key={index}>
                                            {item.text}
                                        </Link>
                                    ))
                                }

                            </ul>
                        }
                    </div>
                </div>
            </nav>
        </section>

    )
}

export default Navbar