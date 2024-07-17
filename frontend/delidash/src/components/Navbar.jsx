import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
function Navbar() {

    const [mobile,setMobile]= useState(false)
    console.log(mobile)
  return (
   <header className='Navbar md:px-[30px] bg-slate-50 w-full h-[50px] flex shadow-md '>
    <nav className='flex md:justify-between w-full items-center justify-around'>
      <h1>Logo</h1>
      <ul className='flex gap-3 max-md:hidden'>
        <li>Home</li>
        <li>Menu</li>
        <li>mobile-app</li>
        <li>contact us</li>
      </ul>

       {/* Above md screeen */}
      <div className="logos flex gap-4 cursor-pointer  ">
        <CiSearch  className='size-[20px]'/>
        <FaShoppingCart className='size-[20px]' />
        <FaUser className='size-[20px]'/>
      </div>

      {/* mobile-screen */}
        <div>
        <button onClick={()=>setMobile(prev=>!prev)}  className='fixed z-10 right-5 top-3 md:hidden '><IoMenuSharp size={30}/></button>
        </div>
       

        {mobile && (
            <div className=' bg-slate-500  fixed right-0 top-0  flex justify-center items-center w-full pt-[50px] pb-[20px] md:hidden'>
              <ul className='flex gap-4 flex-col  justify-center text-center'>
            <li>Home</li>
            <li>Menu</li>
            <li>mobile-app</li>
            <li>contact us</li>
            </ul>
            </div>
           
        )}
     

        

    </nav>

   </header>
  )
}

export default Navbar