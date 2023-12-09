import React, { useContext } from 'react'
import { useEffect } from 'react'
import SearchContext from '../context/SearchContext'
import { useLocation } from 'react-router-dom'
//react-redux
import { useDispatch, useSelector } from 'react-redux'
import { approveUser, deleteUser, fetchRoleData } from '../store/slice/roleSlice'
import { toast } from 'react-toastify';


const Table = () => {
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
                            <tr key={index} className="border-t border-gray-700 dark:hover:bg-gray-600">
                                <td className="px-4 sm:px-6 py-4 hidden sm:table-cell text-gray-300">{(index + 1)}</td>
                                <td className="px-4 sm:px-6 py-4 font-medium capitalize text-gray-300">{data.username}</td>
                                <td className="px-4 sm:px-6 py-4 hidden lg:table-cell text-gray-300">{data.email}</td>
                                <td className="px-4 sm:px-6 py-4 hidden sm:table-cell text-gray-300 ">{data.role}</td>

                                {/* //Buttons Remove and Approved  */}
                                <td className="px-2 sm:px-6 py-4 flex flex-col gap-2 sm:gap-0 w-[140px] sm:w-full sm:flex-row">
                                    <button className="text-xs font-bold px-4 py-1 rounded bg-red-500 text-white hover:bg-red-600"
                                        onClick={() => handleDeleteUser(data._id, data.username)}
                                    >
                                        Remove
                                    </button>

                                    {(userDetails.type === "admin") && (location.pathname === "/admin-dashboard") || (location.pathname === "/admin-dashboard/table") &&
                                        < button className="text-xs font-bold px-4 py-1 sm:ml-2 rounded bg-green-500 text-white hover:bg-green-600"
                                            onClick={() => handleApprovedUser(data._id, data.username)}
                                        >
                                            Approved
                                        </button>
                                    }
                                </td>
                            </tr>
                        )
                        ))}

            </tbody>
        </table >
    )
}

export default Table;

