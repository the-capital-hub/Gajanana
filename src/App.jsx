import React from 'react'
import MainLayout from '../src/layouts/MainLayout'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import AIFloatingButton from './components/AIFloatingButton/AIFloatingButton'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import About from './Pages/About/About'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer/>
    <WhatsAppButton/>
    <AIFloatingButton/>
    </>
  )
}

export default App