import React, { useState, useReducer, useEffect } from "react";
import { connect } from "react-redux";
import Button from "../../components/button/Button";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";
import ProductFilterBoolContainer from "./components/ProductFilterBool/ProductFilterBoolContainer";
import ProductFilterListContainer from "./components/ProductFilterList/ProductFilterListContainer";
import ProductFilterRangeContainer from "./components/ProductFilterRange/ProductFilterRangeContainer";
import ProductList from "./components/ProductList/ProductList";
import SubdivisionList from "./components/SubdivisionList/SubdivisionList";
import { FaRegWindowClose } from "react-icons/fa";
import {
  fetchProductsData,
  fetchProductsfilter,
  fetchProductssubdivision,
} from "./Actions/ProductsActions";

const ProductsContainer = ({
  products,
  fetchProductsData,
  fetchProductsfilter,
  fetchProductssubdivision,
}) => {
  const { category } = useParams();
  useEffect(() => {
    fetchProductsData(category);
    fetchProductsfilter(category);
    fetchProductssubdivision(category);
  }, [
    category,
    fetchProductsData,
    fetchProductsfilter,
    fetchProductssubdivision,
  ]);
  const [open, setOpen] = useState(false);
  const initialState = {
    range: { min: 0, max: Infinity },
    list: [],
    availability: false,
    Discount: false,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "list":
        return { ...state, list: action.data };
      case "range":
        return {
          ...state,
          range: { min: action.data.min, max: action.data.max },
        };
      case "availability":
        return { ...state, availability: action.data };
      case "Discount":
        return { ...state, Discount: action.data };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const filterProducts = (products) => {
    const result = products.filter((item) => {
      const filterBrand =
        state.list.length !== 0 ? state.list.includes(item.Brand) : true;

      const available = state.availability ? item.availability === true : true;

      const discount = state.Discount ? item.Discount !== 0 : true;

      const range =
        item.price >= state.range.min && item.price <= state.range.max;

      return filterBrand && available && discount && range;
    });
    return result;
  };

  return (
    <div className="relative pt-32">
      <Header />
      <div className="w-full text-right pr-5 sm:hidden ">
        <Button
          text="جستوجوی پیشرفته"
          background="blue"
          border={false}
          onclick={() => setOpen(true)}
        />
      </div>
      <div className=" w-11/12 2xl:min-w-1536 2xl:max-w-2xl mx-auto">
        {products.subdivision.length !== 0 && (
          <SubdivisionList subdivision={products.subdivision} />
        )}
        <div className="flex gap-2 justify-between">
          <ProductList products={filterProducts(products.products)} />
          <div
            className={`flex flex-col gap-2 absolute w-full min-h-screen items-center top-0 pt-32
           bg-Backgroundprimary sm:p-0 sm:sticky sm:top-32 sm:w-auto sm:items-start sm:min-h-0  sm:left-auto ${
             open ? "left-0" : "-left-full"
           }`}
          >
            <FaRegWindowClose
              className={`fixed top-32 text-5xl ${
                open ? "right-2" : "-left-full"
              } text-titeltext`}
              onClick={() => setOpen(false)}
            />
            {products.filters.map((filter, index) => {
              if (filter.type === "range") {
                return (
                  <ProductFilterRangeContainer
                    key={index}
                    min={filter.min}
                    max={filter.max}
                    dispatch={dispatch}
                  />
                );
              } else if (filter.type === "list") {
                return (
                  <ProductFilterListContainer
                    key={index}
                    list={filter.value}
                    dispatch={dispatch}
                  />
                );
              } else if (filter.type === "bool") {
                return (
                  <ProductFilterBoolContainer
                    key={index}
                    dispatch={dispatch}
                    type={filter.name}
                    text={filter.title}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
const mapStateToProps = ({ products }) => {
  return { products };
};

const mapDispatchToProps = {
  fetchProductsData,
  fetchProductsfilter,
  fetchProductssubdivision,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
