import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Kits from './Pages/Kits.jsx' 
import Leagues from './Pages/Leagues.jsx' 
import Contact from './Pages/Contact.jsx' 
import About from './Pages/About.jsx' 
import Cart from './Pages/Cart.jsx' 
import Login from './Pages/Login.jsx' 
import Home from './Pages/Home.jsx' 

const App = () => {
  return (
    <div>
      <BrowserRouter>
      {/* Navvigation links include all pages in website */}
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/kits' element={<Kits/>} />
        <Route path='/leagues' element={<Leagues/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
