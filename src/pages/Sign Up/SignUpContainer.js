import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Button from "../../components/button/Button";
import TextField from "../../components/textField/TextField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { sha256 } from "js-sha256";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const SignUpContainer = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const validate = Yup.object({
    userName: Yup.string()
      .max(15, "نام کاربری بیش از 20 کاراکتر است")
      .required("نام کاربری خود را وارد کنید"),
    email: Yup.string()
      .email("ایمیل نامعتبر")
      .required("ایمیل خود را وارد کنید"),
    password: Yup.string()
      .min(6, "رمز عبور باید بیش از 6 کاراکتر باشد")
      .required("رمز عبور خود را وارد کنید"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "رمزعبور هماهنگ نیست")
      .required("رمز عبور خود را تکرار کنید"),
  });
  const onSubmitHandle = (obj) => {
    const user = {
      name: obj.userName,
      password: sha256(obj.password),
      email: obj.email,
    };
    localStorage.setItem("user", JSON.stringify(user));
    setRedirect(true);
  };
  if (redirect) {
    return <Navigate replace to="/" />;
  }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white w-96 rounded-lg shadow-sm flex flex-col items-center pt-2">
        <div>ثبت نام</div>
        <Formik
          initialValues={{
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={onSubmitHandle}
          validationSchema={validate}
        >
          {(formik) => (
            <Form
              onSubmit={formik.handleSubmit}
              className="w-10/12 border-b flex flex-col gap-5 items-center pb-4 mt-2 mb-4"
            >
              <div className="w-full text-right relative">
                <label htmlFor="user-name">نام کاربری</label>
                <TextField
                  name="userName"
                  type="text"
                  id="user-name"
                  placeholder="نام کاربری خود را وارد کنید"
                  className={`border rounded-sm py-2 px-1 outline-none w-full text-right text-lg‍‍‍ ${
                    formik.errors.userName &&
                    formik.touched.userName &&
                    "border-Backgroundsecondary"
                  }`}
                />
              </div>
              <div className="w-full text-right relative">
                <label htmlFor="email">ایمیل</label>
                <TextField
                  name="email"
                  type="text"
                  id="email"
                  placeholder="ایمیل خود را وارد کنید"
                  className={`border rounded-sm py-2 px-1 outline-none w-full text-right text-lg‍‍‍ ${
                    formik.errors.email &&
                    formik.touched.email &&
                    "border-Backgroundsecondary"
                  }`}
                />
              </div>
              <div className="w-full text-right relative">
                <label htmlFor="user-password">رمز عبور</label>
                <TextField
                  name="password"
                  type={showPassword ? "text" : "password"}
                  id="user-password"
                  placeholder="رمز عبور خود را وارد کنید"
                  className={`border rounded-sm py-2 px-1 outline-none w-full text-right text-lg ${
                    formik.errors.password &&
                    formik.touched.password &&
                    "border-Backgroundsecondary"
                  }`}
                />
                <div
                  className="absolute top-9 left-4 text-2xl cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </div>
              </div>

              <div className="w-full text-right relative">
                <label htmlFor="confirmPassword">تکرر رمز عبور</label>

                <TextField
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="رمز عبور خود را تکرار کنید"
                  className={`border rounded-sm py-2 px-1 outline-none w-full text-right text-lg ${
                    formik.errors.confirmPassword &&
                    formik.touched.confirmPassword &&
                    "border-Backgroundsecondary"
                  }`}
                />
                <div
                  className="absolute top-9 left-4 text-2xl cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </div>
              </div>

              <div className="w-full h-12">
                <Button
                  type="submit"
                  text="ایجاد حساب کاربری"
                  className="w-full h-full"
                />
              </div>
            </Form>
          )}
        </Formik>

        <div className="w-10/12 h-12 text-center mb-2">
          <Button
            text="ثبت نام با حساب گوگل"
            className="w-full h-full"
            background="btnblue"
          />
        </div>

        <Link
          to="/login"
          className="bg-Backgroundprimary w-full text-center py-3 rounded-lg rounded-t-none"
        >
          وارد حساب کاربری خود شوید
        </Link>
      </div>
    </div>
  );
};

export default SignUpContainer;
