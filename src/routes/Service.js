import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimage from '../components/Heroimage'
import ServiceCards from '../components/Service'

const Pricing = () => {
  return (
    <div>
        <Navbar />
        <Heroimage heading='SERVICE.' text='text.'/>
        <ServiceCards />
        <Footer />
    </div>
  )
}

export default Pricing