import React from "react";
import { Dancing_Script } from "next/font/google";
import { useRef } from "react";
import Head from "next/head";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const dance = Dancing_Script({
  subsets: ["latin"],
  style: "normal",
  weight: ["400"],
});

const Page2 = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".page2",
      start: "top 50%",
      end: "bottom 50%",
      onEnter: () => gsap.to(".page2", { background: "#F4BF96", duration: 1 }),
      onLeave: () => gsap.to(".page2", { background: "white", duration: 1 }),
      onLeaveBack: () =>
        gsap.to(".page2", {
          background:
            "radial-gradient(circle at 50% 50%, #fbcbc9, #f6c5c4, #f0bfbf, #ebb9ba, #e5b3b6, #e0adb1, #daa7ac, #d5a2a8, #cf9ca3, #ca969f, #c4919a, #bf8b96)",
          duration: 1,
        }),
      onEnterBack: () =>
        gsap.to(".page2", { background: "#F4BF96", duration: 1 }),
    });

    gsap.to(".pg2img", {
      scale: 0.99,
      scrollTrigger: {
        trigger: ".pg2img",
        scroller: "body",
        start: "top 70%",
        end: "bottom 80%",
        scrub: 3,
      },
    });

    gsap.from(".pg2h1", {
      rotationX: "90deg",
      opacity: 0,
      scrollTrigger: {
        trigger: ".pg2h1",
        scroller: "body",
        start: "top 70%",
        end: "top 50%",
        scrub: 3,
      },
    });
  });
  return (
    <>
      <Head>
        {/* Preload the Pink.jpg image */}
        <link rel="preload" href="/Pink.jpg" as="image" />
      </Head>
      <div className="page2 relative min-h-[100vh] pb-[25vh] text-[#52322B] bg-[radial-gradient(circle_at_50%_50%,_#fbcbc9,_#f6c5c4,_#f0bfbf,_#ebb9ba,_#e5b3b6,_#e0adb1,_#daa7ac,_#d5a2a8,_#cf9ca3,_#ca969f,_#c4919a,_#bf8b96)]  ">
        <div className="back absolute w-full h-[39vw] bottom-[60vw] lg:bottom-[4vw] flex items-center justify-center  ">
          <h1 className="font-g text-[#f3b37c] text-[55vw] lg:text-[40vw] ">
            Jewel
          </h1>
        </div>
        <img
          src="/Pink.jpg"
          alt=""
          className="pg2img w-full h-[60vw] object-cover lg:h-full relative top-0 scale-[0.9]  "
        />
        <h1 className="pg2h1 text-[8vw] lg:text-[3vw] w-[80%] lg:w-[60%] text-center mr-auto ml-auto mt-[20vh] origin-bottom  ">
          At <span className="font-play">JEWEL </span>,{" "}
        </h1>
        <h1 className="pg2h1 text-[8vw] lg:text-[3vw] w-[90%] lg:w-[70%] text-center mr-auto ml-auto   origin-bottom ">
          {" "}
          jewelry is more than just an accessory —
        </h1>
        <h1 className="pg2h1 text-[8vw] lg:text-[3vw] w-[90%]  lg:w-[50%] text-center mr-auto ml-auto   origin-bottom ">
          it's a symbol of
        </h1>
        <h1 className="pg2h1 text-[8vw] lg:text-[3vw] w-[90%] lg:w-[50%] text-center mr-auto ml-auto   origin-bottom">
          <span className="font-g text-[15vw] lg:text-[6vw] leading-[2vw] ">
            love&nbsp;
          </span>{" "}
          and{" "}
          <span className="font-g text-[15vw] lg:text-[6vw] leading-[2vw] ">
            {" "}
            &nbsp;individuality.
          </span>
        </h1>
      </div>
    </>
  );
};

export default Page2;
