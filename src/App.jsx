import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Kits from './Pages/Kits.jsx' 
import Leagues from './Pages/Leagues.jsx' 
import Contact from './Pages/Contact.jsx' 
import Cart from './Pages/Cart.jsx' 
import Login from './Pages/Login.jsx' 
import Home from './Pages/Home.jsx' 
import Product from './Pages/Product.jsx'
import Checkout from './Pages/Checkout.jsx'
import ShopConfirmation from './Pages/ShopConfirmation.jsx'

const App = () => {
  return (
    <div className='bg-primary'>
      <BrowserRouter>
      {/* Navvigation links include all pages in website */}
      <Navbar/>
      <Router basename='/Jersey-Sweden'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/kits/:id' element={<Kits/>}/>
        <Route path='/product/:id' element={<Kits/>}/>
        <Route path='/kits' element={<Kits/>} />
        <Route path='/leagues' element={<Leagues/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/kits/:id/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/confirmation' element={<ShopConfirmation/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      </Router>

      </BrowserRouter>
    </div>
  )
}

export default App
