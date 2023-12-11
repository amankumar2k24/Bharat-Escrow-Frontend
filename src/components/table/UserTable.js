import React, { useContext, useEffect } from 'react'
import SearchContext from '../../context/SearchContext'
import { Link, useLocation } from 'react-router-dom'
//react-redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchRoleData, setIndividualDetail } from '../../store/slice/roleSlice'

const UserTable = () => {
    const { searchTerm } = useContext(SearchContext)
    const location = useLocation()
    //react-redux
    const dispatch = useDispatch()
    const data = useSelector((state) => state?.role?.data)

    // Remove the leading slash and getting the ROLE by location
    const splitLocation = location.pathname.split("-")[0].substring(1).toLowerCase();
    const capitalizedRole = splitLocation.charAt(0).toUpperCase() + splitLocation.slice(1);

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
                    <th scope="col" className="px-4 sm:px-6 py-3 text-xs font-bold uppercase">Phone</th>
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
                                    onClick={() => dispatch(setIndividualDetail({ type: "user", data }))}
                                >
                                    <Link to="/admin-dashboard/individual-user-detail"> {data.username}</Link>
                                </td>
                                <td className="px-4 sm:px-6 py-4 hidden lg:table-cell text-gray-300">{data.email}</td>
                                <td className="px-4 sm:px-6 py-4 hidden sm:table-cell text-gray-300 ">{data.role}</td>

                                {/* //Buttons Remove and Approved  */}
                                <td className="px-2 sm:px-6 py-4 flex flex-col text-gray-300 gap-2 sm:gap-0 w-[140px] sm:w-full sm:flex-row">
                                    {data.phone}
                                </td>
                            </tr>
                        )
                        ))}

            </tbody>

        </table>
    )
}

export default UserTable;

