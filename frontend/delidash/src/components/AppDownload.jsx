import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className='App-download  mt-[100px] max-sm:mt-[50px] text-[20px] max-sm:text-[16px] text-center font-bold flex flex-col  items-center max-sm:mx-[2%]' id='mobile-app'>
        <p>For Better Experience Download <br /> Deldash App</p>
        <div className="app-download-platform flex justify-center gap-[10px] mt-[20px]">
            <img src={assets.play_store} alt="playstore" />
            <img src={assets.app_store} alt="Appstore" />
        </div>
    </div>
  )
}

export default AppDownload