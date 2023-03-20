import React from "react";
import Heart from "./heartbutton";

const Image = ({ url, alt, user, likes, link, profile }) => {
  return (
    <div className="bg-transparent break-inside-avoid">
      <img
        className="w-full rounded-t-md hover:shadow-[inset_0_100px_80px_rgba(0,0,0,0.10)]"
        src={url}
        alt={alt}
      />
      <div className="rounded-b-md flex flex-col lg:flex-row justify-between border-slate-200 border-2 bg-[#eeeeee] px-5 pt-5 pb-3 md:pb-5 gap-x-2 gap-y-3">
        <a href={link} className="inline-flex items-center gap-x-2">
          <img src={profile} alt={user} className="rounded-full w-8 lg:h-8" />
          <div className="text-[14px]">{user}</div>
        </a>
        <div className="ml-1">
          <Heart size={24} likes={likes} />
        </div>
      </div>
    </div>
  );
};

export default Image;
