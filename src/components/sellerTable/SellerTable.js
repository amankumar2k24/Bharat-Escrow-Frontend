import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
//react-redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchSellerData, setIndividualDetail } from '../../store/slice/roleSlice'

const SellerTable = () => {

    //react-redux
    const dispatch = useDispatch()
    const data = useSelector((state) => state?.role?.sellerData)

    useEffect(() => {
        dispatch((fetchSellerData()))
    }, [dispatch])

    const handleSendData = (item) => {
        dispatch(setIndividualDetail({ type: "seller", data: item }));
        localStorage.setItem("selectedSellerID", item._id)
    }

    return (
        < table className="w-full text-sm text-left text-gray-500 bg-[rgb(1,66,106)] shadow-md rounded-lg overflow-hidden" >

            <thead className="bg-gray-600 text-white">
                <tr>
                    <th scope="col" className="px-4 sm:px-6 py-3 text-xs font-bold uppercase table-cell">ID</th>
                    <th scope="col" className="px-4 sm:px-6 py-3 text-xs font-bold uppercase">Username</th>
                    <th scope="col" className="px-4 sm:px-6 py-3 text-xs font-bold uppercase hidden sm:table-cell">Email</th>
                    <th scope="col" className="px-4 sm:px-6 py-3 text-xs font-bold uppercase table-cell">Phone</th>
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
                    (data?.map((item, index) => (
                        <tr key={index} className="border-t border-gray-700 ">
                            <td className="px-4 sm:px-6 py-4 table-cell text-gray-300">{(index + 1)}</td>
                            <td className="px-4 sm:px-6 py-4 font-medium capitalize text-gray-300 cursor-pointer hover:text-white underline"
                                onClick={() => handleSendData(item)}
                            >
                                <Link to="/admin-dashboard/individual-seller-detail"> {item.fullName}</Link>
                            </td>
                            <td className="px-4 sm:px-6 py-4 hidden sm:table-cell text-gray-300">{item.email}</td>
                            <td className="px-4 sm:px-6 py-4 table-cell text-gray-300 ">{item.phone}</td>

                        </tr>
                    )
                    ))}

            </tbody>

        </table>
    )
}

export default SellerTable;

