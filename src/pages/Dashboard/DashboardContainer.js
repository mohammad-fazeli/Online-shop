import React, { useEffect } from "react";
import { connect } from "react-redux";
import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";
import ProductListByTitle from "../../components/ProductListbytitle/ProductListByTitle";
import AmazingOffer from "./components/AmazingOffer";
import Baner from "./components/Baner";
import ProductCount from "./components/ProductCount";
import {
  fetchAmazingOffer,
  fetchBestsellers,
  fetchNewest,
} from "./Actions/DashboardActions";

const DashboardContainer = ({
  amazingoffer,
  fetchAmazingOffer,
  fetchBestsellers,
  bestsellers,
  fetchNewest,
  newest,
}) => {
  useEffect(() => {
    fetchAmazingOffer();
    fetchBestsellers();
    fetchNewest();
  }, [fetchAmazingOffer, fetchBestsellers, fetchNewest]);

  return (
    <div className="pt-32 overflow-hidden">
      <Header />
      <AmazingOffer items={amazingoffer} />
      <div className="w-11/12 sm:min-w-640 sm:max-w-sm lg:min-w-1024 lg:max-w-lg xl:min-w-1280 xl:max-w-xl 2xl:min-w-1536 2xl:max-w-2xl mx-auto">
        <ProductCount />
        <ProductListByTitle title="پرفروش های هفته" items={bestsellers} />
        <div className="flex flex-col justify-center sm:flex-row sm:gap-3.5">
          <Baner src="img/book.png" />
          <Baner src="img/mobile.png" />
        </div>
        <ProductListByTitle title="منتخب جدیدترین کالاها" items={newest} />
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = ({ dashboard }) => {
  return {
    amazingoffer: dashboard.amazingoffer,
    bestsellers: dashboard.Bestsellers,
    newest: dashboard.newest,
  };
};

const mapDispatchToProps = {
  fetchAmazingOffer,
  fetchBestsellers,
  fetchNewest,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
