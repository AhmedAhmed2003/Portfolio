import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteCards'
import { companies, testimonials } from './data'
import Image from 'next/image'

const Client = () => {
  return (
    <div id='testimonials' className='text-white py-96'>
        <h1 className='lg:text-5xl sm:text-4xl text-2xl pb-12 capitalize font-bold text-center'>
            kind words from <br />
             <span className='text-purple inline-block pt-2 '>satisfied clients </span>
             </h1>
             <div className="flex justify-center items-center">
                <InfiniteMovingCards 
                items={testimonials}
                direction='right'
                speed='slow' />
               
             </div>
             <div className="flex flex-wrap items-center justify-center gap-12 
                md:gap-16 max-lg:mt-10">
                    {companies.map(({id , img , name , nameImg})=>(
                       <div className=' flex md:max-w-60 max-w-32 gap-2 justify-center mt-16 items-center' key={id}>
                         <Image
                        src={img}
                        alt={img}
                        className=''
                        width={40}
                        height={40}/>
                         <Image
                        src={nameImg}
                        alt={nameImg}
                        className=''
                        width={100}
                        height={40}/>
                       </div>
                    ))}
                </div>
    </div>
  )
}

export default Client