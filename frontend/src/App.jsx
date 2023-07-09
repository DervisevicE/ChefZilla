import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import LandingPage from "./Components/LandingPage/LandingPage"
import SignupPage from "./Components/SignupPage/SignupPage"
import LoginPage from "./Components/LoginPage/LoginPage"
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthContext } from "./hooks/useAuthContext"

function App() {

  const {user} = useAuthContext()

  return (
    <div className="w-[95%] m-auto flex">
      <Navbar />

      <Routes>
        <Route path="/login" element={!user ? <LoginPage /> : <Navigate to='/' />} />
        <Route path='/signup' element={!user ? <SignupPage /> : <Navigate to='/' />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  )
}

export default App
