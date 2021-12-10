import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import CartItem from "./components/CartItem";
import ReactModal from "react-modal";
import { increase, decrease, remove } from "./Actions/CartActions";

const CartContainer = ({ cart = [], increase, decrease, remove }) => {
  const [totalPriceBeforeOff, setTotalPriceBeforeOff] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const isLogin = localStorage.getItem("user") ? true : false;

  useEffect(() => {
    setTotalPrice(0);
    setTotalDiscount(0);
    setTotalPriceBeforeOff(0);

    cart.forEach((element) => {
      setTotalPrice(
        (cornetValue) => cornetValue + element.price * element.count
      );

      const priceBeforoff =
        ((element.price * 100) / (100 - element.Discount)) * element.count;
      setTotalPriceBeforeOff((cornetValue) => cornetValue + priceBeforoff);

      const Discount =
        ((element.price * 100) / (100 - element.Discount) - element.price) *
        element.count;
      setTotalDiscount((cornetValue) => cornetValue + Discount);
    });
  }, [cart]);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div className="pt-32">
      <ReactModal
        style={customStyles}
        isOpen={isOpen}
        onRequestClose={() => {
          setOpen(false);
        }}
      >
        <div>
          <h1>برای ادامه باید وارد شوید</h1>
          <div className="flex flex-col gap-3 pt-2">
            <Button
              text="ورود"
              border={false}
              className="w-full"
              link="/login"
            />
            <Button
              text="ثبت نام"
              link="/signup"
              border={false}
              background="btnblue"
              className="w-full"
            />
          </div>
        </div>
      </ReactModal>
      <Header />
      <div className=" w-11/12  xl:min-w-1280 xl:max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-8 min-h-96 relative">
          {cart.length !== 0 ? (
            <>
              <div className="bg-white w-full fixed z-40 bottom-0 right-0 flex flex-row justify-between items-center sm:hidden">
                <div dir="rtl" className="text-lg">
                  <p className="">مبلغ قابل پرداخت</p>
                  <span>
                    <span className="text-Backgroundsecondary">
                      {totalPrice.toLocaleString()}
                    </span>{" "}
                    تومان
                  </span>
                </div>
                <Button
                  text="ادامه فرایند خرید"
                  link={isLogin && "/checkout"}
                  border={false}
                  onclick={() => {
                    !isLogin && setOpen(true);
                  }}
                />
              </div>

              <div
                dir="rtl"
                className="w-full md:w-96 sticky top-32 bg-white border rounded-lg p-2"
              >
                <p className="flex justify-between pb-1">
                  <span>قیمت کل کالاها</span>
                  <span className=" flex gap-1">
                    <span>{totalPriceBeforeOff.toLocaleString()}</span>
                    <span>تومان</span>
                  </span>
                </p>

                {totalDiscount !== 0 && (
                  <p className=" flex justify-between ">
                    <span>تخفیف کالاها</span>
                    <span className="text-Backgroundsecondary flex gap-1">
                      <span>{totalDiscount.toLocaleString()}</span>
                      <span>تومان</span>
                    </span>
                  </p>
                )}

                <p className="border-t pt-2 flex justify-between text-titeltext my-2">
                  <span>جمع</span>
                  <span className=" flex gap-1">
                    <span>{totalPrice.toLocaleString()}</span>
                    <span>تومان</span>
                  </span>
                </p>
                <p>
                  هزینه‌ی ارسال در ادامه بر اساس آدرس، زمان و نحوه‌ ی ارسال
                  انتخابی شما‌ محاسبه و به این مبلغ اضافه خواهد شد
                </p>
                <div className="w-full mt-5">
                  <Button
                    onclick={() => {
                      !isLogin && setOpen(true);
                    }}
                    link={isLogin && "/checkout"}
                    text="ادامه فرایند خرید"
                    border={false}
                    className="w-full"
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
              <img
                src="/img/empty-cart.png"
                className="sm:w-80"
                alt="empty-cart"
              />
              <p className="text-2xl">سبد خريد خالی است </p>
              <Button text="يه سر به فروشگاه بزن" link="/" />
            </div>
          )}

          <div className="w-full flex flex-col gap-2">
            {cart.map((element) => (
              <CartItem
                key={element.id}
                product={element}
                increase={increase}
                decrease={decrease}
                remove={remove}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = ({ cart }) => {
  return {
    cart: cart.cartList,
  };
};

const mapDispatchToProps = { increase, decrease, remove };

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
