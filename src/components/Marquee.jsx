import React from 'react'

const Marquee = () => {
  return (
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap'>
            <h1 className='text-[24vw] leading-none font-["Founders_Grotesk"] uppercase -mb-[7vw] pt-10 font-semibold'>We are Ochi</h1>
            <h1 className='text-[24vw] leading-none font-["Founders_Grotesk"] uppercase -mb-[7vw] pt-10 font-semibold'>We are Ochi</h1>
        </div>
    </div>
  )
}

export default Marquee