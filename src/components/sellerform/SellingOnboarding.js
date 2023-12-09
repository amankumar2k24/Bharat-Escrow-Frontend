import React from 'react';
import { Outlet } from 'react-router-dom';

const SellingOnboarding = () => {
    const userDetails = JSON.parse(localStorage.getItem("user"))

    return (
        userDetails?.role !== "Buyer" && <Outlet />
    );
}

export default SellingOnboarding;
