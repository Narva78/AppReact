import './App.scss'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './templates/navBar/Navbar'
import Inscription from './templates/inscription/Inscription'
import Home from './templates/home/Home'
import { Test } from './templates/test/Test'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="NavBar" element={<NavBar />} />
        <Route path="home" element={<Home />} />
        <Route path="inscription" element={<Inscription />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
