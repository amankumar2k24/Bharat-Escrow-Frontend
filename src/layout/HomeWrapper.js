import React from 'react'
import Navbar from '../components/Navbar'
import PrivateRoutes from '../routes/PrivateRoutes'

const HomeWrapper = () => {
    return (
        <>
            <Navbar />
            <PrivateRoutes />
        </>
    )
}

export default HomeWrapper