import React from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle, FaSignInAlt } from "react-icons/fa";

const Login = ({ isLogin = false, userName = "" }) => {
  return (
    <Link to={isLogin ? "/profile" : "/login"}>
      {isLogin ? (
        <div className="px-2 relative rounded-xl  h-12 flex justify-center items-center bg-Backgroundprimary text-3xl hover:text-Backgroundsecondary">
          <FaRegUserCircle />
          <span className="text-sm ml-2">{userName}</span>
        </div>
      ) : (
        <div className="relative rounded-full w-12 h-12 flex justify-center items-center bg-Backgroundprimary text-3xl hover:text-Backgroundsecondary">
          <FaSignInAlt />
        </div>
      )}
    </Link>
  );
};

export default Login;
