import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { approveUser, deleteUser, setDeleteUser, setIndividualDetail } from '../../../store/slice/roleSlice'
import { useNavigate } from 'react-router-dom'

const SelectedTableData = () => {
    const navigate = useNavigate()
    const userID = localStorage.getItem("selectedUserID")
    const dispatch = useDispatch()
    const { individualUserDetail, data: userData } = useSelector((state) => state.role)

    const handleStatus = async (status) => {
        if (status) {
            dispatch(approveUser(individualUserDetail._id))
            navigate("/admin-dashboard/user")
        } else {
            await dispatch(setDeleteUser(individualUserDetail._id))
            await dispatch(deleteUser(individualUserDetail._id))
            navigate("/admin-dashboard/user")
        }
    }

    useEffect(() => {
        const data = userData.filter((item) => item._id === userID)
        dispatch(setIndividualDetail({ type: "user", data: data[0] }));
    }, [dispatch, userID, userData])

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
                    onClick={() => handleStatus(false)}>
                    Reject
                </button>
                <button type='button' className='block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
                    onClick={() => handleStatus(true)}>
                    Approved
                </button>
            </div>



        </>
    )
}

export default SelectedTableData