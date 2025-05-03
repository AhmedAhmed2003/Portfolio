import Image from 'next/image'
import React from 'react'
import  footerGrid from "@/public/footer-grid.svg";
import Link from 'next/link';
import ButtonMagic from './ui/ButtonMagic';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from './data';

const Footer = () => {
  return (
    <footer className='pt-20 mb-[100px] md:mb-20 text-white' id='contact'>
       <div className='w-full min-h-96  absolute  -bottom-72 left-0  '>
      
      <Image src={footerGrid}
      alt='footer'
      className='w-full h-full opacity-50'/>
       </div>
       <div className="flex flex-col items-center justify-center m-auto lg:max-w-[45vw]">
          <h1 className='heading text-white capitalize'>ready to take <span className='text-purple'>your {" "}
            </span>digital presence to the next level?
            </h1>
            <p className='text-white-200 py-5 capitalize text-center font-semibold '>
                Reach out to me today and let&apos;s discuss how I
                 can help you achieve your goals.

</p>
<Link href={'mailto:ahmed5754egypt@gmail.com'}>
<ButtonMagic
title="Let's get in touch"
icon={<FaLocationArrow/>}
position='right'
// bg='bg-black-200'
/>

</Link>
       </div>
       <div className='flex justify-between mt-16 items-center md:flex-row  flex-col ' >
        <p className='
        md:text-base text-sm md:font-normal font-light'>Copyright ©  2025 Ahmed</p>
        <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((profile , index)=>(
                <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75
                 bg-black-200 rounded-lg border border-black-300" key={index}>
                   {profile.href &&  <Link href={profile.href} target='_blank'>
                   <Image src={profile.img} alt={profile.img}
                width={20} height={20} className='size-5'  /></Link> 
                }
                </div>
            ))}
        </div>
       </div>
    </footer>
  )
}

export default Footer