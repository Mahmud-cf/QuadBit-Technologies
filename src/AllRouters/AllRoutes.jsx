import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Services from '../Pages/Services'

function AllRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/services' element={<Services/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes