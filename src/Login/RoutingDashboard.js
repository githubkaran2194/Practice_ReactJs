import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import LoginForm from './LoginForm'

const RoutingDashboard = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Header/>}/>
                <Route path='/login' element={<LoginForm/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default RoutingDashboard