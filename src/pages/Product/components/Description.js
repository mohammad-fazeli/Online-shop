import React, { useState } from "react";

const Description = ({ text = "" }) => {
  const [state, setState] = useState(1000);
  return (
    <div className="border-b border-border overflow-hidden relative text-lg mt-3 pb-1">
      <span>{text.substring(0, state)}</span>
      <span
        className={`cursor-pointer text-blue ${
          state >= text.length && "hidden"
        }`}
        onClick={() => {
          setState(text.length);
        }}
      >
        ادامه مطلب...
      </span>
    </div>
  );
};

export default Description;
