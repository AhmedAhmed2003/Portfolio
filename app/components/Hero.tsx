import React from 'react'
import { Spotlight } from './ui/Spotlight'
import {GridBackground} from './ui/GridBackground' 
import { cn } from '../../lib/utils'
import { TextGenerateEffect } from './ui/Text-genetrate-effect'
import TextAnimate from './ui/TextAnimate'
import ButtonMagic from './ui/ButtonMagic'
import { FaTelegramPlane } from "react-icons/fa";


const Hero = () => {
  return (
<div className="pb-20 pt-36">
    <div>
        <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" 
            fill="white" 
        />
        <Spotlight 
            className="top-10 left-full h-[80vh] w-[50vw]" 
            fill="purple" 
        />
        <Spotlight 
            className="top-28 left-80 h-[80vh] w-[50vw]" 
            fill="blue" 
        />
 </div>
 <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-black-100">
      <div
        className={cn(
          "absolute inset-0 ",
          "[background-size:100px_100px]",
          
          "[background-image:linear-gradient(to_right,#4a4a610f_3px,transparent_3px),linear-gradient(to_bottom,#4a4a610f_3px,transparent_3px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="  pointer-events-none absolute inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
      
   
    </div>
    <div className="flex justify-center ">
        <div className="max-w-[89w] h-[100vh] text-white
        md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center">
        <h2 className='uppercase tracking-widest z-10
        text-lg text-center text-blue-100 max-w-96'>
            Dynamic web made with next.js
        </h2>
        <TextGenerateEffect className='
        text-center text-[25px] md:text-4xl lg:text-5xl ' words='Transforming Concepts into Seamless User Experience '/>
        <TextAnimate/>
      <a href="#about">
      <ButtonMagic title='Show My Work'
        icon={<FaTelegramPlane className='ml-2 size-5' />} position='right'/>
      </a>
        </div>
      </div>
    {/* <GridBackground/> */}

</div>  )
}

export default Hero