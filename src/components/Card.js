import { useLocation } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { FaCheck } from "react-icons/fa";
import SearchContext from '../context/SearchContext';
import { ImCross } from "react-icons/im";
//react-redux
import { useDispatch, useSelector } from 'react-redux';
import { approveUser, deleteUser, fetchRoleData } from '../store/slice/roleSlice';
import { toast } from 'react-toastify';

const Card = () => {
    const location = useLocation()
    const [selectedUser, setSelectedUser] = useState(null);
    const { searchTerm } = useContext(SearchContext);
    const userDetails = JSON.parse(localStorage.getItem("user"))
    //react-redux
    const dispatch = useDispatch()
    const userData = useSelector((state) => state?.role?.data)

    // Remove the leading slash and getting the ROLE by location
    const splitLocation = location.pathname.split("-")[0].substring(1).toLowerCase();
    const capitalizedRole = splitLocation.charAt(0).toUpperCase() + splitLocation.slice(1);

    // Delete the user
    const handleDeleteUser = async (id, username) => {
        await dispatch(deleteUser(id));
        setSelectedUser(null)
        dispatch(fetchRoleData(capitalizedRole))
        toast.error(`${username} deleted successfully`)
    }

    //Approved the User 
    const handleApprovedUser = async (id, username) => {
        await dispatch(approveUser(id));
        dispatch(fetchRoleData(capitalizedRole));
        toast.success(`${username} approved successfully`)
    }

    useEffect(() => {
        dispatch(fetchRoleData(capitalizedRole))
    }, [dispatch, capitalizedRole])

    const userInfoFields = [
        { label: 'Email address', key: 'email' },
        { label: 'Phone number', key: 'phone' },
        { label: 'Date of Birth', key: 'dob' },
        { label: 'City', key: 'city' },
        { label: 'State', key: 'state' },
        { label: 'Zip Code', key: 'zipCode' },
        { label: 'Country', key: 'country' },
        { label: 'Adhaar', key: 'adhaar' },
        { label: 'Pan', key: 'pan' },
        { label: 'Description', key: 'description' },
        { label: 'Address1', key: 'address1' },
        { label: 'Address2', key: 'address2' }
    ];

    return (
        <div className='w-[260px] sm:w-full container mx-auto flex flex-row justify-evenly flex-wrap'>

            {userData.length < 1 ? (
                <tr>
                    <td colSpan="7" className='py-3 px-5 text-lg sm:text-2xl text-center text-black'>
                        No data found
                    </td>
                </tr>

            ) : (
                userData?.filter(data => data.username?.toLowerCase().includes(searchTerm?.toLowerCase()))
                    .map((item, index) => (
                        <div key={index} className="card bg-[rgb(1,66,106)] w-full sm:w-3.5/12  overflow-hidden shadow-md rounded-lg border m-2 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                            onClick={() => setSelectedUser(item)}>
                            <div className=" px-2 sm:px-6 py-4">
                                <h3 className="text-xl font-semibold mb-2 text-gray-100 capitalize">{item.username}</h3>
                                <p className="text-sm text-[#eddcdc]">{item.email}</p>
                                <p className="text-sm text-[#eddcdc]">{item.role}</p>
                            </div>
                        </div>
                    )))
            }



            {/* Modal of Selected user whole data  */}
            {selectedUser && (
                <div className="fixed z-10 inset-0 overflow-y-auto mt-40 sm:mt-20">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block ">
                        <div className="fixed inset-0 transition-opacity" onClick={() => setSelectedUser(null)}>
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle">
                            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className='flex flex-row justify-between items-center'>
                                    <h3 className="text-xl sm:text-3xl leading-6 font-medium text-black capitalize pl-6 ">{selectedUser.username}</h3>
                                    <ImCross className='cursor-pointer hover:text-red-700' size={20} onClick={() => setSelectedUser(null)} />
                                </div>
                                {userInfoFields.map((field) => (
                                    <div key={field.key} className="border-t border-gray-200 px-4 py-5 sm:p-0">
                                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <div className="text-sm font-medium text-gray-800">{field.label}</div>
                                            <div className="mt-1 text-sm text-bl ack sm:mt-0 sm:col-span-2">
                                                {selectedUser[field.key]}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                                    <div className="py-3 sm:py-5 flex justify-center flex-col text-center gap-y-2 sm:gap-4 sm:px-6">
                                        <button
                                            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                                            onClick={() => handleDeleteUser(selectedUser._id, selectedUser.username)}
                                        >
                                            Remove User
                                        </button>

                                        {userDetails.type === "admin" && location.pathname === "/admin-dashboard" || location.pathname === "/admin-dashboard/card" &&
                                            < button className="font-bold text-md  bg-green-500 text-white hover:bg-green-600 py-2 px-4  rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                                                onClick={() => handleApprovedUser(selectedUser._id, selectedUser.username)}
                                            >
                                                Approved
                                            </button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Card;
