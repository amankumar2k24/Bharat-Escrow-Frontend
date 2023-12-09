import React, { useState } from 'react'
import { HiSearch } from "react-icons/hi"
import { Link, Outlet } from 'react-router-dom'
import SearchContext from '../../context/SearchContext'
import DashboardSidebar from '../../components/DashboardSidebar/DashboardSidebar'

const AdminDashboard = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [showAdmin, setShowAdmin] = useState(false);
    const [showSubAdmin, setShowSubAdmin] = useState(false);
    const [hide, setHide] = useState(false)

    return (
        <section className='dashboard rounded-lg mb-10 flex flex-row w-full'>

            {/* Sidebar section */}
            <DashboardSidebar showAdmin={showAdmin} setShowAdmin={setShowAdmin} showSubAdmin={showSubAdmin} setShowSubAdmin={setShowSubAdmin} hide={hide} setHide={setHide} />
            {/* Sidebar section */}

            {/* //Right section  */}
            <div className={` w-full px-2 pr-4 sm:px-10 mt-36 `}>

                <h2 className='text-center text-gray-800 text-2xl mb-6 sm:text-4xl md:text-5xl border-b pb-5'>Admin Dashboard</h2>

                <div className="mt-6 mb-4 flex flex-wrap justify-center sm:justify-between items-center gap-4">
                    <div>
                        <Link to="/admin-dashboard/card"
                            className='px-5 py-2 hover:bg-gray-200 rounded-md text-sm text-gray-800 mr-2'>Card View</Link>
                        <Link to="/admin-dashboard/table"
                            className='px-5 py-2 hover:bg-gray-200 rounded-md text-sm text-gray-800'>Table View</Link>
                    </div>

                    <div className="relative ">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <HiSearch className='text-gray-400' />
                        </div>
                        <input
                            type="text"
                            id="table-search"
                            className="block w-full pl-10 pr-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-md placeholder-gray-500 focus:outline-none focus:bg-white focus:border-blue-300"
                            placeholder="Search by username..."
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
                    <Outlet />
                </SearchContext.Provider>
            </div>
        </section>
    )
}

export default AdminDashboard;
export { SearchContext }
