import React from "react";
import { FaStar } from "react-icons/fa";

const Comment = ({ profile, name, rated, text, time }) => {
  return (
    <div className="flex gap-2">
      <img src={profile} className="w-16 h-16" alt="" />
      <div>
        <div className="text-titeltext">{name}</div>
        <div className="flex gap-2 text-disabletext">
          <FaStar className="text-star" />
          <span>{rated}</span>
          <span>{time}</span>
        </div>
        <div>{text}</div>
      </div>
    </div>
  );
};

export default Comment;
