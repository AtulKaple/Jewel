import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Page10 = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".online",
      start: "top 30%",
      end: "bottom 50%",
      onEnter: () =>
        gsap.to(".online", {
          background: "#81A263",
          duration: 1,
          color: "#000",
        }),
      onLeave: () =>
        gsap.to(".online", { background: "#fff", duration: 1, color: "#000" }),
      onLeaveBack: () =>
        gsap.to(".online", {
          background: "#A67B5B",
          duration: 1,
          color: "#fff",
        }),
      onEnterBack: () =>
        gsap.to(".online", {
          background: "#81A263",
          duration: 1,
          color: "#000",
        }),
    });

    gsap.from(".tit", {
      x: -60,
      opacity: 0,
      scrollTrigger: {
        trigger: ".online",
        scroller: "body",
        start: "top 25%",
        end: "top 50%",
        scrub: 3,
      },
    });
    gsap.from(".but", {
      x: -60,
      delay: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".online",
        scroller: "body",
        start: "top 25%",
        end: "top 50%",
        scrub: 3,
      },
    });
    gsap.from(".orderinfo", {
      x: 60,
      opacity: 0,
      scrollTrigger: {
        trigger: ".online",
        scroller: "body",
        start: "top 25%",
        end: "top 50%",
        scrub: 3,
      },
    });
  });

  return (
    <div className="online h-[100vh] w-full bg-[#A67B5B] text-white p-[2vw] flex flex-col lg:flex-row relative">
      <img
        src="/piercing.png"
        alt=""
        className="hidden lg:flex absolute h-[40vw] right-[28%] top-0 "
      />
      <div className="order w-[100%] text-center lg:text-left lg:w-[65%]  lg:p-[2vw] py-[12vw] px-[3vw]  relative flex flex-col justify-center items-center  ">
        <h1 className="tit text-[12vw] lg:flex top-[10%] lg:text-[7.5vw] font-play">
          {" "}
          PLACE YOUR ORDER ONLINE
        </h1>
        <button className="but text-[4.5vw] lg:text-[2vw] border border-black p-[1vw] rounded-full mt-[6vw] lg:mt-[3vw] hover:bg-white cursor-pointer ">
          Send Message
        </button>
      </div>
      <div className="orderinfo w-[100%] lg:w-[35%] py-[5vw] px-[5vw] lg:px-[2vw] ">
        <h1 className=" text-[7vw] lg:text-[2.8vw] mb-[2.8vw] ">
          ORDERING ONLINE
        </h1>
        <h2 className=" text-[4.5vw] lg:text-[1.4vw] mb-[1.3vw] ">
          Representative:
        </h2>
        <h2 className=" text-[5.5vw] lg:text-[2vw] font-play ">
          Elizabeth George
        </h2>
        <h3 className=" text-[4vw] lg:text-[1.5vw] ">ela@jewel.in</h3>
        <h3 className=" text-[4vw] lg:text-[1.5vw] mb-[5vw]  ">
          +91 234 234 2345
        </h3>
        <p className=" text-[4vw] lg:text-[1.4vw] ">
          To place an order online, please contact Ela by email or phone. She
          will help you choose jewelery, advise and provide tips on how to
          choose your perfect piece.
        </p>
      </div>
    </div>
  );
};

export default Page10;
