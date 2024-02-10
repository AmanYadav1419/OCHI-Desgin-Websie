import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">
            Ochi is a strategic partner for fast-growing tech bussines that need
            to raise funds, sell products, explain complex ideas, and hire great
            people.
        </h1>
        {/* middle part is remening this is ony for middle part completion */}

        <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]'>
            <div className='w-1/2'>
              <h1 className='text-7xl'>Our apporach:</h1>
              <button className='flex uppercase items-center gap-10 px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>Read More
                <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
              </button>
            </div>
            <div className="w-1/2 h-[70vh] rounded-3xl bg-[#90a549]">
              <img src="" alt="one-man&-one-women-pic" />
            </div>
        </div>
    </div>
  )
}

export default About