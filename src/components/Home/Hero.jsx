import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
        autoPlay
        muted
        loop
      >
        <source src="./Hero-vdo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-white px-4 sm:px-6 text-base sm:text-lg flex flex-col items-center gap-5 sm:gap-7 max-w-xl mx-auto">
        <p className="text-sm sm:text-lg">A 5v5 character-based tactical shooter</p>
        <img src="./valorant.webp" alt="valorant" className="w-40 sm:w-56 md:w-64" />
        <div className="border p-[3px] w-fit">
          <button 
            className="bg-[#FF4655] px-5 sm:px-7 py-3 sm:py-5 text-xs sm:text-sm md:text-base rounded-md shadow-md hover:bg-red-600 transition"
          >
            PLAY FOR FREE
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;