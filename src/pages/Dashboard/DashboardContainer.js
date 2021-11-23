import React from "react";
import Header from "../../components/Header/Header";
import AmazingOffer from "./components/AmazingOffer";
import ProductCount from "./components/ProductCount";

const DashboardContainer = () => {
  return (
    <div className="pt-32">
      <Header />
      <AmazingOffer />
      <div className="min-w-full sm:min-w-640 sm:max-w-sm lg:min-w-1024 lg:max-w-lg xl:min-w-1280 xl:max-w-xl 2xl:min-w-1536 2xl:max-w-2xl mx-auto">
        <ProductCount />
      </div>
    </div>
  );
};

export default DashboardContainer;
