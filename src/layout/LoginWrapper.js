import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import LoginNavbar from '../components/LoginNavbar'
import ForgetPassword from '../pages/Auth/ForgetPassword'
import ChangePassword from '../pages/Auth/ChangePassword'

const LoginWrapper = () => {
  return (
    <>
      <LoginNavbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/changePassword" element={<ChangePassword />} />
      </Routes>

    </>
  )
}

export default LoginWrapper