import React, { useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import { clear } from "../Cart/Actions/CartActions";

const CheckoutContainer = ({ clear }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (isLogin) {
    return (
      <div className="pt-32">
        <Header />
        <div className="w-full h-96 flex justify-center items-center">
          <Button
            text="عملیات با موفقیت انجام شد"
            onclick={() => {
              clear();
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
const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = { clear };

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);
