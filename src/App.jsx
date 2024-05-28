import './App.scss'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SignUp } from './templates/inscription/SignUp/SignUp'
import { NavBarHook } from './components/NavBar/NavBarHook'
import { Home } from './components/home/Home'

export default function App() {
  return (
    <Router>
      <NavBarHook />
      <main className="main-content">
        <Routes>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </main>
    </Router>
  )
}
