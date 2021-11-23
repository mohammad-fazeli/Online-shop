import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaFacebookF,
  FaTelegramPlane,
} from "react-icons/fa";
import Button from "../button/Button";

const Footer = () => {
  return (
    <footer
      dir="rtl"
      className="bg-footer w-full text-footertext pt-5 pb-10 mt-7"
    >
      <div className=" flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-around sm:items-start sm:gap-0 sm:text-right w-11/12 sm:min-w-640 sm:max-w-sm lg:min-w-1024 lg:max-w-lg xl:min-w-1280 xl:max-w-xl 2xl:min-w-1536 2xl:max-w-2xl mx-auto">
        <div>
          <h1 className="text-white text-lg">خدمات مشتریان</h1>
          <ul>
            <li>پاسخ به پرسش های متداول</li>
            <li>رویه های بازگرداندن کالا</li>
            <li>شرایط استفاده</li>
            <li>حریم خصوصی</li>
            <li>گزارش باگ</li>
          </ul>
        </div>
        <div>
          <h1 className="text-white text-lg">راهنمای خرید</h1>
          <ul>
            <li>نحوه ثبت سفارش</li>
            <li>رویه ارسال سفارش</li>
            <li>شیوه های پرداخت</li>
          </ul>
        </div>
        <div>
          <div>
            <h1 className="text-white text-lg">
              ما را در شبکه های اجتماعی دنبال کنید
            </h1>
            <div className="flex justify-center gap-3.5 text-xl pt-1">
              <FaInstagram className="cursor-pointer" />
              <FaGithub className="cursor-pointer" />
              <FaYoutube className="cursor-pointer" />
              <FaFacebookF className="cursor-pointer" />
              <FaTelegramPlane className="cursor-pointer" />
            </div>
          </div>
          <div className="mt-4">
            <h1 className="text-white text-lg">
              از جدید ترین تخفیف ها با خبر شوید
            </h1>
            <div className="flex flex-row gap-1 items-center pt-2">
              <input
                type="text"
                placeholder="ایمیل خود را وارد کنید"
                className="bg-Backgroundfooterinput rounded-lg py-1.5 px-1 outline-none"
              />
              <Button
                text="ثبت"
                background="Backgroundfooterinput"
                border={false}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
