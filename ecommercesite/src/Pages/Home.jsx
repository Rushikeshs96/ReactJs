import React from 'react'
import Announce from '../Components/Announce'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import Categories from '../Components/Categories'

function Home() {
  return (
   <div>
    <Announce/>
    <Navbar/>
    <Slider/>
    <Categories/>
   </div>
   
  )
}

export default Home