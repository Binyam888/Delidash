import React from 'react'
import SkeletonLoadingCard from './SkeletonLoadingCard'
import Spinner from './Spinner'

const CardContainer = () => {
   
    const numberOfCards = 8
   
  return (
    <div className=' relative  grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px]'>
      { Array(numberOfCards).fill().map((_,index)=>(
          <SkeletonLoadingCard key={index}/>
      ))}
     <div className="loading absolute   w-[100%] h-full">
        <div className="heading absolute top-[5%] md:top-[40%] md:left-[45%] left-[30%]">
            <h1 className='text-[30px] font-bold animate-pulse'>Loading...</h1>
            <Spinner  size="md"   color="tomato"/>
        </div>
     </div>
    </div>
  )
}

export default CardContainer
