import React from 'react'
import Nav from './assets/PAges/Nav.jsx'
import Home from './assets/PAges/Home.jsx'
import Projects from './assets/PAges/Projects.jsx'
import Contact from './assets/PAges/Contact.jsx'
import { Route ,Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>


      <Nav />
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Projects' element={<Projects/>}/>



        </Routes>  



    </div>
  )
}

export default App