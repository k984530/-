import React from 'react'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import Footer from '../components/Footer'
import Heroimage from '../components/Heroimage'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <Heroimage heading='CONTACT.' text='contact for us'/>
        <Form />
        <Footer/> 
    </div>
  )
}

export default Contact