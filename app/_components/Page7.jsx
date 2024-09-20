import React, { useState } from "react";

const Page7 = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div className="page7 h-[100vh] w-full px-[50px] py-[100px] text-center " >
      <h3 className=" text-[3.9vw] text-center w-[60%] relative left-[50%] translate-x-[-50%] ">
        Does your fruit snack <br />
        <span className="font-dancing text-[4.2vw]">contain fruit ?</span>
      </h3>
      <div className="pg7elms mt-[5vh]  h-[50vh] flex items-center justify-around  ">
        <div
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
          onMouseMove={handleMouseMove}
          className="ell1 h-full w-[25%] flex items-center justify-center relative cursor-none "
        >
          <h1 className="text-[40px] relative z-50">Yes</h1>
          {isHovered1 && (
            <img
              src="https://assets-global.website-files.com/61defec4a021d8fe954c11bd/61defec4a021d8f4394c120b_bananas.gif"
              alt=""
              className="absolute h-52 transition-opacity ease-in duration-300 -rotate-[10deg] opacity-1"
              style={{
                top: `${position.y-400}px`,
                left: `${position.x-180}px`,
                transform: "translate(-50%, -50%)",
                transform: "rotate(-10deg)"
              }}
            />
          )}
          {/* <img src="https://assets-global.website-files.com/61defec4a021d8fe954c11bd/61defec4a021d8f4394c120b_bananas.gif" alt="" className={`absolute h-52 transition-opacity ease-in duration-300 -rotate-[10deg]  ${isHovered1 ? 'opacity-1' : 'opacity-0'}`}/> */}
        </div>
        <div
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
          onMouseMove={handleMouseMove}

          className="ell2 h-full w-[25%] flex items-center justify-center relative cursor-none "
        >
          <h1 className="text-[40px] relative z-50">No</h1>
          {isHovered2 && (
            <img
            src="https://assets-global.website-files.com/61defec4a021d8fe954c11bd/61defec4a021d87bfc4c1204_syrup.gif"
            alt=""
            className="absolute h-52 transition-opacity ease-in duration-1000 -rotate-[10deg] opacity-1"
            style={{
              top: `${position.y-400}px`,
              left: `${position.x-1000}px`,
            //   transform: "translate(-50%, -50%)",
              transform: "rotate(10deg)",
              transition: "opacity ease-in 2s"
            }}
            />
          )}
          {/* <img
            src="https://assets-global.website-files.com/61defec4a021d8fe954c11bd/61defec4a021d87bfc4c1204_syrup.gif"
            alt=""
            className={`absolute h-52 transition-opacity ease-in duration-300 rotate-[10deg]  ${
              isHovered2 ? "opacity-1" : "opacity-0"
            }`}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Page7;
