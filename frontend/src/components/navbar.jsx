import React from "react";
import SearchBar from "./searchbar";
import IconButton from "./iconbutton";

import { CgMenuRight, CgUnsplash } from "react-icons/cg";
import { FaBehance, FaGithub } from "react-icons/fa";

const Navbar = ({search, children}) => {
  return (
    <div className="sticky top-0 text-white bg-[#F2F2F2] z-50 backdrop-filter backdrop-blur-md opacity-90">
      <div className="py-6 border-white mx-auto w-[95%] flex items-center justify-between bg-transparent">

        <div className="font-space font-bold text-slate-500 text-xl">
          <a href="">unspleeesh!</a>
        </div>

        {/* <div className="flex justify-center items-center gap-4 text-slate-500">
          <a href="#">Home</a>
          <a href="#">Ahaha</a>
          <a href="#">Ahaha</a>
        </div> */}

        <div className="w-96">
          {children}
        </div>

        <div className="inline-flex gap-2">
          <IconButton url="https://unsplash.com">
            <CgUnsplash size={24} color="black"/>
          </IconButton>
          <IconButton url="https://behance.com/nescafaye">
            <FaBehance size={24} color="black"/>
          </IconButton>
          <IconButton url="https://github.com/nescafaye/unsplash-api">
            <FaGithub size={24} color="black"/>
          </IconButton>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
