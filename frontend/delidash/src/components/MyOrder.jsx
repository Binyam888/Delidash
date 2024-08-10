import React, { useState } from 'react'
import Lottie from "lottie-react";
import orderanimation from '../order.json'
const MyOrder = () => {
  
  const [order,setOrder] = useState(false)
  return (
    <div>
      <div className="lottie max-w-[330px]">
        <h1>Just a demo, will be updated soon </h1>
        <Lottie animationData={orderanimation} />
      </div>
    </div>
  )
}

export default MyOrder