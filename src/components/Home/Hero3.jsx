import React from 'react'

const Hero3 = () => {
  return (
    <div>
      <div className="relative w-full h-auto lg:h-[700px] bg-cover bg-center flex items-center" style={{ backgroundImage: "url('/hero4.avif')" }}>
        {/* Text Content */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-center px-6 sm:px-14 py-10 lg:py-0 text-white gap-10">
          <div className="w-full max-w-lg">
            <img src="hero4-girls.avif" alt="baddies😘" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="flex flex-col justify-center gap-5 text-center lg:text-left max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold">YOUR AGENTS</h1>
            <p className="font-semibold">CREATIVITY IS YOUR GREATEST WEAPON.</p>
            <p className="text-sm sm:text-md mt-2 sm:mt-4 font-medium">
              More than guns and bullets, you’ll choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. No two Agents play alike, just as no two highlight reels will look the same.
            </p>
            <div className="mt-2">
              <button 
                className="bg-[#222] px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold cursor-pointer hover:bg-white hover:text-black transition rounded-md"
              >
                LEARN THE GAME
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero3