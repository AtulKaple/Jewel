import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Page5 = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".pg5-el",
      start: "top 50%",
      end: "bottom 50%",
      onEnter: () => gsap.to(".pg5-el", { background: "#ED9B7C", duration: 1 }),
      onLeaveBack: () =>
        gsap.to(".pg5-el", { background: "#CBCDCE", duration: 1 }),
      onEnterBack: () =>
        gsap.to(".pg5-el", { background: "#ED9B7C", duration: 1 }),
    });
    gsap.from(".forever , .forinfo", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".forever",
        scroller: "body",
        start: "top 70%",
        end: "top 50%",
        scrub: 3,
      },
    });
  });

  return (
    <div>
      <div className="pg5-el h-[100vh] w-full relative text-[#52322B] bg-[#CBCDCE] ">
        <div className="pg5contentv h-[100vh] w-full relative flex items-center flex-col justify-start py-[80px] ">
          <div className="bc absolute w-full h-[30vw] top-[20%] lg:top-0 flex items-center justify-center ">
            <h1 className="font-g text-[#ec8e65] leading-3 text-[50vw] lg:text-[40vw] ">
              Forever
            </h1>
          </div>
          <h1 className="forever text-[24vw] lg:text-[7vw]  w-[62%] lg:w-[18%] leading-[19vw] lg:leading-[6vw] font-play z-50 ">
            <span className=" font-g text-[18vw] lg:text-[5vw] right-0 leading-3 ">
              {" "}
              created to last
            </span>{" "}
            <br />
            FOR <br />
            EVER
          </h1>
          <h4 className="forinfo text-[5vw] lg:text-[1.7vw] text-center w-[60%] lg:w-[30%] leading-[5vw] lg:leading-[1.6vw] my-[80px] lg:my-[50px] ">
            Scroll to see, the gem that’s meant to be, a timeless part of your
            legacy..
          </h4>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
              fill="#fff"
              className=" animate-bounce h-[8vw] lg:h-[4vw] mt-[2vw] "
            >
              <path d="m18.294 16.793-5.293 5.293V1h-1v21.086l-5.295-5.294-.707.707L12.501 24l6.5-6.5-.707-.707z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;
