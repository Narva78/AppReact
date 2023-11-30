import './App.scss'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './templates/navBar/Navbar'
import { SignUp } from './templates/inscription/SignUp/SignUp'
import Home from './templates/home/Home'
import { ProgressBar } from './components/inscription/progressBar/ProgressBar'
import { StrengthPassword } from './components/inscription/password/StrengthPassword/StrengthPassword'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="force" element={<StrengthPassword />} />
        <Route path="progressBar" element={<ProgressBar />} />
        <Route path="NavBar" element={<NavBar />} />
        <Route path="home" element={<Home />} />
        <Route path="SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}
