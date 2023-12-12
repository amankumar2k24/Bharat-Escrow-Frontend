import React, { useEffect } from 'react'
import { MdPlayArrow } from 'react-icons/md';
import { VscTriangleDown } from 'react-icons/vsc';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const DashboardSidebar = ({ setHide, hide, showAdmin, setShowAdmin, showSubAdmin, setShowSubAdmin }) => {
    const userDetails = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
        const updateScreenSize = () => {
            setHide(window.innerWidth <= 910);
        };

        updateScreenSize();

        window.addEventListener('resize', updateScreenSize);
        return () => window.removeEventListener('resize', updateScreenSize);
    }, [setHide]);


    return (
        <>
            {userDetails?.type === "admin" && (
                <div className={`relative ${hide ? "w-[0px]" : "w-[330px]"} z-40 mt-10 `}>

                    <div className={` bg-[rgb(1,66,106)] fixed ${hide ? "-left-[180px] mt-32 sm:mt-24" : "left-0 w-[220px] sm:w-[250px] mt-32 sm:mt-24"} transition-all duration-500 -top-4 h-full`}>
                        <div className='realtive flex justify-between items-center px-2 py-2 gap-2 mt-12'>
                            <span className="text-xl text-center text-white capitalize font-bold">Dashboard Panel</span>
                            <button data-collapse-toggle="navbar-user" type="button"
                                className={` ${hide ? "-right-7" : "-right-0"} absolute  p-2 w-8 h-8 justify-center flex items-center text-sm text-white bg-[rgba(1,66,106,0.93)] hover:text-white hover:bg-[rgb(1,66,106)] rounded-lg focus:outline-none dark:text-black-400`}
                                onClick={() => setHide(!hide)}
                            >
                                {
                                    hide ?
                                        <RxCross2 size={20} />
                                        :
                                        <GiHamburgerMenu size={20} />
                                }
                            </button>
                        </div>

                        {/* //Data  */}
                        <ul className='flex mt-10 flex-col'>
                            <li className='text-md text-white flex px-4 items-center gap-4 py-2 cursor-pointer'
                                onClick={() => setShowAdmin(!showAdmin)}
                            >
                                {showAdmin ? <VscTriangleDown /> : <MdPlayArrow />}
                                <span className='text-lg font-medium'>Admin</span>
                            </li>
                            
                            {showAdmin && (
                                <>
                                    <ul className='flex flex-col pl-4'>
                                        <li className='text-md text-white flex flex-row px-1 items-center bg-[#374351] hover:bg-white hover:text-[#374351] gap-4 py-2'
                                            onClick={() => {
                                                setShowAdmin(true);
                                                setHide(!hide)
                                            }}
                                        >
                                            <MdPlayArrow />
                                            <Link to='/admin-dashboard/user'>User</Link>
                                        </li>
                                    </ul>
                                    <ul className='flex flex-col pl-4'>
                                        <li className='text-md text-white flex flex-row px-1 items-center bg-[#374351] hover:bg-white hover:text-[#374351] gap-4 py-2'
                                            onClick={() => {
                                                setShowAdmin(true);
                                                setHide(!hide)
                                            }}
                                        >
                                            <MdPlayArrow />
                                            <Link to='/admin-dashboard/seller'>Seller</Link>
                                        </li>
                                    </ul>
                                </>
                            )}
                        </ul>

                        <ul className='flex flex-col'>
                            <li className='text-md text-md  text-white flex items-center px-4 gap-4 py-2 cursor-pointer' onClick={() => setShowSubAdmin(!showSubAdmin)}>
                                {showSubAdmin ? <VscTriangleDown /> : <MdPlayArrow />}
                                <span className={`${hide ? "hidden" : "block"} text-lg font-medium`}>Sub-Admin</span>
                            </li>
                            {showSubAdmin && (
                                <ul className='flex flex-col pl-4 '>
                                    <li className='text-md text-white bg-[#374351] hover:bg-white hover:text-[#374351] flex flex-row px-1 items-center py-2 gap-4'>
                                        <MdPlayArrow />
                                        <Link to='/freelancer-dashboard'>Freelancer</Link>
                                    </li>
                                    <li className='text-md text-white bg-[#374351] hover:bg-white hover:text-[#374351] flex flex-row px-1 items-center py-2 gap-4'>
                                        <MdPlayArrow />
                                        <Link to='/buyer-dashboard'>Buyer</Link>
                                    </li>
                                    <li className='text-md text-white bg-[#374351] hover:bg-white hover:text-[#374351] flex flex-row px-1 items-center py-2  gap-4'>
                                        <MdPlayArrow />
                                        <Link to='/seller-dashboard'>Seller</Link>
                                    </li>
                                </ul>
                            )}
                        </ul>
                    </div>
                </div >
            )}
        </>
    )
}

export default DashboardSidebar