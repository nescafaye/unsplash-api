import React, { useState } from "react";
import IconButton from "./iconbutton";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

const HeartButton = ({ likes, size }) => {
  const [liked, setLiked] = useState(false);
  const [NoOfLikes, setNoOfLikes] = useState(null);

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      setNoOfLikes(NoOfLikes + 1);
    } else {
      setLiked(false);
      setNoOfLikes(NoOfLikes - 1);
    }
  };

  return (
    <div className="inline-flex gap-x-2">
      <IconButton click={handleLike}>
        {liked ? <FaHeart size={size} color="red" /> : <FiHeart size={size} />}
      </IconButton>
      <div>{likes + NoOfLikes}</div>
    </div>
  );
};

export default HeartButton;
