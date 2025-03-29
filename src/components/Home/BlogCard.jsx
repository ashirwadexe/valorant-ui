import { Link } from "lucide-react";
import React from "react";

const BlogCard = () => {
  return (
    <div className="bg-[#ECE8E1] px-6 sm:px-12 md:px-16 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between my-10 text-center md:text-left">
        <h1 className="font-bold text-3xl sm:text-4xl text-[#0F1923] font-sans">THE LATEST</h1>
        <p className="flex text-sm sm:text-lg items-center gap-1 mt-3 md:mt-0">
          GO TO NEWS PAGE <span><Link className="text-red-400 size-4" /></span>
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {[
          {
            img: "./blog1.avif",
            category: "COMMUNITY",
            date: "24/05/2025",
            title: "A spectrum of colors: Waylay art from the community",
            description: "Check out Waylay in 13 different ways through a million colors."
          },
          {
            img: "./blog2.jpg",
            category: "ESPORT",
            date: "24/05/2025",
            title: "Red Bull partners with VCT EMEA in multiyear deal",
            description: "We’re excited to announce we will continue working with energy drink brand Red Bull throughout 2025 and 2026!"
          },
          {
            img: "./blog3.avif",
            category: "COMMUNITY",
            date: "24/05/2025",
            title: "Riot Games Boosts Nordic Esports with The Gathering",
            description: "More prizes, more action, and more fun—Riot Games is making The Gathering a must-attend event for VALORANT fans."
          }
        ].slice(0, window.innerWidth < 640 ? 1 : 3).map((blog, index) => (
          <div key={index} className="flex flex-col gap-3">
            {/* Image Wrapper with Overflow Hidden */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={blog.img}
                alt={blog.title}
                className="h-[200px] sm:h-[250px] w-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="flex gap-3 text-xs sm:text-sm">
              <p className="text-[#FF4655] font-semibold">{blog.category}</p>
              <p className="font-semibold">{blog.date}</p>
            </div>
            <div>
              <h1 className="font-bold text-lg sm:text-xl">{blog.title}</h1>
              <h3 className="text-sm sm:text-base">{blog.description}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
