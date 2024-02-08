import React from "react";
import {FaArrowUpLong} from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
                <div className="w-fit flex items-center">
                {index === 1 && (
                    <div className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] top-[0.45vw] relative bg-green-500"></div>
                    )}
              <h1 className="uppercase text-[8.5vw] leading-[7vw] font-bold font-['Founders Grotesk_XCond-Lt'] font-medium">
                {item}
              </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "from the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full">
            Start the Project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">
            <FaArrowUpLong/>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
