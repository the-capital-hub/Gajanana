import React from 'react'
import Hero from '../../HomeCom/Hero/Hero'
import AboutSection from '../../HomeCom/AboutSection/AboutSection'
import MeetDoctors from '../../HomeCom/MeetDoctors/MeetDoctors'
import SmileMakeover from '../../HomeCom/SmileMakeover/SmileMakeover'
import PatientTestimonials from '../../HomeCom/PatientTestimonials/PatientTestimonials'
import DentistryTreatments from '../../HomeCom/DentistryTreatments/DentistryTreatments'
import AppointmentCTA from '../../HomeCom/AppointmentCTA/AppointmentCTA'
import DentalStats from '../../HomeCom/DentalStats/DentalStats'

const Home = () => {
  return (
    <>
    <Hero/>
    <AboutSection/>
    <DentistryTreatments/>
    <MeetDoctors/>
    <SmileMakeover/>
    <DentalStats />

    <PatientTestimonials/>
    <AppointmentCTA/>
    </>
  )
}

export default Home