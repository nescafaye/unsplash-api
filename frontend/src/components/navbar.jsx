import React from "react";
import Menu from "./menu";

const Navbar = ({search, children}) => {

  return (
    <div className="sticky top-0 text-white bg-[#F2F2F2] z-40 backdrop-filter backdrop-blur-lg bg-opacity-40">
      <div className="py-6 border-white mx-auto w-[95%] flex items-center justify-between gap-2 bg-transparent">

        <div className="font-space font-extrabold text-gray-800 text-xl hidden md:block">
          <a href="/">unspleeesh!</a>
        </div>

        <div className="w-96">
          {children}
        </div>

        <Menu/>

      </div>
    </div>
  );
};

export default Navbar;
