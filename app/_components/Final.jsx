import React from "react";

const Final = () => {
  return (
    <footer className="relative h-[8vw] flex flex-col bg-[#FFDBB5] text-[2.5vw] lg:text-base p-[2vw] justify-center gap-[1vw]">
      <div className="terms flex justify-between">
        <a href="/terms" className="cursor-pointer">Terms & Conditions</a>
        <h1>© JEWEL. All Rights Reserved 2024</h1>
        <a href="/privacy" className="cursor-pointer">Privacy Policy</a>
      </div>
      <div className="flex items-center justify-center w-full">
        <h1>Made with 🤍 by Atul Kaple</h1>
      </div>
    </footer>
  );
};

export default Final;
