import React, { useState } from 'react'
import Lottie from "lottie-react";
import orderanimation from '../order.json'
const MyOrder = () => {
  
  const [order,setOrder] = useState(false)
  return (
    <div>
      <div className="lottie max-w-[330px]">
        <h1>demo updated soon</h1>
        <Lottie animationData={orderanimation} />
      </div>
    </div>
  )
}

export default MyOrder