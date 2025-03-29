import { useState } from "react";
import { Globe, Search, MoveUpRight, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "../ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#111111] px-6 md:px-10 py-4 flex items-center justify-between font-sans fixed z-50 w-full">
      <div className="flex items-center gap-4 md:gap-8 w-full">
        {/* Mobile Menu Toggle */}
        <button className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo Links */}
        <div className="flex gap-4 md:gap-7">
          <a href="https://ashirwadexe.netlify.app" target="_blank" rel="noopener noreferrer">
            <img src="./logo-red.png" alt="logo" className="h-6" />
          </a>
          <a href="https://ashirwadexe.netlify.app" target="_blank" rel="noopener noreferrer">
            <img src="./sign.png" alt="sign-logo" className="h-6" />
          </a>
        </div>

        {/* Navbar Links */}
        <div className={`absolute md:static top-16 left-0 w-full md:w-auto bg-[#111] md:bg-transparent p-5 md:p-0 md:flex transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
          <ul className="flex flex-col md:flex-row items-start md:items-center text-white font-bold text-xs tracking-[2px] font-sans w-full md:w-auto">
            {[
              { name: "GAME INFO", hasDropdown: true },
              { name: "MEDIA" },
              { name: "NEWS" },
              { name: "SPORTS", hasDropdown: true },
              { name: "OUR SOCIALS", hasDropdown: true },
            ].map((item, index) => (
              <li key={index} className="hover:bg-[#222] px-5 py-2 rounded-md hover:text-[#FF4655] flex w-full md:w-auto">
                {item.name} {item.hasDropdown && <ChevronDown className="size-3 text-white ml-1" />}
              </li>
            ))}
            {[
              { name: "ESPORTS", link: "https://ashirwadexe.netlify.app" },
              { name: "MERCH", link: "https://ashirwadexe.netlify.app" },
            ].map((item, index) => (
              <li key={index} className="hover:bg-[#222] px-5 py-2 rounded-md hover:text-[#FF4655] flex w-full md:w-auto">
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex">
                  {item.name} <MoveUpRight className="size-3 text-white ml-1" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Side Icons & Button */}
      <div className="hidden md:flex gap-2 items-center">
        <a href="https://ashirwadexe.netlify.app" target="_blank" rel="noopener noreferrer" className="bg-[#222] p-3 rounded-2xl">
          <Search className="text-white" />
        </a>
        <a href="https://ashirwadexe.netlify.app" target="_blank" rel="noopener noreferrer">
          <Globe className="text-white size-5" />
        </a>
        <a href="https://ashirwadexe.netlify.app" target="_blank" rel="noopener noreferrer">
          <Button className="bg-[#FF4655] hover:bg-[#FF4655] text-black text-sm px-5 py-3 rounded-xl">PLAY NOW</Button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
