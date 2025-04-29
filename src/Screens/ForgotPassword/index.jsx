import React, { useEffect, useState } from "react";
import Inputfield from "../../Components/Inputfield";
import Button from "../../Components/Button";
import { useSelector } from "react-redux";

const ForgotPassword = () => {
  const theme = useSelector((state) => state.theme.theme);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const [fromData, setFormData] = useState({
    email: "",
  });

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(fromData);
    e.target.reset();
  };
  return (
    <div className="bg-background dark:bg-backgroundDark bg-no-repeat bg-cover w-full flex items-center h-screen justify-center dark:text-whiteColor">
      <div className="text-center lg:w-[40%] md:w-[60%] w-[90%] md:mb-4 mb-2">
        <h2 className="text3 font-semibold dark:text-whiteColor md:py- py-2">
          Forgot Password
        </h2>

        <div className="bg-[#00000015] dark:bg-[#fff1] rounded-xl w-full md:p-6 p-2">
          <form onSubmit={HandleSubmit} className="text-center">
            <Inputfield
              Labelname="Email"
              type="email"
              placeholder="Enter Email"
              name="email"
              htmlFor="email"
              labelstyle="text10"
              inputStyle="md:p-4 p-2 lg:w-[90%] w-full text-black  mx-auto rounded-full placeholder:text-gray text12 bg-gray2 "
              divstyle="w-full"
              innerDiv="md:py-1"
              onChange={(e) =>
                setFormData({ ...fromData, email: e.target.value })
              }
            />

            <div className="md:mt-3 mt-2">
              <Button
                btnname="Reset Password"
                btnStyle="px-8 md:py-3 py-2 text13 rounded-full  bg-primaryColor dark:bg-cgreen text-whiteColor"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
