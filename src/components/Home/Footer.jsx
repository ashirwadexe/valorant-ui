import { Facebook, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='bg-[#111111] text-[#f9f9f9] flex flex-col items-center justify-center gap-5 p-8 pb-12'>
        {/* Social Icons */}
        <div className='flex flex-wrap gap-3 mb-7 justify-center'>
          <span className='p-2 bg-[#29292984] cursor-pointer rounded-xl'><Twitter className='size-4' /></span>
          <span className='p-2 bg-[#29292984] cursor-pointer rounded-xl'><Instagram className='size-4' /></span>
          <span className='p-2 bg-[#29292984] cursor-pointer rounded-xl'><Facebook className='size-4' /></span>
          <span className='p-2 bg-[#29292984] cursor-pointer rounded-xl'><Mail className='size-4' /></span>
          <span className='p-2 bg-[#29292984] cursor-pointer rounded-xl'><Linkedin className='size-4' /></span>
        </div>

        {/* Logo */}
        <div>
          <img src='./footer.png' alt='Logo' className='h-7' />
        </div>

        {/* Description */}
        <p className='text-[#7e7e7e] w-full max-w-md text-center text-[14px] px-4'>
          @2020-2025 Riot Games, RIOT GAMES, VALORANT and associated logos are trademarks, service marks, and/or registered trademarks of Riot Games, Inc.
        </p>

        {/* Links */}
        <div className='flex flex-wrap gap-4 text-sm justify-center'>
          <p className='hover:bg-[#29292984] py-2 px-4 rounded-xl cursor-pointer'>PRIVACY POLICY</p>
          <p className='hover:bg-[#29292984] py-2 px-4 rounded-xl cursor-pointer'>TERMS OF SERVICE</p>
          <p className='hover:bg-[#29292984] py-2 px-4 rounded-xl cursor-pointer'>COMPANY INFORMATION</p>
          <p className='hover:bg-[#29292984] py-2 px-4 rounded-xl cursor-pointer'>COOKIE PREFERENCES</p>
        </div>

        {/* Certification Images */}
        <div className='flex flex-wrap gap-3 justify-center'>
          <img src='f1.jpg' alt='' className='bg-[#29292984] p-3 rounded-md w-16 h-16' />
          <img src='f2.png' alt='' className='bg-[#29292984] p-3 rounded-md w-16 h-16' />
          <img src='f3.png' alt='' className='bg-[#29292984] p-3 rounded-md w-16 h-16' />
        </div>
      </div>

      {/* Creator Info */}
      <div className='flex flex-col gap-4 items-center justify-center py-3 text-center'>
        <p>
          Made with 💗 by <a href='https://ashirwadexe.netlify.app' target='_blank' rel='noopener noreferrer' className='font-semibold hover:border px-2 rounded-full'>Ashirwad</a>
        </p>
        <div className='flex flex-wrap gap-3 justify-center'>
          <a href='https://x.com/ashirwadexe' className='p-2 bg-[#a3a3a384] cursor-pointer rounded-xl'><Twitter className='size-4' /></a>
          <a href='https://www.instagram.com/ashirwad_bappy/' className='p-2 bg-[#a3a3a384] cursor-pointer rounded-xl'><Instagram className='size-4' /></a>
          <a href='mailto:ashirwadbappy@gmail.com' className='p-2 bg-[#a3a3a384] cursor-pointer rounded-xl'><Mail className='size-4' /></a>
          <a href='https://www.linkedin.com/in/ashirwad-chaurasia-6b3935258/' className='p-2 bg-[#a3a3a384] cursor-pointer rounded-xl'><Linkedin className='size-4' /></a>
        </div>
      </div>
    </>
  );
};

export default Footer;