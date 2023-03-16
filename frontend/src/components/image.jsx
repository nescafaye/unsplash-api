import React from "react";
import { FiHeart as Heart} from "react-icons/fi";
import IconButton from "./iconbutton";

const Image = ({ url, alt, user, likes, link, profile }) => {
  return (
    <div className="bg-transparent break-inside-avoid">
      <img
        className="rounded-t-md hover:shadow-[inset_0_100px_80px_rgba(0,0,0,0.10)]"
        src={url}
        alt={alt}
      />
      <div className="rounded-b-md flex flex-col lg:flex-row justify-between border-slate-200 border-2 bg-[#eeeeee] p-5 gap-2">
        <a href={link} className="inline-flex items-center gap-x-2">
          <img src={profile} alt={user}  className="rounded-full w-8 lg:h-8" />
          <div className="text-[14px]">{user}</div>
        </a>
        <div className="inline-flex gap-x-2">
          <IconButton>
            <Heart size={22}/>
          </IconButton>
          {likes}
        </div>
      </div>
    </div>
  );
};

export default Image;
