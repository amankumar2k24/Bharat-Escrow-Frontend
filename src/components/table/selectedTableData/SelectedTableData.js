import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { SERVER_URL } from '../../../constants'
import { toast } from 'react-toastify'
import { RxCross1 } from 'react-icons/rx'
import axios from 'axios'

const SelectedTableData = () => {
    const [modal, setModal] = useState(false)
    const [adminMessage, setAdminMessage] = useState("")
    const { individualUserDetail } = useSelector((state) => state.role)
    console.log(individualUserDetail)

    const handleStatus = (status) => {
        let body = { id: individualUserDetail._id, isApproved: status, adminMessage }
        axios?.post(`${SERVER_URL}/seller/approved-seller`, body).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
            toast.error(err.data.response.message)
        })
    }

    return (
        <>
            <form>
                <div className="space-y-12">
                    <div className=" pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Profile
                        </h2>
                        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full flex flex-row justify-between">
                                <label
                                    htmlFor="username"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Username
                                </label>
                                <div className="">
                                    {individualUserDetail?.username}
                                </div>
                            </div>
                            {/* //email */}
                            <div className="col-span-full flex flex-row justify-between">
                                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2">
                                    {individualUserDetail?.email}
                                </div>
                            </div>

                            {/* //type */}
                            <div className="col-span-full flex flex-row justify-between">
                                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                    Role
                                </label>
                                <div className="mt-2">
                                    {individualUserDetail?.role}
                                </div>
                            </div>
                            {/* //photo  */}
                            <div className="col-span-full flex flex-row justify-between">
                                <label
                                    htmlFor="photo"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Photo
                                </label>
                                <img src={individualUserDetail?.imageURL} alt="userImg" className="flex items-center gap-x-3 h-20 w-20 " />
                            </div>
                        </div>
                    </div>

                    {/* ////////Personal info---------------------------- */}
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Personal Information
                        </h2>
                        {/* //DOB  */}
                        <div className="col-span-full flex flex-row justify-between">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                Address1
                            </label>
                            <div className="mt-2">
                                {individualUserDetail?.dob}
                            </div>
                        </div>
                        {/* //address  */}
                        <div className="col-span-full flex flex-row justify-between">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                Address1
                            </label>
                            <div className="mt-2">
                                {individualUserDetail?.address1}
                            </div>
                        </div>

                        <div className="col-span-full flex flex-row justify-between">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                Address2
                            </label>
                            <div className="mt-2">
                                {individualUserDetail?.address1}
                            </div>
                        </div>

                        <div className="col-span-full flex flex-row justify-between">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                City
                            </label>
                            <div className="mt-2">
                                {individualUserDetail?.city}
                            </div>
                        </div>

                        <div className="col-span-full flex flex-row justify-between">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                State
                            </label>
                            <div className="mt-2">
                                {individualUserDetail?.state}
                            </div>
                        </div>

                        <div className="col-span-full flex flex-row justify-between">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                Zip Code
                            </label>
                            <div className="mt-2">
                                {individualUserDetail?.zipCode}
                            </div>
                        </div>

                        <div className="col-span-full flex flex-row justify-between">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                Country
                            </label>
                            <div className="mt-2">
                                {individualUserDetail?.country}
                            </div>
                        </div>

                        <div className="col-span-full flex flex-row justify-between">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                Description
                            </label>
                            <div className="mt-2">
                                {individualUserDetail?.description}
                            </div>
                        </div>

                        <div className="col-span-full flex flex-row justify-between">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                Phone
                            </label>
                            <div className="mt-2">
                                {individualUserDetail?.phone}
                            </div>
                        </div>

                        <div className="col-span-full flex flex-row justify-between">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                Adhaar
                            </label>
                            <div className="mt-2">
                                {individualUserDetail?.adhaar}
                            </div>
                        </div>

                        <div className="col-span-full flex flex-row justify-between">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                Pan
                            </label>
                            <div className="mt-2">
                                {individualUserDetail?.pan}
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Other Information
                        </h2>

                        <div className="col-span-full flex flex-row justify-between">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                Buisness Banking
                            </label>
                            <div className="mt-2">
                                {individualUserDetail?.buisnessBanking}
                            </div>
                        </div>

                        <div className="col-span-full flex flex-row justify-between">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                Company KYC
                            </label>
                            <div className="mt-2">
                                {individualUserDetail?.companyKYC}
                            </div>
                        </div>

                        <div className="col-span-full flex flex-row justify-between">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                Direct KYC
                            </label>
                            <div className="mt-2">
                                {individualUserDetail?.directKYC}
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <div className='flex flex-row justify-between'>
                <button
                    data-modal-target="popup-modal"
                    data-modal-toggle="popup-modal"
                    className="block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    type="button"
                    onClick={() => setModal(true)}>
                    Reject
                </button>
                <button type='button' className='block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
                    onClick={() => handleStatus(true)}>
                    Approved
                </button>
            </div>

            {/* //Modal Code start here  */}
            <>
                <div
                    id="popup-modal"
                    tabIndex={-1}
                    className={` ${modal ? "block" : "hidden"}  overflow-y-auto overflow-x-hidden fixed top-[30%] right-0 left-[5%] sm:left-[20%] md:left-[30%] z-50 justify-center items-center w-[90%] sm:w-full max-h-full`}
                >
                    <div className="relative p-4 w-full max-w-md max-h-full ">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button
                                type="button"
                                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="popup-modal"
                            >
                                {/* CLose icons  */}

                                <div onClick={() => setModal(false)}>
                                    <RxCross1 size={20} />
                                </div>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="p-4 md:p-5 text-center flex flex-col">
                                <h2 className='text-xl my-4 text-gray-300'>Admin message</h2>

                                <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border outline-none " placeholder="Write your thoughts here..."
                                    onChange={(e) => setAdminMessage(e.target.value)}
                                >
                                </textarea>
                                <div className='flex flex-row justify-between mt-6'>
                                    {/* //Cancel Button  */}
                                    <button
                                        data-modal-hide="popup-modal"
                                        type="button"
                                        className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
                                        onClick={() => setModal(false)}
                                    >
                                        Cancel
                                    </button>
                                    {/* Reject modal Button  */}
                                    <button
                                        data-modal-hide="popup-modal"
                                        type="button"
                                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                        onClick={() => handleStatus(false)}
                                    >
                                        Reject
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </>
    )
}

export default SelectedTableData