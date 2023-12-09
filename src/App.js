import React, { useEffect } from 'react'
import LoginWrapper from './layout/LoginWrapper'
import HomeWrapper from './layout/HomeWrapper'
import { useLocation, useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "" || location.pathname === "/") {
      navigate("/login")
    }
  }, [location, navigate])

  return (
    <>
      <ToastContainer position='top-left' newestOnTop={true} autoClose={1500} />
      {
        location.pathname === "" || location.pathname === "/" || location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/forgetPassword" || location.pathname === "/changePassword"
          ?
          <LoginWrapper />
          :
          <HomeWrapper />
      }
    </>
  )
}

export default App


