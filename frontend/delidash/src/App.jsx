import React from 'react'
import Navbar from './components/Navbar'
import { Routes ,Route} from "react-router-dom"
import Home from './pages/Home'
import PlaceOrder from './pages/PlaceOrder'
import Cart from './pages/Cart'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <div>
      <Navbar/>
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