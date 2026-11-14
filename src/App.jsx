import React from 'react'
import MainLayout from '../src/layouts/MainLayout'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import AIFloatingButton from './components/AIFloatingButton/AIFloatingButton'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import ServiceDetails from './Pages/Services/ServiceDetails'
import Doctors from './Pages/Doctors/Doctors'
import Appointment from './Pages/Appointment/Appointment'
import Contact from './Pages/contact/Contact'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

const App = () => {
  return (
    <>
    <Navbar/>
    <ScrollToTop/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path="/services/:slug" element={<ServiceDetails />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer/>
    <WhatsAppButton/>
    <AIFloatingButton/>
    </>
  )
}

export default App