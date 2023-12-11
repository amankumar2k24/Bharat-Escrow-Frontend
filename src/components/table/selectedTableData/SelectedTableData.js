import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { SERVER_URL } from '../../../constants'
import { toast } from 'react-toastify'
import axios from 'axios'

const SelectedTableData = () => {
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
                    <div className="border-b border-gray-900/10 pb-12">
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
                                <img src={individualUserDetail?.imageURL} className="flex items-center gap-x-3 h-20 w-20 " />
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
                <button className='bg-red-500' onClick={handleStatus}>Reject</button>
                <button type='button' className='bg-green-500' onClick={() => handleStatus(true)}>Approved</button>
            </div>


        </>
    )
}

export default SelectedTableData