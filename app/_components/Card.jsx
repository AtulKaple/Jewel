"use client";
import Image from "next/image";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

const Card = ({
  i,
  title,
  description,
  src1,
  src2,
  src3,
  discover,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className=" h-[100vh] flex items-center justify-center sticky top-0 pt-[5vw] text-black "
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className=" flex flex-col relative top-[-25%] h-[80vh] lg:h-[40vw] w-[100%] p-[20px] lg:p-[50px] origin-top  "
      >
        <h2 className=" text-center m-0 text-[6vw] lg:text-[3vw] font-play  ">
          {title}
        </h2>
        <div className=" lg:flex lg:flex-row flex-col h-full gap-[4vw] mt-[4vw] ">
          <div className=" w-[100%] lg:w-[40%] relative   ">
            <p className=" text-[83%] lg:text-[110%] items-center gap-[5px] text-center ">
              {description}
            </p>
            <span className="flex items-center justify-center ">
              <a
                className=" text-[4.5vw] lg:text-[2vw] cursor-pointer mt-[2vw] text-center underline underline-offset-8 "
                href={url}
                target="_blank"
              >
                {discover}
              </a>
            </span>
          </div>

          <div className=" relative mt-[15vw] left-[4vw] lg:left-0 lg:mt-0 w-[90%] lg:w-[60%] h-[40vw] lg:h-full ">
            <motion.div
              className=" h-full w-full relative "
              //   style={{scale: imageScale}}
            >
              <div className="bg-white h-[30vw] w-[30vw] lg:h-[20vw] lg:w-[20vw] absolute overflow-hidden ">
                <motion.div
                  style={{ scale: imageScale }}
                  className="div h-full w-full"
                >
                  <Image
                    className=" h-full w-full object-cover "
                    fill
                    src={`/Images/${src1}`}
                    alt="image"
                  />
                </motion.div>
              </div>
              <div className="bg-red-400 h-[30vw] w-[30vw] lg:h-[20vw] lg:w-[20vw] absolute bottom-0 left-[30%] overflow-hidden ">
                <motion.div
                  style={{ scale: imageScale }}
                  className="div h-full w-full"
                >
                  <Image
                    className=" h-full w-full object-cover "
                    fill
                    src={`/Images/${src2}`}
                    alt="image"
                  />
                </motion.div>
              </div>
              <div className=" h-[30vw] w-[30vw] lg:h-[20vw] lg:w-[20vw] absolute right-0 -top-5 overflow-hidden ">
                <motion.div
                  style={{ scale: imageScale }}
                  className="div h-full w-full"
                >
                  <Image
                    className=" h-full w-full object-cover "
                    fill
                    src={`/Images/${src3}`}
                    alt="image"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
