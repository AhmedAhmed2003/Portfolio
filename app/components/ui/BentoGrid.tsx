import { cn } from "../../../lib/utils";
import { BackgroundGradientAnimation } from "./GradientAnimation";
import { GlobeDemo } from "./GridGlobe";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  spareImg,
  img,
  titleClassName,
  imgClassName
}: {
  id:number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  spareImg?:string;
  img?:string;
  titleClassName ?:string;
  imgClassName ?:string;
}) => {
  const rightSide = ['React.Js' , 'Next.Js' , 'TypeScript'];
  const leftSide = [`Redux Libaries` , 'Motion.dev' , 'TailwindCss']
  return (
   
    <div
      className={cn(
        `row-span-1 relative overflow-hidden 
        rounded-3xl group/bento hover:shadow-xl 
        transition duration-200 shadow-none 
        bg-black border-white/[0.2] 
        flex-col space-y-4`,
        className,
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${(id===6) && 'flex justify-center w-full h-full' }`}>
        <div className="w-full h-full absolute">
          {img&&(
            <img src={img} alt={img}
            className={cn(imgClassName , 'object-cover object-center')}/>
          )}
        </div>
        <div className={ `absolute right-0 -bottom-5  z-30${(id===5)&&'w-full opacity-80 '}`}>
          {spareImg&&(
            <img src={spareImg} alt={spareImg}
            className={'object-cover object-center'}/>
          )}
        </div>
        {(id===6)&&(
     <BackgroundGradientAnimation>
      <div className="absolute z-50 
      flex items-center justify-center text-white font-bold h-full w-full">
       
          <div className="font-sans font-bold text-lg lg:text-3xl 
            max-w-96 z-10 capitalize  text-center">
            {title}
          </div>
      </div>
     </BackgroundGradientAnimation>
        )}
      </div>
      <div className={cn(
        titleClassName,`group-hover/bento:translate-x-2  
        transition duration-200 relative top-0 md:h-full ${id===3?'min-h-60 2xsm:min-h-44':' min-h-44'} flex 
        flex-col py-5 px-3  lg:py-10 text-white  ${id===3?' 2xsm:items-start items-center 2xsm:justify-center justify-start':''}`
      )}>
      {(id!==6)&&(
        <>
          <div className="font-sans text-sm md:text-xs lg:text-sm font-extralight
             text-[#c1c2d3] z-10 ">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl 
            max-w-96 z-10">
            {title}
          </div>
        </>
      )}
        {(id === 2) && (
          
            <GlobeDemo />
        
        )}
         {(id === 3) && (
          <div className="flex gap-3 lg:gap-2 w-fit 
          absolute -right-1  2xsm:-top-5 lg:-top-6 bottom-0  ">
          <div className="flex flex-col lg:gap-5 2xsm:gap-6  gap-2  ">
              {leftSide.map((item)=>(
                <span key={item} className="py-2
                 px-3  text-xs lg:text-sm opacity-50 lg:opacity-100
                rounded-lg text-center bg-[#10132E]">
                  {item}
                  
                </span>
              ))}
                          <span className="py-4  px-3  rounded-lg text-center bg-[#0e0e36]"/>

             
            </div>
            

            <div className="flex flex-col lg:gap-5 2xsm:gap-6  gap-2  ">
            <span className="py-4  px-3  rounded-lg text-center bg-[#0e0e36]"/>
              {rightSide.map((item)=>(
                <span key={item} className="py-2
                 px-3  text-xs lg:text-sm opacity-50 lg:opacity-100
                rounded-lg text-center bg-[#10132E]">
                  {item}
                  
                </span>
              ))}
                        

             
            </div>
          </div>
      
      )}

      </div>
    
    </div>
  );
};
