import React from 'react'

const Hero5 = () => {
  return (
    <div>
      <div className="relative w-full h-auto lg:h-[700px] bg-cover bg-center flex items-center" style={{ backgroundImage: "url('/hero5.avif')" }}>
        {/* Text Content */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-center px-6 sm:px-14 py-10 lg:py-0 gap-10">
          <div className="flex flex-col justify-center gap-5 text-center lg:text-left max-w-2xl">
            <h1 className="text-4xl sm:text-6xl font-bold">YOUR MAPS</h1>
            <p className="font-semibold text-lg">FIGHT AROUND THE WORLD</p>
            <p className="text-sm sm:text-lg text-gray-800">
              Each map is a playground to showcase your creative thinking. Purpose-built for team strategies, spectacular plays, and clutch moments. Make the play others will imitate for years to come.
            </p>
            <div className="mt-2">
              <button 
                className="bg-[#FF4655] px-6 sm:px-8 py-3 sm:py-4 font-bold cursor-pointer hover:bg-white hover:text-black transition rounded-md"
              >
                VIEW ALL MAPS
              </button>
            </div>
          </div>
          <div className="w-full max-w-lg">
            <img src="hero5-home.avif" alt="maps" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#292929] p-4 flex items-center justify-center">
        <p className="hover:bg-[#93939334] cursor-pointer text-sm font-semibold hover:text-white text-white px-7 py-2 rounded-lg">
          DOWNLOAD RIOT MOBILE COMPANION APP
        </p>
      </div>
    </div>
  )
}

export default Hero5
