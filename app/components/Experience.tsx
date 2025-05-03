import React from 'react'
import { workExperience } from './data'
import { Button } from './ui/MovingBorderButton'
import Image from 'next/image'

const Experience = () => {
  return (
    <div className='text-white py-20'>
          <h1 className='lg:text-5xl sm:text-4xl text-2xl pb-12 capitalize font-bold text-center'>
            My {" "}
             <span className='text-purple inline-block pt-2 '>Work Exprience </span>
             </h1>
             <div className='w-full mt-12 grid lg:grid-cols-4
            
             grid-cols-1 gap-10 '>
                {workExperience.map((card , item)=>(
                    <Button key={card.id}
                    borderRadius='2rem'
                    className='flex-1 text-white 
                    border-slate-800 lg:py-10 py-5 !cursor-default'
                    duration={Math.floor(Math.random()*10000)+10000} >
                        <div className='flex lg:flex-row flex-col lg:items-center
                        p-3 py-6 md:p-5 lg:p-10 gap-2'>
                            <Image width={100}
                             height={100} alt={card.thumbnail}
                            src={card.thumbnail}/>
                            <div className="lg:ms-5">
                                <h1 className="text-start 
                                text-xl md:text-2xl font-bold">
                                    {card.title}
                                </h1>
                                <p className='text-start text-white-100
                                mt-3 font-semibold'>
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
             </div>
    </div>
  )
}

export default Experience