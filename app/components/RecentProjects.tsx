import React from 'react'
import { projects } from './data'
import { PinContainer } from './ui/3d-pin'
import bg from "../../public/bg.png";
import Image from 'next/image';

const RecentProjects = () => {
  return (
    <div className='text-white py-20 capitalize' id='projects'>
        <h1 className="heading">
            A small of {' '}
            <span className='text-purple'>
                recent projects 
            </span>
        </h1>
        <div className='flex flex-wrap items-center 
        justify-center p-4 gap-x-24 gap-y-8 mt-10'>
            {projects.map(({id  , title , link  , des , iconLists , img} , index)=>(




                <div key={id} className='sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem]
                flex item-center justify-center sm:w-[540px]  w-[80vw]'>
                 <PinContainer title={link} href={link}>
               <div className='relative flex items-center
               justify-center sm:w-[540px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]
                mb-10'>
                <div className="relative  overflow-hidden md:rounded-3xl
                rounded-xl
                bg-[#13162d]  ">
                    <Image 
                     width={500}
                height={300} src={bg.src} alt=".bg.png"  className=''/>
                </div>
                <Image
                width={400}
                height={300}
               src={img}
               alt={title}
               className='z-10 absolute bottom-0 '/>
               </div>
               <h1 className='font-bold lg:text-2xl md:text-xl text-base
               line-clamp-1'>{title}</h1>
              <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                {des}
              </p>
              <div className="flex items-center
              justify-between mt-7 mb-3">
                <div className="flex items-center">
                    {iconLists.map((icon , index)=>(
                        <div key={icon} className='border border-white/[0.2]
                        rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center
                        items-center'
                        style={{transform:`translateX(-${5*index*2}px)`}}
                        >
                            <Image className='rounded-full p-2' width={40} height={40} src={icon} alt={icon}/>
                        </div>
                    ))}
                </div>
              </div>

                 </PinContainer>
                </div>
            ))}
        </div>
        </div>
  )
}

export default RecentProjects