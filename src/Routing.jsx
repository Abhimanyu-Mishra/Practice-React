import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Naya from './Naya'
import Notnaya from './Notnaya'
import { Link } from 'react-router-dom'

const Routing = () => {
  return (
    <div>
    <div>
    
    <Link to='/'><span>Home</span></Link>
    <Link to='/child'><span>About</span></Link>
    <span>Contact</span>
    </div>

    <Routes>
    <Route  path='/' element={<Naya/>}/>
    <Route  path='/child' element={<Notnaya/>}/>


    </Routes>
    
    </div>
  )
}

export default Routing