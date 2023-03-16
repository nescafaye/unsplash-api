import React from "react";

const Image = ({ url, alt }) => {
  return (
      <div className="bg-transparent break-inside-avoid">
        <img className="rounded-md hover:shadow-[inset_0_100px_80px_rgba(0,0,0,0.10)]" src={url} alt={alt} />
      </div>
  );
};

export default Image;
