import { motion } from 'framer-motion';
import React from "react";
import {FaArrowUpLong} from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
                <div className="w-fit flex items-center">
                {index === 1 && (
                    <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease: [0.76, 0, 0.24, 1] , duration:1, delay:3}} className="w-[9vw] rounded-md h-[5.7vw] top-[0.45vw] relative bg-green-500">
                      <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="one-man&-one-women-pic"/>
                    </motion.div>
                    )} 
              <h1 className="uppercase text-[8.5vw] leading-[7vw] font-bold font-['Founders Grotesk_XCond-Lt']">
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
