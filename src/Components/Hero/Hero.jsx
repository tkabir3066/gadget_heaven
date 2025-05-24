import React from "react";
import { NavLink } from "react-router-dom";
import bannerimg from "../../assets/banner.jpg";

// Hero banner section
const Hero = () => {
  return (
    <div className="relative bg-purple-600 text-white pt-12 pb-72 rounded-b-2xl overflow-hidden">
      {/* Centered text container */}
      <div className="w-11/12 md:w-4/6 mx-auto text-center flex flex-col gap-6 relative z-10">
        <h1 className="font-bold text-2xl md:text-5xl">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div>
          {/* CTA Button */}
          <NavLink to="/dashboard">
            <button className="btn rounded-3xl font-bold text-purple-600 bg-white hover:bg-purple-100">
              Shop Now
            </button>
          </NavLink>
        </div>
      </div>

      {/* Image section - overlaps lower section */}
      <div className="absolute bottom-[-6rem] left-1/2 transform -translate-x-1/2 w-[90%] max-w-2xl rounded-3xl shadow-xl">
        <img
          src={bannerimg}
          alt="Banner"
          className="w-full h-auto object-cover rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Hero;
