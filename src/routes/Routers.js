
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'

import Hero from '../components/UI/Hero'
import About from '../components/UI/About'
import Services from "../components/UI/Services"
import Counter from '../components/UI/Counter'
import Blog from "../components/UI/Blog"
import Contact from "../components/UI/Contact"
import Login from "../components/UI/Login"
import Register from "../components/UI/Register" 


const Routers = () => {
  
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Hero/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Services/>} />
        <Route path='/projects' element={<Counter/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
    </Routes>
   
  )
}

export default Routers