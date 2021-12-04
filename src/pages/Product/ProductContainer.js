import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ImageGallery from "react-image-gallery";
import { useParams } from "react-router-dom";
import { fetchProduct } from "./Actions/ProductActions";

import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";

import { FaStar } from "react-icons/fa";
import Button from "../../components/button/Button";
import Details from "./components/Details";

const ProductContainer = ({ product, fetchProduct }) => {
  const [state, setState] = useState(false);
  const { category, id } = useParams();
  useEffect(() => {
    fetchProduct(category, id);
  }, [category, fetchProduct, id]);

  const priceBeforoff = (product.price * 100) / (100 - product.Discount);
  return (
    <div className="pt-32">
      <Header />
      <div className=" w-11/12 2xl:min-w-1536 2xl:max-w-2xl mx-auto">
        <div className="flex flex-col items-center gap-3 sm:flex-row-reverse sm:justify-center sm:gap-14 sm:items-start ">
          <div className={`w-full text-center sm:w-96 ${state && "z-50"}`}>
            <ImageGallery
              items={product.images ? product.images : []}
              useBrowserFullscreen={false}
              showPlayButton={false}
              onScreenChange={(e) => {
                setState(e);
              }}
              isRTL={true}
            />
          </div>

          <div dir="rtl" className="w-full text-lg sm:w-auto">
            <h1 className="sm:text-xl mb-4">{product.model}</h1>
            {product.Brand && <h2 className=" mb-2">برند: {product.Brand}</h2>}
            <div className="flex gap-2 mb-2">
              <FaStar className="text-star" />
              <span className="text-disabletext">{product.Rated}</span>
            </div>
            {product.Discount !== 0 && (
              <div className="flex items-center">
                <span className="text-disabletext line-through">
                  {priceBeforoff?.toLocaleString()}
                </span>
                <span className="bg-Backgroundsecondary h-6 text-White rounded-xl px-1 mr-1">
                  {product.Discount}%
                </span>
              </div>
            )}
            <div>{product.price?.toLocaleString()} تومان </div>
            <div>{product.availability ? "موجود در انبار" : "ناموجود"}</div>
            <Button
              text="افزودن به سبد خرید"
              disabled={!product.availability}
              className="mt-4"
            />
          </div>
        </div>
        <div>
          <Details
            description={product.description}
            specifications={product.specifications}
            comments={product.comments}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = ({ product }) => {
  return { product: product.product };
};

const mapDispatchToProps = { fetchProduct };

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
