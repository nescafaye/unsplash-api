import { useState } from "react";
import { CgMenuRight, CgMenuRightAlt, CgUnsplash } from "react-icons/cg";
import { FaBehance, FaGithub } from "react-icons/fa";
import IconButton from "./iconbutton";
import DarkModeToggle from "./mode";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center">
      <div className="lg:inline-flex gap-4 hidden text-gray-800">
        <IconButton url="https://unsplash.com">
          <CgUnsplash size={24}/>
        </IconButton>
        <IconButton url="https://behance.com/nescafaye">
          <FaBehance size={24}/>
        </IconButton>
        <IconButton url="https://github.com/nescafaye/unsplash-api">
          <FaGithub size={24}/>
        </IconButton>
        {/* <DarkModeToggle lightColor="primary" darkColor="primary-dark" textColor="text-gray-800" /> */}
      </div>
      <button
        className="lg:hidden text-gray-600 hover:text-gray-800"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="sr-only">Open main menu</span>
        {isMenuOpen ? (
          <CgMenuRight className="h-8 w-8" />
        ) : (
          <CgMenuRightAlt className="h-8 w-8" />
        )}
      </button>
      <div className={isMenuOpen ? "lg:hidden flex flex-col gap-2 px-2 py-4 absolute right-0 top-10 w-40 bg-[#ebebeb] shadow-2xl rounded-lg" : "hidden"}>
        <IconButton url="https://unsplash.com">
          <CgUnsplash size={25} color="black" />
          <div className="text-black font-normal ml-2 text-lg">Unsplash</div>
        </IconButton>
        <IconButton url="https://behance.com/nescafaye">
          <FaBehance size={25} color="black" />
          <div className="text-black font-normal ml-2 text-lg">Behance</div>
        </IconButton>
        <IconButton url="https://github.com/nescafaye/unsplash-api">
          <FaGithub size={25} color="black" />
          <div className="text-black font-normal ml-2 text-lg">Github</div>
        </IconButton>
        {/* <div>
            <DarkModeToggle lightColor="primary" darkColor="primary-dark" textColor="text-gray-800" />
            <div></div>
        </div> */}
        </div>
    </nav>
  );
};

export default Menu;
