import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";
import ProductListByTitle from "../../components/ProductListbytitle/ProductListByTitle";
import AmazingOffer from "./components/AmazingOffer";
import Baner from "./components/Baner";
import ProductCount from "./components/ProductCount";

const DashboardContainer = () => {
  return (
    <div className="pt-32 overflow-hidden">
      <Header />
      <AmazingOffer />
      <div className="w-11/12 sm:min-w-640 sm:max-w-sm lg:min-w-1024 lg:max-w-lg xl:min-w-1280 xl:max-w-xl 2xl:min-w-1536 2xl:max-w-2xl mx-auto">
        <ProductCount />
        <ProductListByTitle title="پرفروش های هفته" />
        <div className="flex flex-col justify-center sm:flex-row sm:gap-3.5">
          <Baner src="img/book.png" />
          <Baner src="img/mobile.png" />
        </div>
        <ProductListByTitle title="منتخب جدیدترین کالاها" />
      </div>
      <Footer />
    </div>
  );
};

export default DashboardContainer;
