import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Service from './routes/Service'
import Home from './routes/Home'
import Contact from './routes/Contact'

function App(){

  return (
       <>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/service' element={<Service/>} />
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
       </>
  )
}

export default App;