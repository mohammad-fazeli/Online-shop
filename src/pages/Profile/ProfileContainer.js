import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";

const ProfileContainer = () => {
  const [isLogin, setIsLogin] = useState(true);
  useEffect(() => {
    const user = localStorage.getItem("user");
    user ? setIsLogin(true) : setIsLogin(false);
  }, []);

  if (isLogin) {
    return (
      <div className="pt-32">
        <Header />
        <div className="w-full h-96 flex justify-center items-center">
          <Button
            text="خروج از حساب کاربری"
            onclick={() => {
              localStorage.removeItem("user");
              setIsLogin(false);
            }}
          />
        </div>
        <Footer />
      </div>
    );
  } else {
    return <Navigate replace to="/" />;
  }
};

export default ProfileContainer;
