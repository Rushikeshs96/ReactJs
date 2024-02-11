import React from 'react'
import Announce from '../Components/Announce'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import Categories from '../Components/Categories'
import Products from '../Components/Products'

function Home() {
  return (
   <div>
    <Announce/>
    <Navbar/>
    <Slider/>
    <Categories/>
    <Products/>
    
   </div>
   
  )
}

export default Home