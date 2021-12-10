import React from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";

const Button = ({
  text = "",
  type = "button",
  border = true,
  background = "Backgroundsecondary",
  link = "",
  count = 0,
  onclick = () => {},
  onclickPlus = () => {},
  onclickMinus = () => {},
  max = 5,
  disabled = false,
  className = "",
}) => {
  return (
    <>
      {count === 0 ? (
        link === "" ? (
          <button
            type={type}
            onClick={onclick}
            disabled={disabled}
            className={`${className} ${
              border ? "border" : ""
            } bg-${background} text-lg rounded-lg px-3 py-1 text-White disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {text}
          </button>
        ) : (
          <Link to={link}>
            <button
              type={type}
              onClick={onclick}
              disabled={disabled}
              className={`${className} ${
                border ? "border" : ""
              } bg-${background} text-lg rounded-lg px-3 py-1 text-White disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {text}
            </button>
          </Link>
        )
      ) : (
        <div className={`flex items-center ${className}`}>
          <button
            onClick={onclickPlus}
            disabled={count + 1 === max || disabled}
            className={`${
              border ? "border" : ""
            } bg-${background}  rounded-lg px-1 sm:px-2 py-1 sm:py-2 text-White disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <FaPlus />
          </button>
          <span className="mx-2 text-2xl">{count}</span>
          <button
            onClick={onclickMinus}
            className={`${
              border ? "border" : ""
            } bg-${background}  rounded-lg px-1 sm:px-2 py-1 sm:py-2 text-White`}
          >
            <FaMinus />
          </button>
        </div>
      )}
    </>
  );
};

export default Button;
