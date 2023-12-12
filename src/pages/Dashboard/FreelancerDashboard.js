import React from 'react'
import { Outlet } from 'react-router-dom'


const FreelancerDashboard = () => {

    return (
        <section className='dashboard rounded-lg mb-10 flex flex-row w-full '>

            {/* //Right section  */}
            <div className={` w-full px-2 pr-4 sm:px-10 mt-36`}>

                <h2 className='text-center text-2xl mb-6 sm:text-4xl md:text-5xl border-b pb-5'>Freelancer Dashboard</h2>
                <Outlet />
            </div>
        </section>
    )

}

export default FreelancerDashboard