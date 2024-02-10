import { ArrowLeftOutlined, ArrowRightOutlined} from '@material-ui/icons'
import React, { useState } from 'react'
import { ApiSlides } from '../api/SliderApi'

function Slider() {

  const[Slides]=useState(ApiSlides)
  const[activeSlide,setActiveSlide]=useState(0)

  const nextSlide=()=>{
    if(activeSlide===Slides.length-1)
    {
      setActiveSlide(0);
    }
    else{
      setActiveSlide(activeSlide+1) 
    }
  }

  const preSlide=()=>{
    if(activeSlide===0){
      setActiveSlide(activeSlide.length-1)
    }
    else{
      setActiveSlide(activeSlide-1 )
    }
  }

  return (
    <div className='ParentDiv h-[540px] bg-white flex items-center justify-between'>
       {/* leftarrowdiv */}
        <div className='leftArrow rounded-full bg-grey fle justify-center items-center shadow-sm hover:cursor-pointer'>
            <ArrowLeftOutlined style={{fontSize:'50px'}} onClick={preSlide}/>
        </div>

        {/* sliderdiv */}
        {Slides.map((slide,index)=>{
          if(index===activeSlide){
            return(<div className={'wrapper flex w-full h-full justify-center items-center shadow-2xl rounded-lg  overflow-hidden relative'}>
            <div className='slide flex items-center justify-center'>
               <div className='forImage flex flex-1 h-full justify-center items-center'>
               <img 
               className='h-full w-full object-cover'
                src={slide.src}
                alt='slide_img'
                />
                 <div className='des flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black'>
                <h2 className='text-[44px]'>{slide.content.h2}</h2>
                <p className='text-[20px]'>{slide.content.p}</p>
                <button className='btn ml-20 mr-20'>Shop Now</button>
               </div>
               </div>
            </div>
        </div>)
          }
        })}

        
        {/* rigtharrowdiv */}
        <div className='rightArrow rounded-full bg-grey fle justify-center items-center shadow-sm hover:cursor-pointer '>
            <ArrowRightOutlined style={{fontSize:'50px'}} onClick={nextSlide}/>
        </div>
    </div>

  )
}

export default Slider