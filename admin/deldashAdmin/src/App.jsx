import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div >
      <ToastContainer/>
      <Navbar/>
     < hr/>
      <div className="app-content flex">
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Add/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/order' element={<Orders/>}/>

        </Routes>
      </div>
    </div>
  )
}

export default App