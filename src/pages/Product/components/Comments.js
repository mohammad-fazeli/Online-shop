import React, { useState } from "react";
import Comment from "./Comment";

const Comments = ({ comments = [] }) => {
  const [state, setState] = useState(2);

  return (
    <div className="flex flex-col gap-3 mt-3">
      {comments.slice(0, state).map((comment, index) => (
        <Comment
          key={index}
          name={comment.name}
          profile={comment.Profile}
          rated={comment.rated}
          text={comment.text}
          time={comment.time}
        />
      ))}
      <span
        className={`cursor-pointer text-blue ${
          state >= comments.length && "hidden"
        }`}
        onClick={() => {
          setState(comments.length);
        }}
      >
        مشاده همه نظرات ...
      </span>
    </div>
  );
};

export default Comments;
