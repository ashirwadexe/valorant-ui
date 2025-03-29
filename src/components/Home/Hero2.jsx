const Hero2 = () => {
    return (
      <>
        <div className="relative w-full h-[90vh] bg-cover bg-center flex items-center" style={{ backgroundImage: "url('/hero2.avif')" }}>
          {/* Text Content */}
          <div className="relative z-10 flex flex-col justify-center text-[#222] px-6 sm:px-14">
            <div className="flex flex-col gap-5 text-center sm:text-left">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold">SEASON <br /> 2025//ACT II</h1>
              <p className="text-lg sm:text-xl mt-2 sm:mt-4 font-semibold">WAYLAY'S TIME TO SHINE</p>
              <div className="mt-2">
                <button 
                  className="bg-[#FF4655] px-6 sm:px-8 py-3 sm:py-4 text-white font-bold rounded-md hover:bg-red-600 transition"
                >
                  WATCH NOW
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <div className="relative w-full h-auto lg:h-[90vh] bg-cover bg-center flex items-center" style={{ backgroundImage: "url('/hero3.avif')" }}>
          {/* Text Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center px-6 sm:px-14 py-10 lg:py-0 text-[#222] gap-10">
            <div className="flex flex-col gap-4 text-center lg:text-left max-w-2xl">
              <h1 className="text-3xl sm:text-5xl font-bold">WE ARE VALORANT</h1>
              <p className="text-base sm:text-lg font-semibold">DEFY THE LIMITS</p>
              <p className="text-sm sm:text-md mt-2 sm:mt-4 font-medium">
                Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.
              </p>
              <div className="mt-2">
                <button 
                  className="bg-[#FF4655] px-6 sm:px-8 py-3 sm:py-4 text-white font-bold rounded-md hover:bg-red-600 transition"
                >
                  LEARN THE GAME
                </button>
              </div>
            </div>
            <div className="w-full max-w-lg">
              <video className="w-full h-auto rounded-lg shadow-lg" autoPlay muted loop>
                <source src="./hero3-vdo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Hero2;