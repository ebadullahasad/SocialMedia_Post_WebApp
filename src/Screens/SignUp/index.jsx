import React, { useEffect, useState } from "react";
import Inputfield from "../../Components/Inputfield";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import { useSelector } from "react-redux";

const Signup = () => {
  const theme = useSelector((state) => state.theme.theme);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const [fromData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(fromData);
    e.target.reset();
  };

  return (
    <div className="bg-background dark:bg-backgroundDark bg-no-repeat bg-cover w-full flex items-center min-h-screen  justify-center dark:text-whiteColor">
      <div className="text-center lg:w-[40%] md:w-[60%] w-[90%] md:mb-4 mb-2">
        <h2 className="text3 font-semibold dark:text-whiteColor md:py- py-2 ">
          Signup
        </h2>
        <div className="bg-[#00000015] dark:bg-[#fff1] rounded-xl w-full md:p-6 p-2">
          <form onSubmit={HandleSubmit} className="text-center ">
            <Inputfield
              Labelname="First Name"
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              htmlFor="firstName"
              labelstyle="text11"
              inputStyle="md:p-4 p-2 lg:w-[90%] w-full  mx-auto rounded-full placeholder:text13 text13 placeholder:text-gray bg-gray2 "
              divstyle="w-full"
              innerDiv="md:py-1"
              onChange={(e) =>
                setFormData({ ...fromData, firstName: e.target.value })
              }
            />
            <Inputfield
              Labelname="Last Name"
              type="text"
              placeholder="Enter Last Name"
              name="lastName"
              htmlFor="lastName"
              labelstyle="text11"
              inputStyle="md:p-4 p-2 lg:w-[90%] w-full  mx-auto rounded-full placeholder:text13 text13 placeholder:text-gray bg-gray2 "
              divstyle="w-full"
              innerDiv="md:py-1"
              onChange={(e) =>
                setFormData({ ...fromData, lastName: e.target.value })
              }
            />
            <Inputfield
              Labelname="Email"
              type="email"
              placeholder="Enter Email"
              name="email"
              htmlFor="email"
              labelstyle="text11"
              inputStyle="md:p-4 p-2 lg:w-[90%] w-full  mx-auto rounded-full placeholder:text13 text13 placeholder:text-gray bg-gray2 "
              divstyle="w-full"
              innerDiv="md:py-1"
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
              divstyle="w-full"
              innerDiv="md:py-1"
              onChange={(e) =>
                setFormData({ ...fromData, password: e.target.value })
              }
            />
            <div className="py-2  text-lightblueColor dark:text-cgreen text13">
              <Link to={-1}>Already have an Account</Link>
            </div>

            <div className="w-full">
              <Button
                btnname="Sign Up"
                btnStyle="px-20 md:py-3 py-2 text13 rounded-full  bg-primaryColor text-whiteColor"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
