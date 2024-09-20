import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Page11 = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".test",
      start: "top 30%",
      end: "bottom -100%",
      onEnter: () =>
        gsap.to(".test", { background: "#A67B5B", duration: 1, color: "#fff" }),
      onLeave: () =>
        gsap.to(".test", { background: "#81A263", duration: 1, color: "#000" }),
      onLeaveBack: () =>
        gsap.to(".test", { background: "#fff", duration: 1, color: "#000" }),
      onEnterBack: () =>
        gsap.to(".test", { background: "#A67B5B", duration: 1, color: "#fff" }),
    });

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".test",
        start: "top top",
        scrub: 1,

        pin: true,
        end: "bottom -30%",
      },
    });

    tl.from(".down", {
      top: "0%",
      duration: 1,
    })
      .from(".vid", {
        translateY: "202%",
        duration: 1,

        stagger: 0.1,
      })
      .from(".info", {
        left: "100%",

        stagger: 0.1,
      });
  });

  return (
    <div className="test h-[100vh] w-[100vw] bg-white  relative overflow-hidden ">
      <div className="bc absolute w-full h-[30vw] top-[30%] lg:top-[5vw] flex items-center justify-center ">
        <h1 className="font-g text-[#c9956f] leading-3 text-[40vw] lg:text-[20vw] ">
          Happy
        </h1>
      </div>
      <div className="upper h-[70%] flex absolute top-0 flex-wrap overflow-hidden  ">
        <div className="vid z-0 w-[125px] lg:w-[20%]  h-[50%] lg:h-full relative   ">
          <video
            autoPlay
            muted
            loop
            src="/videos/11.mp4"
            className=" h-full object-cover "
          />
          <div className="info absolute bottom-0 text-white w-full h-[30%] p-[2vw] ">
            <h1 className="text-[3.7vw] lg:text-[2vw]">Avni Sharma</h1>
            <p className="text-[2.5vw] lg:text-base ">
              "Gorgeous ring, fits perfectly."
            </p>
          </div>
        </div>
        <div className="vid z-0 w-[125px] lg:w-[20%]  h-[50%] lg:h-full relative  ">
          <video
            autoPlay
            muted
            loop
            src="/videos/22.mp4"
            className="h-full object-cover"
          />
          <div className="info absolute bottom-0 text-white w-full h-[30%] p-[2vw] ">
            <h1 className="text-[3.7vw] lg:text-[2vw]">Akanksha Sethi</h1>
            <p className="text-[2.5vw] lg:text-base ">
              "Delicate and classy, just perfect."
            </p>
          </div>
        </div>
        <div className="vid z-0 w-[125px] lg:w-[20%] h-[50%] lg:h-full relative  ">
          <video
            autoPlay
            muted
            loop
            src="/videos/33.mp4"
            className="h-full object-cover"
            width="100%"
          />
          <div className="info absolute bottom-0 text-white w-full h-[30%] p-[2vw] ">
            <h1 className="text-[3.7vw] lg:text-[2vw]">Meher Shaikh</h1>
            <p className="text-[2.5vw] lg:text-base ">
              "Exactly as pictured, so elegant."
            </p>
          </div>
        </div>
        <div className="vid z-0 w-[125px] lg:w-[20%] h-[50%] lg:h-full relative  ">
          <video
            autoPlay
            muted
            loop
            src="/videos/44.mp4"
            className="h-full object-cover"
          />
          <div className="info absolute bottom-0 text-white w-full h-[30%] p-[2vw] ">
            <h1 className="text-[3.7vw] lg:text-[2vw]">Muskaan Shah</h1>
            <p className="text-[2.5vw] lg:text-base ">
              "Lovely necklace, very pleased!"
            </p>
          </div>
        </div>
        <div className="vid lg:hidden z-0 w-[125px] lg:w-[20%] h-[50%] lg:h-full relative overflow-hidden  ">
          <video
            autoPlay
            muted
            loop
            src="/videos/66.mp4"
            className="h-full object-cover"
          />
          <div className="info absolute bottom-0 text-white w-full h-[30%] p-[2vw] ">
            <h1 className="text-[3.7vw] lg:text-[2vw]">Heena Khan</h1>
            <p className="text-[2.5vw] lg:text-base ">
              "Wonderful Designs. Just loved it""
            </p>
          </div>
        </div>
        <div className="vid  z-0 w-[125px] lg:w-[20%] h-[50%] lg:h-full relative overflow-hidden  ">
          <video
            autoPlay
            muted
            loop
            src="/videos/55.mp4"
            className="h-full object-cover"
          />
          <div className="info absolute bottom-0 text-white w-full h-[30%] p-[2vw] ">
            <h1 className="text-[3.7vw] lg:text-[2vw]">Priya Menon</h1>
            <p className="text-[2.5vw] lg:text-base ">
              "Amazing craftsmanship, looks luxurious.""
            </p>
          </div>
        </div>
      </div>
      <div className="down h-[30%] text-center w-full absolute bottom-0 font-play text-[10vw] lg:text-[5vw] z-50 flex items-center justify-center border-b border-b-black ">
        <h1 className="">OUR HAPPY CUSTOMERS</h1>
      </div>
    </div>
  );
};

export default Page11;
