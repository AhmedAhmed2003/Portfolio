import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from './data'

const Grid = () => {
  return (
    <section id='about' className=''>
      <BentoGrid className="w-full py-20">
        {gridItems.map(({id , title , description  , spareImg,img,titleClassName,imgClassName, className}  , index)=> (
          <BentoGridItem key={id} title={title} description={description} id={id}
          spareImg={spareImg} img={img} titleClassName={titleClassName} imgClassName={imgClassName} className={className} />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid