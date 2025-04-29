import React, { useEffect, useState } from "react";
import Inputfield from "../../Components/Inputfield";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import { useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const [fromData, setFormData] = useState({
    email: "",
    password: "",
  });

  const theme = useSelector((state) => state.theme.theme);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(fromData);
    e.target.reset();
  };

  return (
    <div className="bg-background dark:bg-backgroundDark bg-no-repeat bg-cover w-full flex items-center min-h-screen justify-center dark:text-whiteColor ">
      <div className=" text-center lg:w-[40%] md:w-[60%] w-[90%] md:mb-10 mb-2">
        <h2 className="text3 font-semibold dark:text-whiteColor md:py-6 py-2 ">
          Login
        </h2>

        <div className="bg-[#00000015] dark:bg-[#fff1] rounded-xl w-full md:p-6 p-2">
          <form onSubmit={HandleSubmit} className="text-center">
            <Inputfield
              Labelname="Email"
              type="email"
              placeholder="Enter Email"
              name="email"
              htmlFor="email"
              labelstyle="text11"
              inputStyle="md:p-4 p-2 lg:w-[90%] w-full  mx-auto rounded-full placeholder:text13 text13 placeholder:text-gray bg-gray2 "
              divstyle="w-full mt-2"
              onChange={(e) =>
                setFormData({ ...fromData, email: e.target.value })
              }
            />
            <Inputfield
              Labelname="Password"
              type="password"
              placeholder="Enter Password"
              name="password"
              htmlFor="password"
              labelstyle="text11"
              inputStyle="md:p-4 p-2 lg:w-[90%] w-full  mx-auto rounded-full placeholder:text13 text13 placeholder:text-gray bg-gray2 "
              divstyle="w-full mt-2"
              onChange={(e) =>
                setFormData({ ...fromData, password: e.target.value })
              }
            />
            <div className="py-2  text-lightblueColor dark:text-cgreen text13">
              <Link to="/forgot-password">Forgot Password</Link>
            </div>

            <div className="md:py-4 py-1 w-full">
              <Button
                btnname="Login"
                btnStyle="px-20 md:py-3 py-2 text13 rounded-full dark:bg-cgreen  bg-primaryColor text-whiteColor"
                onPress={() => {
                  navigate("/dashboard");
                }}
              />
            </div>

            <div className="flex items-center justify-center gap-2 text13">
              <p>Create Account</p>
              <span>|</span>
              <Link
                to="/signup"
                className="text-lightblueColor dark:text-cgreen"
              >
                Signup
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
