import React, { useEffect } from 'react'
import "./page6.css"
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Page6 = () => {

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".page6",
      start:'top 50%',
      end:'bottom 60%',
      onEnter: () => gsap.to('.page6', {background:'#ED9B7C',duration:1}),
      onLeave: () => gsap.to('.page6', {background:'#E49BFF',duration:1}),
      onEnterBack: () => gsap.to('.page6', {background:'#ED9B7C',duration:1}),
  })
  })
 

    const slide1h1Ref = useRef([]);
    useEffect(() => {
        slide1h1Ref.current.forEach((elem) => {
          gsap.to(elem, {
            transform: 'translateX(-50%)',
            duration: 4,
            scrollTrigger: {
              trigger: ".page6",
              scroller: "body",
              scrub:5,
              
            },
          });
        });
    }, []);


    
    const slide22h1Ref = useRef([]);
    useEffect(() => {
        slide22h1Ref.current.forEach((elem) => {
          gsap.to(elem, {
            transform: 'translateX(0%)',
            duration: 4,
            scrollTrigger: {
              trigger: ".page6",
              scroller: "body",
              scrub:5,
              
            },
          },);
        });
    }, []);





    
 


  return (
    <div className='page6 text-[#52322B] bg-[#ED9B7C] h-[102vw] lg:h-[62vw]  cursor-default  ' >
      <div ref={(el) => slide1h1Ref.current.push(el)}  className='ss h-[25vw] lg:h-[15vw] w-[200vw]  overflow-y-hidden flex gap-[0.7vw] '  >
        <div className=' w-[26vw] lg:w-[18vw] h-   relative overflow-hidden justify-center cursor-pointer object-cover  '>
        <img  src="Slider/1.1.avif" alt="" className=' absolute  z-50 hover:opacity-0  bg-white ' />
        <img  src="Slider/1.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className=' w-[26vw] lg:w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/21.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/21.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className=' w-[26vw] lg:w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/2.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/2.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className=' w-[26vw] lg:w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover  '>
        <img  src="Slider/29.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/29.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className=' w-[26vw] lg:w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/3.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/3.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className=' w-[26vw] lg:w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/30.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/30.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className=' w-[26vw] lg:w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover  '>
        <img  src="Slider/1.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/1.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className='hidden lg:flex w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/31.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/31.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className='hidden lg:flex w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/5.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/5.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className='hidden lg:flex w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/24.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/24.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className='hidden lg:flex w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/6.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/6.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
      </div>
      {/* /2 */}
      <div ref={(el) => slide22h1Ref.current.push(el)}   className='ss h-[25vw] lg:h-[15vw] w-[200vw] -translate-x-[45%] lg:-translate-x-[50%]  overflow-y-hidden overflow-x-auto flex mt-[0.7vw] gap-[0.7vw] '  >
        <div className='hidden lg:flex w-[18vw] h-full   relative overflow-hidden justify-center cursor-pointer object-cover  '>
        <img  src="Slider/33.1.avif" alt="" className=' absolute  z-50 hover:opacity-0  bg-white ' />
        <img  src="Slider/33.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className='hidden lg:flex w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/7.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/7.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className='hidden lg:flex w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/34.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/34.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className='hidden lg:flex w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover  '>
        <img  src="Slider/25.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/25.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className=' w-[26vw] lg:w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/35.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/35.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className=' w-[26vw] lg:w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/9.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/9.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className=' w-[26vw] lg:w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover  '>
        <img  src="Slider/36.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/36.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className=' w-[26vw] lg:w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/10.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/10.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className=' w-[26vw] lg:w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/37.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/37.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className=' w-[26vw] lg:w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/11.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/11.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className=' w-[26vw] lg:w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/26.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/26.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
      </div>

      {/* /3 */}
      <div ref={(el) => slide1h1Ref.current.push(el)}  className='ss h-[25vw] lg:h-[15vw] w-[200vw]  overflow-y-hidden overflow-x-auto flex mt-[0.7vw] gap-[0.7vw] '  >
        <div className='hidden lg:flex w-[18vw] h-full   relative overflow-hidden justify-center cursor-pointer object-cover  '>
        <img  src="Slider/12.1.avif" alt="" className=' absolute  z-50 hover:opacity-0  bg-white ' />
        <img  src="Slider/12.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className='hidden lg:flex w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/13.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/13.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className='hidden lg:flex w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/39.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/39.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className='w-[26vw] lg:w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover  '>
        <img  src="Slider/14.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/14.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className=' w-[26vw] lg:w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/40.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/40.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className=' w-[26vw] lg:w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/20.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/20.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className=' w-[26vw] lg:w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover  '>
        <img  src="Slider/41.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/41.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className=' w-[26vw] lg:w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/16.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/16.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className=' w-[26vw] lg:w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/42.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/42.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className=' w-[26vw] lg:w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/17.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/17.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className=' w-[26vw] lg:w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/18.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/18.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
      </div>
      {/* /4 */}
      <div ref={(el) => slide22h1Ref.current.push(el)}   className='ss h-[25vw] lg:h-[15vw] w-[200vw] -translate-x-[50%]  overflow-y-hidden overflow-x-auto flex mt-[0.7vw] pb-[0.7vw]  gap-[0.7vw] '  >
        <div className='hidden lg:flex w-[18vw] h-full   relative overflow-hidden justify-center cursor-pointer object-cover  '>
        <img  src="Slider/19.1.avif" alt="" className=' absolute  z-50 hover:opacity-0  bg-white ' />
        <img  src="Slider/19.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className='hidden lg:flex w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/26.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/26.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className='hidden lg:flex w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/43.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/43.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className='hidden lg:flex w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover  '>
        <img  src="Slider/22.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/22.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className=' w-[26vw] lg:w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/28.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/28.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className=' w-[26vw] lg:w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/23.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/23.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className=' w-[26vw] lg:w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover  '>
        <img  src="Slider/32.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/32.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className=' w-[26vw] lg:w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/25.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/25.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className=' w-[26vw] lg:w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/38.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/38.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className=' w-[26vw] lg:w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/27.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/27.2.webp" alt="" className=' relative w-full object-cover ' />
        </div>
        <div className=' w-[26vw] lg:w-[18vw] h-  relative overflow-hidden justify-center cursor-pointer object-cover '>
        <img  src="Slider/28.1.avif" alt="" className=' absolute  z-50 hover:opacity-0 bg-white ' />
        <img  src="Slider/28.2.avif" alt="" className=' relative w-full object-cover ' />
        </div>
      </div>
    </div>
  )
}

export default Page6
