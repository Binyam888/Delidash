import React, { useState } from 'react'
import Header from '../components/Header'
import ExploreMenu from '../components/ExploreMenu'
import FoodDisplay from '../components/FoodDisplay'

function Home() {
    const [category,setCategory] =useState("All")
  return (
    <div className='w-full '>

        <Header/>
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category}/>
    </div>
  )
}

export default Home