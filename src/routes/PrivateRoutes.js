import React, { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Contact from '../pages/Contact'
import HowItWorks from '../pages/HowItWorks'
import Home from '../pages/Home'
import BuySell from '../pages/BuySell'
import Faq from '../pages/Faq'
import Disclaimer from '../pages/Disclaimer'
import Privacy from '../pages/Privacy'
import AdminDashboard from '../pages/Dashboard/AdminDashboard'
import Card from '../components/Card'
import Table from '../components/Table'
import FreelancerDashboard from '../pages/Dashboard/FreelancerDashboard'
import BuyerDashboard from '../pages/Dashboard/BuyerDashboard'
import SellerDashboard from '../pages/Dashboard/SellerDashboard'
import ErrorPage from './ErrorPage'
import SelectedFreelancer from '../pages/SelectedFreelancer'
import OverviewDo from '../components/sellerform/OverviewDo'
import OverviewDont from '../components/sellerform/OverviewDont'
import AccountSecurity from '../components/sellerform/AccountSecurity'
import ProfessionalInfo from '../components/sellerform/ProfessionalInfo'
import PersonalInfo from '../components/sellerform/PersonalInfo'
import SellingOnboarding from '../components/sellerform/SellingOnboarding'


const PrivateRoutes = () => {
    const location = useLocation();
    const userDetails = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);


    return (
        <>
            <Routes>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/buy-sell' element={<BuySell />}></Route>
                <Route path='/faqs' element={<Faq />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/howitworks' element={<HowItWorks />}></Route>
                <Route path='/disclaimer' element={<Disclaimer />}></Route>
                <Route path='/privacy' element={<Privacy />}></Route>
                <Route path='/selected-freelancer/:id' element={<SelectedFreelancer />}></Route>

                <Route path='/sellingOnboarding' element={<SellingOnboarding />}>
                    <Route index element={<OverviewDo />} />
                    <Route path='/sellingOnboarding/overview/do' element={<OverviewDo />} />
                    <Route path='/sellingOnboarding/overview/dont' element={<OverviewDont />} />
                    <Route path='/sellingOnboarding/personal-info' element={<PersonalInfo />} />
                    <Route path='/sellingOnboarding/professional-info' element={<ProfessionalInfo />} />
                    <Route path='/sellingOnboarding/account-security' element={<AccountSecurity />} />
                </Route>


                <Route path="/dashboard" element={
                    userDetails?.type === "admin" ? <Navigate to="/admin-dashboard/table" /> :
                        userDetails?.type === "freelancer" ? <Navigate to="/freelancer-dashboard" /> :
                            userDetails?.type === "buyer" ? <Navigate to="/buyer-dashboard" /> :
                                userDetails?.type === "seller" ? <Navigate to="/seller-dashboard" /> :
                                    <Navigate to="/home" /> // default dashboard path
                } />

                <Route path="/admin-dashboard" element={<AdminDashboard />}>
                    <Route index element={<Table />} />
                    {/* <Route path="/admin-dashboard/card" element={<Card />} /> */}
                    <Route path="/admin-dashboard/table" element={<Table />} />
                </Route>

                <Route path="/freelancer-dashboard" element={<FreelancerDashboard />}>
                    <Route index element={<Table />} />
                    {/* <Route path="/freelancer-dashboard/card" element={<Card />} /> */}
                    <Route path="/freelancer-dashboard/table" element={<Table />} />
                </Route>
                <Route path="/buyer-dashboard" element={<BuyerDashboard />}>
                    <Route index element={<Table />} />
                    {/* <Route path="/buyer-dashboard/card" element={<Card />} /> */}
                    <Route path="/buyer-dashboard/table" element={<Table />} />
                </Route>
                <Route path="/seller-dashboard" element={<SellerDashboard />}>
                    <Route index element={<Table />} />
                    {/* <Route path="/seller-dashboard/card" element={<Card />} /> */}
                    <Route path="/seller-dashboard/table" element={<Table />} />
                </Route>


                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    )
}

export default PrivateRoutes