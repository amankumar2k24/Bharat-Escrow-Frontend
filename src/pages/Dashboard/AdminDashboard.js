import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import DashboardSidebar from '../../components/DashboardSidebar/DashboardSidebar'

const AdminDashboard = () => {
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
                <Outlet />
            </div>
        </section>
    )
}

export default AdminDashboard;
