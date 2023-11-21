import './App.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './templates/navBar/Navbar'
import { InscriptionForm } from './components/inscription/inscriptionForm/InscriptionForm'
import Inscription from './templates/inscription/Inscription'
import { InscriptionBtn } from './components/inscription/inscriptionBtn/InscriptionBtn'
import { Test } from './templates/test/Test'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="NavBar" element={<NavBar />} />
        <Route path="btn" element={<InscriptionBtn />} />
        <Route path="formIns" element={<InscriptionForm />} />
        <Route path="inscription" element={<Inscription />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
