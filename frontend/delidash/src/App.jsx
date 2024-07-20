import React from 'react'
import Navbar from './components/Navbar'
import { Routes ,Route} from "react-router-dom"
import Home from './pages/Home'
import PlaceOrder from './pages/PlaceOrder'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import { useState } from 'react'
import LoginPopUp from './components/LoginPopUp'

function App() {
  const [login,setLogin]=useState(false)
  return (
    <>
    {login ?<LoginPopUp setLogin={setLogin} /> : <></> }
    <div>
      <Navbar setLogin={setLogin}/>
      <Routes>
        <Route path='/'  element={ <Home/> }/>
        <Route path='/order' element={ <PlaceOrder/> }/>
        <Route path='/cart' element={ <Cart/> }/>

      </Routes>
      
    </div>
    <Footer/>
    </>
  )
}

export default App