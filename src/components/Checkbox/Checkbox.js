import React from "react";

const Checkbox = ({ select, setSelect }) => {
  return (
    <div
      onClick={() => setSelect(!select)}
      className={`w-12 bg-border h-6 rounded-full cursor-pointe relative cursor-pointer ${
        select && ""
      }`}
    >
      <div
        className={`w-5 h-5 rounded-full absolute top-0.5 transition-all ${
          select ? "bg-blue right-1" : "bg-white left-1"
        }`}
      ></div>
    </div>
  );
};

export default Checkbox;
