import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const LoadingPage = () => {
  const tl1 = useRef();
  const tl2 = useRef();

  useGSAP(() => {
  

    tl1.current = gsap.timeline().to(".bar", {
      width: '100%',
      duration: 6.3,
      transformOrigin: "left",
    });

    tl2.current = gsap
      .timeline()
      .to(".a", {
        opacity: 0,
        duration: 0.7,
      })
      .to(".b", {
        opacity: 1,
        duration: 0.7,
      })
      .to(".b", {
        opacity: 0,
        duration: 0.7,
      })
      .to(".c", {
        opacity: 1,
        duration: 0.7,
      })
      .to(".c", {
        opacity: 0,
        duration: 0.7,
      })
      .to(".d", {
        opacity: 1,
        duration: 0.7,
      })
      .to(".d", {
        opacity: 0,
        duration: 0.7,
      })
      .to(".e", {
        opacity: 1,
        duration: 0.7,
      })
      .to(".e", {
        opacity: 0,
        duration: 0.7,
      })
    .to('.loading',{
        transform:"translatex(100%)",
        duration:1,
    })
  });

  return (
    <div>
      <div className="loading h-[100vh] w-full bg-[#E6BFBE] flex absolute z-50 items-center justify-center text-[#52322B]    ">
        <div className="gap-[1vw] flex-col w-[60vw] lg:w-[40vw] relative flex   ">
            <div className="w-full flex items-center justify-center " >
            <img
            src="/loadimg.png"
            alt="Welcome to JEWEL"
            className="h-[12vw] w-[12vw] lg:h-[4vw] lg:w-[4vw]  "
          />
            </div> 
          <div className="w-full text-[4vw] lg:text-[1.1vw] mb-[7vw] lg:mb-[2vw] ">
            <h1 className="a absolute w-full text-center ">
              High-End Elegance
            </h1>
            <h1 className="b opacity-0 absolute w-full text-center ">
              Premium Gemstones
            </h1>
            <h1 className="c opacity-0 absolute w-full text-center ">
              Innovative Design
            </h1>
            <h1 className="d opacity-0 absolute w-full text-center ">
              Luxurious Finishes
            </h1>
            <h1 className="e opacity-0 absolute w-full text-center ">All At..</h1>
          </div>

          <div className="bar h-[0.2vw] w-0 bg-[#52322B] rounded-full "></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
