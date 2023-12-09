import React, { useContext, useEffect, useState } from 'react'
import SearchContext from '../../context/SearchContext'
import { useLocation } from 'react-router-dom'
import { ImCross } from "react-icons/im";
//react-redux
import { useDispatch, useSelector } from 'react-redux'
import { approveUser, deleteUser, fetchRoleData } from '../../store/slice/roleSlice'
import { toast } from 'react-toastify';



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


const Table = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const { searchTerm } = useContext(SearchContext)
    const userDetails = JSON.parse(localStorage.getItem("user"))
    const location = useLocation()
    //react-redux
    const dispatch = useDispatch()
    const data = useSelector((state) => state?.role?.data)

    // Remove the leading slash and getting the ROLE by location
    const splitLocation = location.pathname.split("-")[0].substring(1).toLowerCase();
    const capitalizedRole = splitLocation.charAt(0).toUpperCase() + splitLocation.slice(1);

    // Delete the user
    const handleDeleteUser = async (id, username) => {
        await dispatch(deleteUser(id));
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
        dispatch((fetchRoleData(capitalizedRole)))
    }, [dispatch, capitalizedRole])


    return (
        < table className="w-full text-sm text-left text-gray-500 bg-[rgb(1,66,106)] shadow-md rounded-lg overflow-hidden" >

            <thead className="bg-gray-600 text-white">
                <tr>
                    <th scope="col" className="px-4 sm:px-6 py-3 text-xs font-bold uppercase hidden sm:table-cell">ID</th>
                    <th scope="col" className="px-4 sm:px-6 py-3 text-xs font-bold uppercase">Username</th>
                    <th scope="col" className="px-4 sm:px-6 py-3 text-xs font-bold uppercase hidden lg:table-cell">Email</th>
                    <th scope="col" className="px-4 sm:px-6 py-3 text-xs font-bold uppercase hidden sm:table-cell">Role</th>
                    <th scope="col" className="px-4 sm:px-6 py-3 text-xs font-bold uppercase">Action</th>
                </tr>
            </thead>
            <tbody >

                {/* Table Data Content */}
                {data.length === 0 ? (
                    <tr>
                        <td colSpan="7" className='py-3 px-5 text-lg sm:text-2xl text-center text-gray-300'>
                            No data found
                        </td>
                    </tr>
                ) :
                    (data?.filter(item => item.username?.toLowerCase().includes(searchTerm?.toLowerCase()))
                        .map((data, index) => (
                            <tr key={index} className="border-t border-gray-700 ">
                                <td className="px-4 sm:px-6 py-4 hidden sm:table-cell text-gray-300">{(index + 1)}</td>
                                <td className="px-4 sm:px-6 py-4 font-medium capitalize text-gray-300 cursor-pointer hover:text-white underline"
                                    onClick={() => setSelectedUser(data)}
                                >
                                    {data.username}
                                </td>
                                <td className="px-4 sm:px-6 py-4 hidden lg:table-cell text-gray-300">{data.email}</td>
                                <td className="px-4 sm:px-6 py-4 hidden sm:table-cell text-gray-300 ">{data.role}</td>

                                {/* //Buttons Remove and Approved  */}
                                <td className="px-2 sm:px-6 py-4 flex flex-col gap-2 sm:gap-0 w-[140px] sm:w-full sm:flex-row">
                                    <button className="text-xs font-bold px-4 py-1 rounded bg-red-500 text-white hover:bg-red-600"
                                        onClick={() => handleDeleteUser(data._id, data.username)}
                                    >
                                        Remove
                                    </button>

                                    {(((userDetails.type === "admin") && (location.pathname === "/admin-dashboard")) || (location.pathname === "/admin-dashboard/table")) && (
                                        < button className="text-xs font-bold px-4 py-1 sm:ml-2 rounded bg-green-500 text-white hover:bg-green-600"
                                            onClick={() => handleApprovedUser(data._id, data.username)}
                                        >
                                            Approved
                                        </button>
                                    )}
                                </td>
                            </tr>
                        )
                        ))}

            </tbody>

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

                                        {userDetails.type === "admin" && location.pathname === "/admin-dashboard" && (
                                            < button className="font-bold text-md  bg-green-500 text-white hover:bg-green-600 py-2 px-4  rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                                                onClick={() => handleApprovedUser(selectedUser._id, selectedUser.username)}
                                            >
                                                Approved
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </table >
    )
}

export default Table;

