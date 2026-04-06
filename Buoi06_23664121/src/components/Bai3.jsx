import React from 'react'
import Login from './Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Bai3 = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/'/>
            <Route/>
        </Routes>
        </BrowserRouter>
        <Login/>
    </div>
  )
}

export default Bai3
