import './App.scss'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './templates/navBar/Navbar'
import { SignUp } from './templates/inscription/SignUp/SignUp'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="NavBar" element={<NavBar />} />
        <Route path="SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}
