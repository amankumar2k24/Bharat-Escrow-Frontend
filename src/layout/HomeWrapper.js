import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import PrivateRoutes from '../routes/PrivateRoutes'
import { fetchRoleData, fetchSellerData } from '../store/slice/roleSlice'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

const HomeWrapper = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const splitLocation = location.pathname.split("-")[0].substring(1).toLowerCase();
    const capitalizedRole = splitLocation.charAt(0).toUpperCase() + splitLocation.slice(1);

    useEffect(() => {
        dispatch((fetchSellerData()))
        dispatch((fetchRoleData(capitalizedRole)))
    }, [dispatch, capitalizedRole])

    return (
        <>
            <Navbar />
            <PrivateRoutes />
        </>
    )
}

export default HomeWrapper